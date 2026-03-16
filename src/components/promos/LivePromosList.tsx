import React from "react";
import { CalendarDays, ExternalLink, PlayCircle, Star } from "lucide-react";

export type LivePromoItem = {
  id: string;
  title: string;
  wrestlerName: string;
  uploadedAtLabel?: string;
  thumbnail?: string;
  youtubeUrl?: string;
  featured?: boolean;
  description?: string;
};

type LivePromosListProps = {
  promos: LivePromoItem[];
  onOpenPromo?: (promo: LivePromoItem) => void;
};

type LivePromoCardProps = {
  promo: LivePromoItem;
  onOpen?: (promo: LivePromoItem) => void;
};

function LivePromoCard({ promo, onOpen }: LivePromoCardProps) {
  const handleOpen = () => {
    if (onOpen) {
      onOpen(promo);
      return;
    }

    if (promo.youtubeUrl) {
      window.open(promo.youtubeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {promo.thumbnail ? (
          <img
            src={promo.thumbnail}
            alt={promo.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-white/30">
            No Thumbnail
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {promo.featured ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300">
            <Star className="h-3 w-3" />
            Featured
          </div>
        ) : null}

        <button
          type="button"
          onClick={handleOpen}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-red-500"
        >
          <PlayCircle className="h-4 w-4" />
          Watch
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
              {promo.wrestlerName}
            </p>

            <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-6 text-white">
              {promo.title}
            </h3>
          </div>

          {promo.youtubeUrl ? (
            <button
              type="button"
              onClick={handleOpen}
              className="mt-0.5 shrink-0 rounded-full border border-white/10 bg-white/5 p-2 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label={`Open ${promo.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {promo.description ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">
            {promo.description}
          </p>
        ) : null}

        {promo.uploadedAtLabel ? (
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/45">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{promo.uploadedAtLabel}</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function LivePromosList({
  promos,
  onOpenPromo,
}: LivePromosListProps) {
  if (!promos.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
        <h3 className="text-base font-semibold text-white">No live promos yet</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          Recorded promos and segments will show up here once they are added.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {promos.map((promo) => (
        <LivePromoCard
          key={promo.id}
          promo={promo}
          onOpen={onOpenPromo}
        />
      ))}
    </div>
  );
}