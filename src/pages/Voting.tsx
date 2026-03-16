import React from "react";
import { Vote } from "lucide-react";

import AppShell from "../components/app/AppShell";

const polls = [
  {
    id: "1",
    title: "Match of the Month",
    description: "Vote for the best WCPW match this month.",
  },
  {
    id: "2",
    title: "Promo of the Month",
    description: "Vote for the strongest promo in WCPW.",
  },
];

export default function Voting() {
  return (
    <AppShell title="Fan Voting" subtitle="Community Polls">
      <div className="space-y-4">
        {polls.map((poll) => (
          <div
            key={poll.id}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
                <Vote className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white">{poll.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {poll.description}
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500"
                >
                  Vote Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}