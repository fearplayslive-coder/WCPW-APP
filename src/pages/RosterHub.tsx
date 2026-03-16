import React, { useState } from "react";

import AppShell from "../components/app/AppShell";
import PromoSwitcher, {
  type PromoView,
} from "../components/promos/PromoSwitcher";
import LivePromosList, {
  type LivePromoItem,
} from "../components/promos/LivePromosList";
import TextPromosList, {
  type TextPromoItem,
} from "../components/promos/TextPromosList";

const livePromos: LivePromoItem[] = [
  {
    id: "live-1",
    title: "Roddy Rice sends a warning before Showdown",
    wrestlerName: "Roddy Rice",
    uploadedAtLabel: "March 16, 2026",
    thumbnail: "/promo-thumb-1.jpg",
    youtubeUrl: "https://youtube.com",
    featured: true,
    description:
      "Roddy Rice makes it clear that nobody is safe heading into Sunday Night Showdown.",
  },
];

const textPromos: TextPromoItem[] = [
  {
    id: "text-1",
    title: "The darkness is already here.",
    wrestlerName: "Roddy Rice",
    postedAtLabel: "March 16, 2026",
    featured: true,
    excerpt:
      "You keep waiting on warnings. You keep waiting on mercy. What you should be doing is preparing for what happens next.",
    fullText:
      "You keep waiting on warnings. You keep waiting on mercy. What you should be doing is preparing for what happens next.",
  },
];

export default function Promos() {
  const [view, setView] = useState<PromoView>("live");

  return (
    <AppShell title="Promos" subtitle="Live and Text">
      <div className="space-y-4">
        <PromoSwitcher value={view} onChange={setView} />

        {view === "live" ? (
          <LivePromosList promos={livePromos} />
        ) : (
          <TextPromosList
            promos={textPromos}
            onOpenPromo={(promo) => {
              alert(promo.fullText ?? promo.excerpt ?? promo.title);
            }}
          />
        )}
      </div>
    </AppShell>
  );
}