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
  /** Brand colour, nudged toward the light background when the brand is near-white. */
  onLight: string;
  /** Brand colour, nudged toward the dark background when the brand is near-black. */
  onDark: string;
}

const toRgb = (hex: string) => [
  parseInt(hex.slice(0, 2), 16),
  parseInt(hex.slice(2, 4), 16),
  parseInt(hex.slice(4, 6), 16),
];

/** WCAG relative luminance, 0 (black) to 1 (white). */
function luminance(hex: string): number {
  const [r, g, b] = toRgb(hex).map((channel) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Blends `hex` toward `target` by `amount` (0-1), keeping the brand's hue recognisable. */
function mix(hex: string, target: 0 | 255, amount: number): string {
  const channels = toRgb(hex)
    .map((c) => Math.round(c + (target - c) * amount))
    .map((c) => c.toString(16).padStart(2, "0"));
  return `#${channels.join("")}`;
}

/**
 * Several brand marks are pure black (Next.js, Vercel, JWT) or near-white
 * (Drizzle, JavaScript). Used verbatim they vanish into one of the two themes,
 * so each is blended toward the opposite end only where it would disappear.
 */
function themed(hex: string): { onLight: string; onDark: string } {
  const lum = luminance(hex);
  return {
    onLight: lum > 0.55 ? mix(hex, 0, 0.45) : `#${hex}`,
    onDark: lum < 0.1 ? mix(hex, 255, 0.8) : `#${hex}`,
  };
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
  return icon ? { path: icon.path, ...themed(icon.hex) } : null;
}
