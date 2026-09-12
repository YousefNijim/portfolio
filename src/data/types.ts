export type DisplayMode = "platform" | "live-embed" | "live-embed-gallery" | "live-embed-compact";

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "mobile" | "infra" | "ai" | "tooling";
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "github" | "dashboard";
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Native-script title shown alongside the latin one, when the brand has one. */
  titleAlt?: string;
  tagline: string;
  year: string;
  role: string;
  type: string;
  displayMode: DisplayMode;
  /** Featured projects render larger in the work grid. */
  featured?: boolean;
  /** Live URL used by <BrowserFrame> for the scroll-locked embed. */
  embedUrl?: string;
  links: ProjectLink[];
  stack: TechItem[];
  /** Short punchy facts rendered as a stat row on the case study hero. */
  stats: { value: string; label: string }[];
  context: CaseStudySection;
  architecture: CaseStudySection;
  decisions: CaseStudySection;
  /** Paths under /public/media/<slug>/ */
  media: {
    cover?: string;
    desktop?: string[];
    phones?: string[];
    gallery?: string[];
  };
}
