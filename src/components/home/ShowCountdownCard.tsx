import React from "react";
import { Bell, CalendarDays, TimerReset } from "lucide-react";

type ShowCountdownCardProps = {
  showName: string;
  showLabel?: string;
  startsAtLabel: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  onNotify?: () => void;
};

type TimeBoxProps = {
  label: string;
  value: number;
};

function TimeBox({ label, value }: TimeBoxProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4 text-center">
      <div className="text-2xl font-black tabular-nums text-white">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
    </div>
  );
}

export default function ShowCountdownCard({
  showName,
  showLabel = "Next Show",
  startsAtLabel,
  days,
  hours,
  minutes,
  seconds,
  onNotify,
}: ShowCountdownCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-black to-red-950/30 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <TimerReset className="h-3.5 w-3.5" />
            {showLabel}
          </div>

          <h2 className="mt-3 text-2xl font-black uppercase tracking-wide text-white">
            {showName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-white/65">
            <CalendarDays className="h-4 w-4" />
            <span>{startsAtLabel}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onNotify}
          className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-red-300 transition hover:bg-red-500/20"
        >
          <Bell className="h-4 w-4" />
          Notify
        </button>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Mins" value={minutes} />
        <TimeBox label="Secs" value={seconds} />
      </div>
    </section>
  );
}