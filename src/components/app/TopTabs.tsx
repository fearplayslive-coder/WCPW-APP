import React from "react";

export type TopTabItem = {
  value: string;
  label: string;
};

type TopTabsProps = {
  tabs: TopTabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function TopTabs({
  tabs,
  value,
  onChange,
  className = "",
}: TopTabsProps) {
  return (
    <div
      className={[
        "flex w-full gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-1",
        className,
      ].join(" ")}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={[
              "flex-1 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition",
              active
                ? "bg-red-600 text-white shadow-lg shadow-red-950/30"
                : "text-white/65 hover:bg-white/5 hover:text-white",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}