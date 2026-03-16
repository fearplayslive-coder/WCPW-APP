import React from "react";
import { Bell, ChevronRight, ShoppingBag, Share2, Vote, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AppShell from "../components/app/AppShell";

type MoreItem = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

function MoreButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.08]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-base font-semibold text-white">{label}</p>
      </div>

      <ChevronRight className="h-5 w-5 text-white/45" />
    </button>
  );
}

export default function More() {
  const navigate = useNavigate();

  const items: MoreItem[] = [
    { label: "Fan Voting", icon: <Vote className="h-5 w-5" />, path: "/voting" },
    { label: "Shop", icon: <ShoppingBag className="h-5 w-5" />, path: "/shop" },
    { label: "Socials", icon: <Share2 className="h-5 w-5" />, path: "/socials" },
    { label: "Notifications", icon: <Bell className="h-5 w-5" />, path: "/notifications" },
    { label: "Rankings", icon: <BarChart3 className="h-5 w-5" />, path: "/rankings" },
  ];

  return (
    <AppShell title="More" subtitle="Extra WCPW Sections">
      <div className="space-y-3">
        {items.map((item) => (
          <MoreButton
            key={item.path}
            label={item.label}
            icon={item.icon}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </AppShell>
  );
}