import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AppHeaderProps = {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
};

export default function AppHeader({
  title = "WCPW",
  subtitle,
  showBackButton = false,
  onBack,
  rightSlot,
}: AppHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }

    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 px-4 pb-3 pt-4 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/75">
      <div className="flex items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          {showBackButton ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : null}

          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold tracking-wide text-white">
              {title}
            </h1>
            {subtitle ? (
              <p className="truncate text-xs text-white/60">{subtitle}</p>
            ) : null}
          </div>
        </div>

        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </header>
  );
}