import React from "react";
import { Home, Mic2, Users, Trophy, Grid2x2 } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/promos", label: "Promos", icon: Mic2 },
  { to: "/roster", label: "Roster", icon: Users },
  { to: "/titles", label: "Titles", icon: Trophy },
  { to: "/more", label: "More", icon: Grid2x2 },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
      <div className="mx-auto grid max-w-md grid-cols-5 px-2 pb-3 pt-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "flex min-h-[60px] flex-col items-center justify-center gap-1 rounded-2xl transition",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white/85",
                ].join(" ")
              }
            >
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium tracking-wide">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}