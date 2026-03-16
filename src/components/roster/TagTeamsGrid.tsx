import React from "react";
import { ArrowRight, Swords, Users2 } from "lucide-react";

export type TagTeamItem = {
  id: string;
  name: string;
  members: string[];
  brand?: string;
  image?: string;
  finisher?: string;
};

type TagTeamsGridProps = {
  teams: TagTeamItem[];
  onOpenTeam?: (team: TagTeamItem) => void;
};

type TagTeamCardProps = {
  team: TagTeamItem;
  onOpen?: (team: TagTeamItem) => void;
};

function TagTeamCard({ team, onOpen }: TagTeamCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(team)}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] text-left shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        {team.image ? (
          <img
            src={team.image}
            alt={team.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/35">
            <Users2 className="h-8 w-8" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              No Team Image
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        {team.brand ? (
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            {team.brand}
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="truncate text-lg font-black uppercase tracking-wide text-white">
            {team.name}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-white/70">
            {team.members.join(" • ")}
          </p>
        </div>
      </div>

      <div className="space-y-3 px-4 py-3">
        {team.finisher ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-red-300">
            <Swords className="h-3.5 w-3.5" />
            {team.finisher}
          </div>
        ) : null}

        <div className="flex items-center justify-end text-xs font-bold uppercase tracking-[0.15em] text-white/75 transition group-hover:text-white">
          Open
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </div>
      </div>
    </button>
  );
}

export default function TagTeamsGrid({
  teams,
  onOpenTeam,
}: TagTeamsGridProps) {
  if (!teams.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
        <h3 className="text-base font-semibold text-white">No tag teams yet</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          Tag teams will show up here once they are added to the app data.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {teams.map((team) => (
        <TagTeamCard key={team.id} team={team} onOpen={onOpenTeam} />
      ))}
    </div>
  );
}