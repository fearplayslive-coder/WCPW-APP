import React from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
};

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-10 text-center">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {description ? (
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/60">
          {description}
        </p>
      ) : null}
    </div>
  );
}