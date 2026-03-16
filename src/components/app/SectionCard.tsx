import React from "react";
import { ChevronRight } from "lucide-react";

type SectionCardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={[
        "rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
            {icon}
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-semibold tracking-wide text-white">
                {title}
              </h2>
              {description ? (
                <p className="mt-1 text-sm leading-5 text-white/65">
                  {description}
                </p>
              ) : null}
            </div>

            {actionLabel && onAction ? (
              <button
                type="button"
                onClick={onAction}
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {actionLabel}
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>

          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}