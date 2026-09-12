"use client";

import { motion } from "motion/react";
import { stack } from "@/data/stack";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

export function Technologies() {
  return (
    <section id="stack" className="container-page section-y hairline">
      <SectionHeading index="02" label="Technologies" />

      <motion.dl
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {stack.map((group) => (
          <motion.div key={group.label} variants={revealUp} className="bg-bg p-8">
            <dt className="type-meta text-fg-subtle">{group.label}</dt>
            <dd className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {group.items.map((item) => (
                <span key={item} className="group inline-flex items-center gap-2 text-sm text-fg">
                  <TechIcon name={item} />
                  {item}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
