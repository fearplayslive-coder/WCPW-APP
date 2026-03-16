import React from "react";
import { Star, ArrowRight } from "lucide-react";

type FeaturedSuperstarCardProps = {
  name: string;
  nickname?: string;
  brand?: string;
  image?: string;
  description?: string;
  onViewRankings?: () => void;
  onOpenProfile?: () => void;
};

export default function FeaturedSuperstarCard({
  name,
  nickname,
  brand,
  image,
  description,
  onViewRankings,
  onOpenProfile,
}: FeaturedSuperstarCardProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/40 via-black to-neutral-950 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.22),transparent_35%)]" />

        <div className="relative p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              <Star className="h-3.5 w-3.5" />
              Featured Superstar
            </div>

            {brand ? (
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                {brand}
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  No Image
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-2xl font-black uppercase tracking-wide text-white">
                {name}
              </h2>

              {nickname ? (
                <p className="mt-1 truncate text-sm font-medium text-red-300">
                  {nickname}
                </p>
              ) : null}

              {description ? (
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onViewRankings}
              className="rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              View Rankings
            </button>

            <button
              type="button"
              onClick={onOpenProfile}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              Open Profile
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}