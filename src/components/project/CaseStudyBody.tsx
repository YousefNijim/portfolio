"use client";

import { motion } from "motion/react";
import type { CaseStudySection } from "@/data/types";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

/** Renders **bold** spans — the only inline markup the case-study copy uses. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-medium text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function CaseStudyBody({ index, section }: { index: string; section: CaseStudySection }) {
  return (
    <motion.section
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="container-page hairline grid gap-x-8 gap-y-8 py-16 md:grid-cols-12"
    >
      <motion.div variants={revealUp} className="md:col-span-3">
        <p className="type-meta text-fg-subtle">{index}</p>
        <h2 className="mt-2 text-xl font-medium tracking-[-0.02em]">{section.heading}</h2>
      </motion.div>

      <div className="md:col-span-8 md:col-start-5">
        {section.body.map((paragraph, i) => (
          <motion.p
            key={paragraph}
            variants={revealUp}
            className={i === 0 ? "measure text-fg-muted" : "measure mt-5 text-fg-muted"}
          >
            <RichText text={paragraph} />
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
