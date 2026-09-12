"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/profile";

let tick = Date.now();

function subscribe(onChange: () => void) {
  const id = setInterval(() => {
    tick = Date.now();
    onChange();
  }, 30_000);
  return () => clearInterval(id);
}

const getSnapshot = () => tick;
/** No clock on the server — the time appears once the client takes over. */
const getServerSnapshot = () => 0;

export function Footer() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const time =
    now === 0
      ? null
      : new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: profile.timezone,
        }).format(new Date(now));

  return (
    <footer className="container-page hairline py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="type-meta text-fg-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="type-meta text-fg-subtle">Istanbul{time && <> — {time}</>}</p>
        <a href="#top" className="type-meta text-fg-subtle transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
