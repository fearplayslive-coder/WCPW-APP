import React from "react";
import { BarChart3 } from "lucide-react";

import AppShell from "../components/app/AppShell";

const rankings = [
  { id: "1", name: "Roddy Rice", rank: 1, brand: "Showdown" },
  { id: "2", name: "Ray Ultimo", rank: 2, brand: "Warfare" },
  { id: "3", name: "Jimmy Harper", rank: 3, brand: "WCPW" },
];

export default function Rankings() {
  return (
    <AppShell title="Rankings" subtitle="Top WCPW Superstars">
      <div className="space-y-3">
        {rankings.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
              <BarChart3 className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-300">
                Rank #{item.rank}
              </p>
              <h2 className="mt-1 text-base font-semibold text-white">
                {item.name}
              </h2>
              <p className="mt-1 text-sm text-white/60">{item.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}