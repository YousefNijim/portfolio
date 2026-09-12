"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  return (
    <section id="work" className="container-page section-y hairline">
      <SectionHeading index="01" label="Selected work" />

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.li
            key={project.slug}
            variants={revealUp}
            className={cn(project.featured && "md:col-span-2")}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-lg border border-line bg-surface">
                <div
                  className={cn(
                    "relative w-full",
                    project.featured ? "aspect-[16/9]" : "aspect-[16/10]",
                  )}
                >
                  {project.media.cover && (
                    <Image
                      src={project.media.cover}
                      alt={`${project.title} — ${project.type}`}
                      fill
                      sizes={project.featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="type-display-m flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight
                      className="size-5 shrink-0 text-fg-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </h3>
                  <p className="measure mt-3 text-fg-muted">{project.tagline}</p>
                </div>
                <p className="type-meta shrink-0 pt-2 text-fg-subtle">{project.year}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, project.featured ? 8 : 4).map((tech) => (
                  <TechTag key={tech.name}>{tech.name}</TechTag>
                ))}
                {project.stack.length > (project.featured ? 8 : 4) && (
                  <TechTag className="border-dashed">
                    +{project.stack.length - (project.featured ? 8 : 4)}
                  </TechTag>
                )}
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
