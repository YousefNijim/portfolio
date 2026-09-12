"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/types";
import { PhoneFrame } from "./PhoneFrame";
import { BrowserFrame } from "./BrowserFrame";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

const phoneLabels = ["Customer", "Business", "Driver"];

/** Horizontal snap-scroll strip of secondary screens. Portrait shots keep their own ratio. */
function GalleryStrip({ items, title }: { items: string[]; title: string }) {
  return (
    <motion.ul
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
    >
      {items.map((src) => {
        const isPortrait = src.includes("/phones/");
        return (
          <motion.li
            key={src}
            variants={revealUp}
            className={
              isPortrait
                ? "w-[min(50vw,220px)] shrink-0 snap-start"
                : "relative aspect-[16/10] w-[min(85vw,640px)] shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-surface"
            }
          >
            {isPortrait ? (
              <PhoneFrame src={src} alt={`${title} screen`} />
            ) : (
              <Image
                src={src}
                alt={`${title} screen`}
                fill
                sizes="(max-width: 768px) 85vw, 640px"
                className="object-cover object-top"
              />
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

/** Each project gets the display mode its medium deserves — see DESIGN.md §7. */
export function ProjectShowcase({ project }: { project: Project }) {
  const { media, displayMode, title, links, embedUrl } = project;
  const siteLabel = links[0]?.href.replace("https://", "") ?? title;

  return (
    <div className="container-page section-y hairline">
      {displayMode === "platform" ? (
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={revealUp} className="type-meta text-fg-subtle">
            Three apps, one API
          </motion.p>

          <motion.ul
            variants={stagger(0.1)}
            className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-10"
          >
            {media.phones?.map((src, i) => (
              <motion.li key={src} variants={revealUp}>
                <PhoneFrame src={src} alt={`${phoneLabels[i]} app`} priority={i === 0} />
                <p className="type-meta mt-4 text-center text-fg-subtle">{phoneLabels[i]}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p variants={revealUp} className="type-meta mt-24 text-fg-subtle">
            Admin control centre
          </motion.p>
          <motion.ul variants={stagger(0.1)} className="mt-10 grid gap-10">
            {media.desktop?.map((src) => (
              <motion.li key={src} variants={revealUp}>
                <BrowserFrame poster={src} alt={`${title} admin dashboard`} label={siteLabel} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ) : media.phones ? (
        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-10"
        >
          {media.phones.map((src, i) => (
            <motion.li key={src} variants={revealUp}>
              <PhoneFrame src={src} alt={`${title} screen`} priority={i === 0} />
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <BrowserFrame
            url={embedUrl}
            poster={media.cover!}
            alt={`${title} live site`}
            label={siteLabel}
            priority
          />
        </motion.div>
      )}

      {media.gallery && media.gallery.length > 0 && (
        <>
          <p className="type-meta mt-24 text-fg-subtle">More screens</p>
          <GalleryStrip items={media.gallery} title={title} />
        </>
      )}
    </div>
  );
}
