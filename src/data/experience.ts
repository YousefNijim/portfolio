export interface TimelineEntry {
  org: string;
  title: string;
  period: string;
  kind: "work" | "volunteer" | "education";
  points: string[];
}

export const experience: TimelineEntry[] = [
  {
    org: "Travel Time Agency",
    title: "Operation Manager",
    period: "Sep 2021 — May 2025",
    kind: "work",
    points: [
      "Operated enterprise travel software systems (Galileo GDS, Quickress) for 3+ years in a professional environment.",
      "Gained practical exposure to booking pipelines, reservation databases, and business software workflows.",
    ],
  },
  {
    org: "Al-Rowad Training Program",
    title: "Volunteer — Program Coordinator",
    period: "2023 — Present",
    kind: "volunteer",
    points: [
      "Coordinated scheduling and logistics for 37 training sessions (150+ hours) per cohort across 3 consecutive program cycles (2023–2025), totaling 450+ training hours.",
      "Liaised with 15+ speakers per cycle to confirm schedules, managed venue setup, video recording, and full technical support.",
      "Served as the primary point of contact between program leadership and participants.",
    ],
  },
  {
    org: "Halic University",
    title: "B.Sc. Software Engineering — Final Year",
    period: "2022 — Present",
    kind: "education",
    points: ["Istanbul, Türkiye. Focus on system architecture, software design, and AI integration."],
  },
];
