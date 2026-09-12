"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

const kindLabel = {
  work: "Work",
  volunteer: "Volunteer",
  education: "Education",
} as const;

export function Experience() {
  return (
    <section id="experience" className="container-page section-y hairline">
      <SectionHeading index="03" label="Experience" />

      <motion.ol
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16"
      >
        {experience.map((entry) => (
          <motion.li
            key={entry.org}
            variants={revealUp}
            className="grid gap-x-8 gap-y-4 border-t border-line py-10 md:grid-cols-12"
          >
            <div className="md:col-span-3">
              <p className="type-meta text-fg-subtle">{entry.period}</p>
              <p className="type-meta mt-1.5 text-accent">{kindLabel[entry.kind]}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="text-xl font-medium tracking-[-0.02em]">{entry.title}</h3>
              <p className="mt-1 text-fg-muted">{entry.org}</p>
              <ul className="measure mt-5 space-y-2.5">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-fg-muted">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-fg-subtle" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
