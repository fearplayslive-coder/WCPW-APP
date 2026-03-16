import React from "react";

import AppShell from "../components/app/AppShell";
import shopItems from "../data/shopItems";

export default function Shop() {
  return (
    <AppShell title="Shop" subtitle="WCPW Merch">
      <div className="grid grid-cols-2 gap-4">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03]"
          >
            <div className="aspect-square bg-black">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.18em] text-white/30">
                  No Image
                </div>
              )}
            </div>

            <div className="p-3">
              <p className="text-sm font-semibold text-white">{item.name}</p>
              {item.category ? (
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-red-300">
                  {item.category}
                </p>
              ) : null}
              {item.price ? (
                <p className="mt-2 text-sm font-bold text-white/80">{item.price}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}