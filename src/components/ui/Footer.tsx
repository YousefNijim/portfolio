"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function Footer() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: profile.timezone,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="container-page hairline py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="type-meta text-fg-subtle">© {new Date().getFullYear()} {profile.name}</p>
        <p className="type-meta text-fg-subtle">
          Istanbul{time && <> — {time}</>}
        </p>
        <a
          href="#top"
          className="type-meta text-fg-subtle transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
