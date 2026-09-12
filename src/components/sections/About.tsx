"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="container-page section-y hairline">
      <SectionHeading index="04" label="About" />

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          {profile.bio.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              variants={revealUp}
              className={i === 0 ? "type-body-l measure" : "measure mt-6 text-fg-muted"}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.dl variants={revealUp} className="md:col-span-4 md:col-start-9">
          <dt className="type-meta text-fg-subtle">Languages</dt>
          <dd className="mt-5 space-y-3">
            {profile.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
              >
                <span className="text-sm">{lang.name}</span>
                <span className="type-meta text-fg-subtle">{lang.level}</span>
              </div>
            ))}
          </dd>

          <dt className="type-meta mt-10 text-fg-subtle">Based in</dt>
          <dd className="mt-3 text-sm">{profile.location}</dd>
        </motion.dl>
      </motion.div>
    </section>
  );
}
