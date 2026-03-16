import React from "react";
import { BadgeCheck, ChevronRight, Sparkles } from "lucide-react";

export type TrademarkMoveItem = {
  id: string;
  moveName: string;
  wrestlerName: string;
  moveType?: string;
  status?: string;
  approvedAtLabel?: string;
  variant?: string;
};

type TrademarkMovesListProps = {
  moves: TrademarkMoveItem[];
  onOpenMove?: (move: TrademarkMoveItem) => void;
};

type TrademarkMoveCardProps = {
  move: TrademarkMoveItem;
  onOpen?: (move: TrademarkMoveItem) => void;
};

function getStatusClasses(status?: string) {
  const normalized = (status ?? "").toLowerCase();

  if (normalized.includes("approved")) {
    return "border-emerald-500/20 bg-emerald-500/10 text-emerald-300";
  }

  if (normalized.includes("pending")) {
    return "border-yellow-400/20 bg-yellow-400/10 text-yellow-300";
  }

  if (normalized.includes("denied") || normalized.includes("rejected")) {
    return "border-red-500/20 bg-red-500/10 text-red-300";
  }

  return "border-white/10 bg-white/5 text-white/75";
}

function TrademarkMoveCard({ move, onOpen }: TrademarkMoveCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(move)}
      className="w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
          <Sparkles className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
                {move.wrestlerName}
              </p>

              <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-6 text-white">
                {move.moveName}
              </h3>
            </div>

            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/45" />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {move.moveType ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                {move.moveType}
              </span>
            ) : null}

            {move.variant ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                {move.variant}
              </span>
            ) : null}

            {move.status ? (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${getStatusClasses(
                  move.status
                )}`}
              >
                <BadgeCheck className="h-3 w-3" />
                {move.status}
              </span>
            ) : null}
          </div>

          {move.approvedAtLabel ? (
            <p className="mt-3 text-xs text-white/45">
              Recorded: {move.approvedAtLabel}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}

export default function TrademarkMovesList({
  moves,
  onOpenMove,
}: TrademarkMovesListProps) {
  if (!moves.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
        <h3 className="text-base font-semibold text-white">
          No trademarked moves yet
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          Approved and pending trademarked moves will appear here once they are connected.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {moves.map((move) => (
        <TrademarkMoveCard key={move.id} move={move} onOpen={onOpenMove} />
      ))}
    </div>
  );
}