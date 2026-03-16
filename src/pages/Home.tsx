import React from "react";
import { useNavigate } from "react-router-dom";

import AppShell from "../components/app/AppShell";
import FeaturedSuperstarCard from "../components/home/FeaturedSuperstarCard";
import ShowCountdownCard from "../components/home/ShowCountdownCard";
import QuickActionsGrid from "../components/home/QuickActionsGrid";

import featuredSuperstar from "../data/featuredSuperstar";
import useCountdown from "../hooks/useCountdown";
import useInstallPrompt from "../hooks/useInstallPrompt";

export default function Home() {
  const navigate = useNavigate();

  const { isInstallable, install } = useInstallPrompt();

  const nextShowDate = new Date("2026-03-22T19:00:00");
  const { days, hours, minutes, seconds } = useCountdown(nextShowDate);

  return (
    <AppShell title="WCPW" subtitle="Mobile App">
      <div className="space-y-5">
        {isInstallable && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-red-300">
                  Install App
                </h2>
                <p className="mt-1 text-sm text-white/70">
                  Add WCPW to your phone for the best experience.
                </p>
              </div>

              <button
                type="button"
                onClick={install}
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500"
              >
                Install
              </button>
            </div>
          </div>
        )}

        <FeaturedSuperstarCard
          name={featuredSuperstar.name}
          nickname={featuredSuperstar.nickname}
          brand={featuredSuperstar.brand}
          description={featuredSuperstar.description}
          image={featuredSuperstar.image}
          onViewRankings={() => navigate("/rankings")}
          onOpenProfile={() => navigate("/roster")}
        />

        <ShowCountdownCard
          showName="Sunday Night Showdown"
          startsAtLabel="Sunday • 7 PM PST"
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onNotify={() => navigate("/notifications")}
        />

        <QuickActionsGrid
          onPromos={() => navigate("/promos")}
          onRoster={() => navigate("/roster")}
          onTitles={() => navigate("/titles")}
          onVoting={() => navigate("/voting")}
          onShop={() => navigate("/shop")}
          onSocials={() => navigate("/socials")}
        />
      </div>
    </AppShell>
  );
}