export interface TimelineEntry {
  org: string;
  title: string;
  period: string;
  kind: "work" | "volunteer" | "education";
  points: string[];
}

export const experience: TimelineEntry[] = [
  {
    org: "Alemi Medya",
    title: "Web Developer Intern",
    period: "Jul 2025 — Sep 2025",
    kind: "work",
    points: [
      "Built and shipped responsive websites in a team using HTML, CSS, JavaScript, Tailwind CSS and Bootstrap.",
      "Moved on to React — component architecture, state and props — and applied it across subsequent projects.",
    ],
  },
  {
    org: "Travel Time Agency",
    title: "Operations Manager",
    period: "Sep 2021 — May 2025",
    kind: "work",
    points: [
      "Ran daily booking and ticketing operations on enterprise travel systems (Galileo GDS, Quickress) for 3+ years.",
      "Worked hands-on with reservation pipelines and booking data, building domain knowledge of travel-tech workflows.",
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
    org: "Haliç University",
    title: "B.Sc. Software Engineering",
    period: "2022 — Feb 2027 (expected)",
    kind: "education",
    points: [
      "Graduation project: a low-cost electronic nose — classifying 8 scents from 8-channel gas-sensor data with an INT8 TinyML model and an MLP (85% holdout, 79% under 5-fold cross-validation).",
      "Ran a cross-session evaluation exposing an accuracy drop to 20–36% across recording days, traced to temperature/humidity shortcuts and sensor drift.",
    ],
  },
];
