"use client";

import Image from "next/image";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  /** Live URL to embed. Falls back to `poster` if the site refuses to be framed. */
  url?: string;
  /** Screenshot shown before the iframe loads, and as the fallback. */
  poster: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}

/**
 * macOS-style window. The iframe only mounts once the frame scrolls into view,
 * so a page with several of these does not load every site at once.
 */
export function BrowserFrame({ url, poster, alt, label, className, priority }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });
  const [embedReady, setEmbedReady] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-surface shadow-[0_32px_80px_-32px_rgb(0_0_0/0.3)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <p className="type-meta truncate text-fg-subtle">{label}</p>
      </div>

      <div className="relative aspect-[16/10] w-full bg-bg">
        <Image
          src={poster}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 70vw"
          className={cn(
            "object-cover object-top transition-opacity duration-500",
            embedReady && "opacity-0",
          )}
        />
        {url && inView && (
          <iframe
            src={url}
            title={alt}
            loading="lazy"
            onLoad={() => setEmbedReady(true)}
            sandbox="allow-scripts allow-same-origin"
            className={cn(
              "absolute inset-0 size-full border-0 transition-opacity duration-500",
              embedReady ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>
    </div>
  );
}
