"use client";

import { accommodations } from "@/data/accommodations";
import { useVotes } from "@/lib/useVotes";
import { isSupabaseConfigured } from "@/lib/supabase";
import AccommodationCard from "./AccommodationCard";

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function Accommodations({ selectedId, onSelect }: Props) {
  const { votesFor, castVote, removeVote, voterName, votes, myVotedAccommodationIds } =
    useVotes();

  const maxVotes = Math.max(1, ...accommodations.map((a) => votesFor(a.id).length));

  return (
    <section id="bo" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl sm:px-8">
        <p className="font-hand text-2xl text-burgundy sm:text-3xl">Avstemning</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Kor skal vi bo? <span className="not-italic">🏠</span>
        </h2>
        <p className="mt-5 max-w-xl font-body text-ink/70">
          Se over alternativan og stem på så mange favoritta du vil. Trykk
          på nytt for å fjerne stemmen din igjen.
        </p>

        {!isSupabaseConfigured && (
          <p className="mt-4 max-w-xl rounded-sm bg-dustyblue/20 px-4 py-3 text-sm text-ink/70">
            Stemmegivning er ikke koblet til Supabase enda — se README for
            oppsett. Kortene under vises fortsatt, men stemmer lagres ikke.
          </p>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((acc) => (
            <AccommodationCard
              key={acc.id}
              accommodation={acc}
              votes={votesFor(acc.id)}
              maxVotes={maxVotes}
              voterName={voterName}
              hasVotedHere={myVotedAccommodationIds.includes(acc.id)}
              onVote={castVote}
              onRemoveVote={removeVote}
              isSelected={selectedId === acc.id}
              onSelect={() => onSelect(acc.id)}
            />
          ))}
        </div>

        {votes.length > 0 && (
          <p className="mt-6 text-sm text-ink/50">
            {votes.length} {votes.length === 1 ? "stemme" : "stemmer"} avgitt
            totalt.
          </p>
        )}
      </div>
    </section>
  );
}