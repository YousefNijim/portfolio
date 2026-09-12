"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

const links = [
  { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  { label: "GitHub", value: "YousefNijim", href: profile.contact.github },
  { label: "LinkedIn", value: "nijimyousef", href: profile.contact.linkedin },
  { label: "Résumé", value: "Download PDF", href: profile.contact.cv },
];

export function Contact() {
  return (
    <section id="contact" className="container-page section-y hairline">
      <SectionHeading index="05" label="Contact" title="Let's build something that ships." />

      <motion.ul
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16"
      >
        {links.map((link) => (
          <motion.li key={link.label} variants={revealUp}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 border-t border-line py-6 transition-colors hover:text-accent"
            >
              <span className="type-meta text-fg-subtle transition-colors group-hover:text-accent">
                {link.label}
              </span>
              <span className="flex items-center gap-3 text-lg tracking-[-0.02em]">
                {link.value}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
