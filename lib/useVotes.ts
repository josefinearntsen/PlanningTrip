"use client";

import { useCallback, useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "./supabase";

export type Vote = {
  id: string;
  accommodation_id: string;
  voter_name: string;
  created_at: string;
};

type VotesState = {
  votes: Vote[];
  loading: boolean;
  error: string | null;
};

const LOCAL_STORAGE_KEY = "aarhus2026_voter_name";

export function useVotes() {
  const [state, setState] = useState<VotesState>({
    votes: [],
    loading: true,
    error: null,
  });
  const [voterName, setVoterName] = useState<string | null>(null);

  // Husk navnet på denne enheten så man slipper å skrive det på nytt.
  useEffect(() => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setVoterName(stored);
  }, []);

  const rememberName = useCallback((name: string) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, name);
    setVoterName(name);
  }, []);

  const fetchVotes = useCallback(async () => {
    if (!supabase) {
      setState({ votes: [], loading: false, error: "not-configured" });
      return;
    }
    const { data, error } = await supabase
      .from("votes")
      .select("id, accommodation_id, voter_name, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      setState({ votes: [], loading: false, error: error.message });
      return;
    }
    setState({ votes: data ?? [], loading: false, error: null });
  }, []);

  useEffect(() => {
    fetchVotes();

    const client = supabase;
    if (!client) return;

    // Live-oppdatering: når noen andre stemmer, oppdaterer resultatet seg
    // automatisk for alle som har siden åpen.
    const channel = client
      .channel("votes-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "votes" },
        () => {
          fetchVotes();
        }
      )
      .subscribe();

    return () => {
      client.removeChannel(channel);
    };
  }, [fetchVotes]);

  // Man kan nå stemme på FLERE bosteder samtidig - en stemme per
  // (bosted + person), ikke én stemme totalt per person.
  // Se unique index på (accommodation_id, voter_name_normalized) i schema.sql.
  const castVote = useCallback(
    async (accommodationId: string, name: string) => {
      if (!supabase) {
        return { error: "Stemmegivning er ikke koblet til enda (mangler Supabase)." };
      }
      const trimmedName = name.trim();
      if (!trimmedName) return { error: "Skriv inn navnet ditt først." };

      rememberName(trimmedName);

      const { error } = await supabase.from("votes").upsert(
        {
          accommodation_id: accommodationId,
          voter_name: trimmedName,
          voter_name_normalized: trimmedName.toLowerCase(),
        },
        { onConflict: "accommodation_id,voter_name_normalized" }
      );

      if (error) return { error: error.message };

      await fetchVotes();
      return { error: null };
    },
    [fetchVotes, rememberName]
  );

  // Fjerner stemmen til (accommodationId + name) - brukes når man trykker
  // på nytt på et bosted man allerede har stemt på.
  const removeVote = useCallback(
    async (accommodationId: string, name: string) => {
      if (!supabase) {
        return { error: "Stemmegivning er ikke koblet til enda (mangler Supabase)." };
      }
      const trimmedName = name.trim();
      if (!trimmedName) return { error: "Mangler navn." };

      const { error } = await supabase
        .from("votes")
        .delete()
        .eq("accommodation_id", accommodationId)
        .eq("voter_name_normalized", trimmedName.toLowerCase());

      if (error) return { error: error.message };

      await fetchVotes();
      return { error: null };
    },
    [fetchVotes]
  );

  const votesFor = useCallback(
    (accommodationId: string) =>
      state.votes.filter((v) => v.accommodation_id === accommodationId),
    [state.votes]
  );

  // Alle bostedene denne personen har stemt på (kan nå være flere).
  const myVotedAccommodationIds = voterName
    ? state.votes
        .filter((v) => v.voter_name.toLowerCase() === voterName.toLowerCase())
        .map((v) => v.accommodation_id)
    : [];

  return {
    votes: state.votes,
    loading: state.loading,
    error: state.error,
    votesFor,
    castVote,
    removeVote,
    voterName,
    myVotedAccommodationIds,
  };
}