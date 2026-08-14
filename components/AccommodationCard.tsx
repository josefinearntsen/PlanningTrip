"use client";

import { useState } from "react";
import Image from "next/image";
import type { Accommodation } from "@/data/accommodations";
import type { Vote } from "@/lib/useVotes";
import { distanceInMeters, formatDistance, estimatedWalkMinutes } from "@/lib/distance";
import { maiaLocation } from "@/data/maia";

type Props = {
  accommodation: Accommodation;
  votes: Vote[];
  maxVotes: number;
  voterName: string | null;
  hasVotedHere: boolean;
  onVote: (accommodationId: string, name: string) => Promise<{ error: string | null }>;
  onRemoveVote: (
    accommodationId: string,
    name: string
  ) => Promise<{ error: string | null }>;
  isSelected: boolean;
  onSelect: () => void;
};

export default function AccommodationCard({
  accommodation,
  votes,
  maxVotes,
  voterName,
  hasVotedHere,
  onVote,
  onRemoveVote,
  isSelected,
  onSelect,
}: Props) {
  const [showNameInput, setShowNameInput] = useState(false);
  const [nameDraft, setNameDraft] = useState(voterName ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const distance = distanceInMeters(
    accommodation.latitude,
    accommodation.longitude,
    maiaLocation.latitude,
    maiaLocation.longitude
  );

  const percentage = maxVotes > 0 ? Math.round((votes.length / maxVotes) * 100) : 0;

  const namesPreview = votes.slice(0, 3).map((v) => v.voter_name);
  const extraCount = votes.length - namesPreview.length;

  // Man kan nå stemme på flere bosteder. Trykker man på et bosted man
  // allerede har stemt på, fjernes stemmen igjen (toggle).
  async function handleVoteClick() {
    if (!voterName) {
      setShowNameInput(true);
      return;
    }
    setSubmitting(true);
    const { error } = hasVotedHere
      ? await onRemoveVote(accommodation.id, voterName)
      : await onVote(accommodation.id, voterName);
    setSubmitting(false);
    if (error) setError(error);
  }

  async function handleSubmitName(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await onVote(accommodation.id, nameDraft);
    setSubmitting(false);
    if (error) {
      setError(error);
    } else {
      setShowNameInput(false);
    }
  }

  return (
    <div
      onClick={onSelect}
      className={`group cursor-pointer overflow-hidden rounded-sm border bg-cream shadow-card transition-all ${
        isSelected ? "border-burgundy ring-2 ring-burgundy/30" : "border-ink/10"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige">
        <Image
          src={accommodation.image}
          alt={accommodation.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {accommodation.rating && (
          <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-xs font-semibold text-ink">
            ★ {accommodation.rating}
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-ink sm:text-2xl">
            {accommodation.name}
          </h3>
        </div>
        <p className="mt-1 text-sm text-ink/50">📍 {accommodation.area}</p>

        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          {accommodation.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/70">
          <span>👯 {accommodation.guests} personer</span>
          <span>
            💰 {accommodation.pricePerPersonNOK.toLocaleString("nb-NO")} kr/pers
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-burgundy">
          🚶 {formatDistance(distance)} fra Maia · ca. {estimatedWalkMinutes(distance)} min å
          gå
        </p>

        
          <a href={accommodation.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-5 inline-block text-sm font-semibold text-burgundy underline underline-offset-4"
        >
          {accommodation.bookingLabel ?? "Se leiligheten ↗"}
        </a>

        {/* Voting - man kan stemme på flere bosteder */}
        <div className="mt-5 border-t border-ink/10 pt-4">
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-burgundy transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink/60">
              {votes.length} {votes.length === 1 ? "stemme" : "stemmer"}
              {namesPreview.length > 0 && (
                <span className="ml-1 text-ink/40">
                  · {namesPreview.join(", ")}
                  {extraCount > 0 ? ` +${extraCount}` : ""}
                </span>
              )}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleVoteClick();
              }}
              disabled={submitting}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors disabled:opacity-50 ${
                hasVotedHere
                  ? "bg-burgundy text-cream"
                  : "border border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-cream"
              }`}
            >
              {hasVotedHere ? "Stemt ♥" : "Stem på denne ♡"}
            </button>
          </div>

          {showNameInput && (
            <form
              onSubmit={handleSubmitName}
              onClick={(e) => e.stopPropagation()}
              className="mt-3 flex gap-2"
            >
              <input
                autoFocus
                type="text"
                placeholder="Hva er navnet ditt?"
                value={nameDraft}
                onChange={(e) => setNameDraft(e.target.value)}
                className="min-w-0 flex-1 rounded-full border border-ink/20 bg-cream px-4 py-2 text-sm outline-none focus:border-burgundy"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-burgundy px-4 py-2 text-sm font-medium text-cream disabled:opacity-50"
              >
                Send
              </button>
            </form>
          )}

          {error && <p className="mt-2 text-xs text-burgundy">{error}</p>}
        </div>
      </div>
    </div>
  );
}