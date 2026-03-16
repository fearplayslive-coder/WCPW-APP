import React from "react";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";

type AppShellProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showBottomNav?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
  headerRight?: React.ReactNode;
  className?: string;
};

export default function AppShell({
  children,
  title,
  subtitle,
  showHeader = true,
  showBottomNav = true,
  showBackButton = false,
  onBack,
  headerRight,
  className = "",
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-neutral-950">
        {showHeader ? (
          <AppHeader
            title={title}
            subtitle={subtitle}
            showBackButton={showBackButton}
            onBack={onBack}
            rightSlot={headerRight}
          />
        ) : null}

        <main
          className={[
            "flex-1 px-4 pb-24",
            showHeader ? "pt-3" : "pt-5",
            className,
          ].join(" ")}
        >
          {children}
        </main>

        {showBottomNav ? <BottomNav /> : null}
      </div>
    </div>
  );
}