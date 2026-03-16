import React from "react";
import { ExternalLink } from "lucide-react";

import AppShell from "../components/app/AppShell";
import socialLinks from "../data/socialLinks";

export default function Socials() {
  return (
    <AppShell title="Socials" subtitle="Follow WCPW Everywhere">
      <div className="space-y-3">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
          >
            <div className="flex-1">
              <p className="text-base font-semibold text-white">{item.platform}</p>
              <p className="mt-1 text-sm text-white/60">{item.label}</p>
            </div>

            <ExternalLink className="h-5 w-5 text-white/45" />
          </a>
        ))}
      </div>
    </AppShell>
  );
}