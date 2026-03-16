import React from "react";
import { Crown, CalendarDays } from "lucide-react";

import AppShell from "../components/app/AppShell";

type TitleHistoryEntry = {
  id: string;
  titleName: string;
  champion: string;
  start: string;
  end: string;
  notes?: string;
};

const titleHistory: TitleHistoryEntry[] = [
  {
    id: "1",
    titleName: "World Heavyweight Championship",
    champion: "Roddy Rice",
    start: "March 1, 2026",
    end: "Present",
    notes: "Became champion in dominant fashion.",
  },
  {
    id: "2",
    titleName: "Pacific Pro Championship",
    champion: "Ray Ultimo",
    start: "February 10, 2026",
    end: "Present",
    notes: "Still building momentum every week.",
  },
];

function TitleHistoryCard({ item }: { item: TitleHistoryEntry }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
          <Crown className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-300">
            {item.titleName}
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {item.champion}
          </h3>

          <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/50">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>
              {item.start} — {item.end}
            </span>
          </div>

          {item.notes ? (
            <p className="mt-3 text-sm leading-6 text-white/65">{item.notes}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Titles() {
  return (
    <AppShell title="Title History" subtitle="Championship Lineage">
      <div className="space-y-4">
        {titleHistory.map((item) => (
          <TitleHistoryCard key={item.id} item={item} />
        ))}
      </div>
    </AppShell>
  );
}