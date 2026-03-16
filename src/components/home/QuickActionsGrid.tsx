import React from "react";
import {
  Mic2,
  Users,
  Trophy,
  Vote,
  ShoppingBag,
  Share2,
} from "lucide-react";

type QuickActionItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

type QuickActionsGridProps = {
  onPromos?: () => void;
  onRoster?: () => void;
  onTitles?: () => void;
  onVoting?: () => void;
  onShop?: () => void;
  onSocials?: () => void;
};

type ActionButtonProps = {
  item: QuickActionItem;
};

function ActionButton({ item }: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={item.onClick}
      className="flex min-h-[96px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center transition hover:bg-white/[0.08]"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/15 text-red-300">
        {item.icon}
      </div>

      <span className="text-sm font-bold tracking-wide text-white">
        {item.label}
      </span>
    </button>
  );
}

export default function QuickActionsGrid({
  onPromos,
  onRoster,
  onTitles,
  onVoting,
  onShop,
  onSocials,
}: QuickActionsGridProps) {
  const actions: QuickActionItem[] = [
    {
      id: "promos",
      label: "Promos",
      icon: <Mic2 className="h-5 w-5" />,
      onClick: onPromos,
    },
    {
      id: "roster",
      label: "Roster",
      icon: <Users className="h-5 w-5" />,
      onClick: onRoster,
    },
    {
      id: "titles",
      label: "Titles",
      icon: <Trophy className="h-5 w-5" />,
      onClick: onTitles,
    },
    {
      id: "voting",
      label: "Voting",
      icon: <Vote className="h-5 w-5" />,
      onClick: onVoting,
    },
    {
      id: "shop",
      label: "Shop",
      icon: <ShoppingBag className="h-5 w-5" />,
      onClick: onShop,
    },
    {
      id: "socials",
      label: "Socials",
      icon: <Share2 className="h-5 w-5" />,
      onClick: onSocials,
    },
  ];

  return (
    <section>
      <div className="mb-3">
        <h2 className="text-base font-semibold uppercase tracking-[0.16em] text-white">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-white/55">
          Jump straight into the biggest parts of WCPW.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((item) => (
          <ActionButton key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}