import React from "react";
import TopTabs, { type TopTabItem } from "../app/TopTabs";

export type PromoView = "live" | "text";

type PromoSwitcherProps = {
  value: PromoView;
  onChange: (value: PromoView) => void;
  className?: string;
};

const tabs: TopTabItem[] = [
  { value: "live", label: "Live Promos" },
  { value: "text", label: "Text Promos" },
];

export default function PromoSwitcher({
  value,
  onChange,
  className = "",
}: PromoSwitcherProps) {
  return (
    <TopTabs
      tabs={tabs}
      value={value}
      onChange={(next: string) => onChange(next as PromoView)}
      className={className}
    />
  );
}