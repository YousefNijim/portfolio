"use client";

import { motion } from "motion/react";
import { revealUp, viewportOnce } from "@/lib/motion";

interface Props {
  index: string;
  label: string;
  title?: string;
}

/** Mono index label + optional display title. See DESIGN.md §3. */
export function SectionHeading({ index, label, title }: Props) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <p className="type-meta text-fg-subtle">
        {index} / {label}
      </p>
      {title && <h2 className="type-display-l mt-6 measure">{title}</h2>}
    </motion.div>
  );
}
