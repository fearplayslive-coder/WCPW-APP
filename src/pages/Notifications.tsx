import React, { useState } from "react";
import { Bell } from "lucide-react";

import AppShell from "../components/app/AppShell";

export default function Notifications() {
  const [showReminders, setShowReminders] = useState(true);
  const [votingAlerts, setVotingAlerts] = useState(true);
  const [promoAlerts, setPromoAlerts] = useState(false);

  function ToggleRow({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: boolean;
    onChange: (next: boolean) => void;
  }) {
    return (
      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
            <Bell className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-white">{label}</p>
        </div>

        <button
          type="button"
          onClick={() => onChange(!value)}
          className={[
            "h-7 w-14 rounded-full transition",
            value ? "bg-red-600" : "bg-white/15",
          ].join(" ")}
        >
          <div
            className={[
              "h-7 w-7 rounded-full bg-white transition",
              value ? "translate-x-7" : "translate-x-0",
            ].join(" ")}
          />
        </button>
      </div>
    );
  }

  return (
    <AppShell title="Notifications" subtitle="Manage Alerts">
      <div className="space-y-3">
        <ToggleRow
          label="Show Reminders"
          value={showReminders}
          onChange={setShowReminders}
        />
        <ToggleRow
          label="Voting Alerts"
          value={votingAlerts}
          onChange={setVotingAlerts}
        />
        <ToggleRow
          label="Promo Alerts"
          value={promoAlerts}
          onChange={setPromoAlerts}
        />
      </div>
    </AppShell>
  );
}