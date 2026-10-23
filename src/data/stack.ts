export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite", "Motion"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Firebase FCM"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Socket.io", "REST", "JWT"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Prisma", "Drizzle ORM", "Redis", "Firebase Firestore"],
  },
  {
    label: "Infrastructure",
    items: ["Railway", "Vercel", "Docker", "GitHub Actions", "Jest", "Nx", "pnpm"],
  },
  {
    label: "AI & ML",
    items: ["Google Gemini API", "Python", "scikit-learn", "Edge Impulse", "Claude Code"],
  },
];

/** Flat list used by the marquee strip. */
export const stackMarquee = stack.flatMap((g) => g.items);
