import React from "react";
import TopTabs, { type TopTabItem } from "../app/TopTabs";

export type RosterHubView = "roster" | "teams" | "moves";

type RosterHubSwitcherProps = {
  value: RosterHubView;
  onChange: (value: RosterHubView) => void;
  className?: string;
};

const tabs: TopTabItem[] = [
  { value: "roster", label: "Roster" },
  { value: "teams", label: "Tag Teams" },
  { value: "moves", label: "Trademarked Moves" },
];

export default function RosterHubSwitcher({
  value,
  onChange,
  className = "",
}: RosterHubSwitcherProps) {
  return (
    <TopTabs
      tabs={tabs}
      value={value}
      onChange={(next: string) => onChange(next as RosterHubView)}
      className={className}
    />
  );
}