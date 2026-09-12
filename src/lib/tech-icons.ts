import {
  siClaude,
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siFirebase,
  siFramer,
  siGithubactions,
  siGooglegemini,
  siJavascript,
  siJsonwebtokens,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNx,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siRailway,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons";

export interface TechIconData {
  path: string;
  /** Brand colour, used only on hover — see DESIGN.md §2 on the accent budget. */
  hex: string;
}

/**
 * Maps the technology names used in `src/data/` to their brand mark.
 * Names absent here (REST, Antigravity, Prompt Engineering) are not brands and
 * render as text with a neutral marker.
 */
const icons: Record<string, { path: string; hex: string }> = {
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  TailwindCSS: siTailwindcss,
  Vite: siVite,
  Motion: siFramer,
  Expo: siExpo,
  "Firebase FCM": siFirebase,
  "Firebase Firestore": siFirebase,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  "Express.js": siExpress,
  "Socket.io": siSocketdotio,
  JWT: siJsonwebtokens,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  "Drizzle ORM": siDrizzle,
  Redis: siRedis,
  Railway: siRailway,
  Vercel: siVercel,
  Docker: siDocker,
  "GitHub Actions": siGithubactions,
  Nx: siNx,
  pnpm: siPnpm,
  "Claude Code": siClaude,
  "Google Gemini": siGooglegemini,
  "Google Gemini API": siGooglegemini,
};

export function getTechIcon(name: string): TechIconData | null {
  const icon = icons[name];
  return icon ? { path: icon.path, hex: `#${icon.hex}` } : null;
}
