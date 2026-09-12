import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/project/ProjectShowcase";
import { CaseStudyBody } from "@/components/project/CaseStudyBody";
import { TechTag } from "@/components/ui/TechTag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <main className="flex-1">
      <header className="container-page pb-16 pt-[clamp(7rem,14vh,10rem)]">
        <Link
          href="/#work"
          className="type-meta inline-flex items-center gap-2 text-fg-subtle transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          All work
        </Link>

        <h1 className="type-display-l mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          {project.title}
          {project.titleAlt && (
            <span lang="ar" dir="rtl" className="text-[0.45em] text-fg-subtle">
              {project.titleAlt}
            </span>
          )}
        </h1>

        <p className="type-body-l measure mt-6 text-fg-muted">{project.tagline}</p>

        <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Role", value: project.role },
            { label: "Type", value: project.type },
            { label: "Year", value: project.year },
          ].map((item) => (
            <div key={item.label}>
              <dt className="type-meta text-fg-subtle">{item.label}</dt>
              <dd className="mt-2 text-sm">{item.value}</dd>
            </div>
          ))}

          <div>
            <dt className="type-meta text-fg-subtle">Links</dt>
            <dd className="mt-2 flex flex-col gap-1.5">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </a>
              ))}
            </dd>
          </div>
        </dl>

        <ul className="mt-10 flex flex-wrap gap-6 border-t border-line pt-8">
          {project.stats.map((stat) => (
            <li key={stat.label}>
              <p className="type-display-m text-accent">{stat.value}</p>
              <p className="type-meta mt-1 text-fg-subtle">{stat.label}</p>
            </li>
          ))}
        </ul>
      </header>

      <ProjectShowcase project={project} />

      <CaseStudyBody index="01" section={project.context} />
      <CaseStudyBody index="02" section={project.architecture} />
      <CaseStudyBody index="03" section={project.decisions} />

      <section className="container-page hairline py-16">
        <p className="type-meta text-fg-subtle">04 / Stack</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech.name}>
              <TechTag>{tech.name}</TechTag>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page hairline py-16">
        <p className="type-meta text-fg-subtle">Next project</p>
        <Link href={`/work/${next.slug}`} className="group mt-6 flex items-baseline gap-4">
          <span className="type-display-l transition-colors group-hover:text-accent">
            {next.title}
          </span>
          <ArrowUpRight
            className="size-6 shrink-0 text-fg-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
            aria-hidden
          />
        </Link>
      </section>
    </main>
  );
}
