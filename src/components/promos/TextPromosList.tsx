import React from "react";
import { CalendarDays, ChevronRight, FileText, MessageSquareQuote, Star } from "lucide-react";

export type TextPromoItem = {
  id: string;
  title: string;
  wrestlerName: string;
  excerpt?: string;
  postedAtLabel?: string;
  featured?: boolean;
  fullText?: string;
};

type TextPromosListProps = {
  promos: TextPromoItem[];
  onOpenPromo?: (promo: TextPromoItem) => void;
};

type TextPromoCardProps = {
  promo: TextPromoItem;
  onOpen?: (promo: TextPromoItem) => void;
};

function TextPromoCard({ promo, onOpen }: TextPromoCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
          <MessageSquareQuote className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
                  {promo.wrestlerName}
                </p>

                {promo.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-yellow-300">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                ) : null}
              </div>

              <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-6 text-white">
                {promo.title}
              </h3>
            </div>

            <div className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white/70">
              <FileText className="h-4 w-4" />
            </div>
          </div>

          {promo.excerpt ? (
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/65">
              {promo.excerpt}
            </p>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-3">
            {promo.postedAtLabel ? (
              <div className="inline-flex items-center gap-2 text-xs text-white/45">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{promo.postedAtLabel}</span>
              </div>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={() => onOpen?.(promo)}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Read More
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TextPromosList({
  promos,
  onOpenPromo,
}: TextPromosListProps) {
  if (!promos.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
        <h3 className="text-base font-semibold text-white">No text promos yet</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          Written callouts, statements, and promo drops will show up here once
          they are posted.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {promos.map((promo) => (
        <TextPromoCard
          key={promo.id}
          promo={promo}
          onOpen={onOpenPromo}
        />
      ))}
    </div>
  );
}