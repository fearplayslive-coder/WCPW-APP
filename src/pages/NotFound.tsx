import React from "react";
import { useNavigate } from "react-router-dom";

import AppShell from "../components/app/AppShell";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <AppShell title="Page Not Found" subtitle="WCPW Mobile">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
        <h2 className="text-2xl font-bold text-white">404</h2>
        <p className="mt-2 text-sm leading-6 text-white/65">
          This page does not exist in the WCPW app yet.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500"
        >
          Go Home
        </button>
      </div>
    </AppShell>
  );
}