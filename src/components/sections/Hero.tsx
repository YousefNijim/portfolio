"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { dur, ease, lineMask, stagger } from "@/lib/motion";

const headline = ["Software", "Engineer"];

export function Hero() {
  return (
    <section className="container-page relative flex min-h-[88svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-[clamp(7rem,14vh,10rem)]">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: dur.base, ease: ease.out, delay: 0.1 }}
        className="type-meta text-fg-subtle"
      >
        00 / {profile.location}
      </motion.p>

      <motion.h1
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        animate="visible"
        className="type-display-xl mt-6"
      >
        <span className="sr-only">
          {profile.name} — {profile.role}
        </span>
        {headline.map((line) => (
          <span key={line} aria-hidden className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineMask} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <div className="mt-[clamp(2.5rem,6vh,4rem)] grid gap-8 border-t border-line pt-8 md:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.out, delay: 0.5 }}
          className="type-body-l measure text-fg-muted md:col-span-7"
        >
          {profile.positioning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.out, delay: 0.6 }}
          className="flex flex-col gap-3 md:col-span-4 md:col-start-9"
        >
          <p className="type-meta text-fg-subtle">Currently</p>
          <p className="flex items-center gap-2.5 text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availabilityNote}
          </p>
          <p className="type-meta text-fg-subtle mt-2">Name</p>
          <p className="text-sm">{profile.name}</p>
        </motion.div>
      </div>
    </section>
  );
}
