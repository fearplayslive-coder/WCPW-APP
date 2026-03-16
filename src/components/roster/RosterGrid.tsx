import React from "react";
import { ArrowRight, Shield, Star } from "lucide-react";

export type RosterItem = {
  id: string;
  name: string;
  nickname?: string;
  brand?: string;
  alignment?: string;
  image?: string;
  featured?: boolean;
};

type RosterGridProps = {
  wrestlers: RosterItem[];
  onOpenWrestler?: (wrestler: RosterItem) => void;
};

type SuperstarCardProps = {
  wrestler: RosterItem;
  onOpen?: (wrestler: RosterItem) => void;
};

function SuperstarCard({ wrestler, onOpen }: SuperstarCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(wrestler)}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] text-left shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        {wrestler.image ? (
          <img
            src={wrestler.image}
            alt={wrestler.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
            No Image
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {wrestler.brand ? (
            <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
              {wrestler.brand}
            </span>
          ) : null}

          {wrestler.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-300 backdrop-blur">
              <Star className="h-3 w-3" />
              Featured
            </span>
          ) : null}
        </div>

        {wrestler.alignment ? (
          <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 p-2 text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="truncate text-lg font-black uppercase tracking-wide text-white">
            {wrestler.name}
          </h3>

          {wrestler.nickname ? (
            <p className="mt-1 truncate text-sm font-medium text-red-300">
              {wrestler.nickname}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          {wrestler.alignment ? (
            <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              {wrestler.alignment}
            </p>
          ) : (
            <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              WCPW Superstar
            </p>
          )}
        </div>

        <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-white/75 transition group-hover:text-white">
          Open
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </button>
  );
}

export default function RosterGrid({
  wrestlers,
  onOpenWrestler,
}: RosterGridProps) {
  if (!wrestlers.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
        <h3 className="text-base font-semibold text-white">No roster entries yet</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          Superstars will appear here once the roster data is connected.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {wrestlers.map((wrestler) => (
        <SuperstarCard
          key={wrestler.id}
          wrestler={wrestler}
          onOpen={onOpenWrestler}
        />
      ))}
    </div>
  );
}