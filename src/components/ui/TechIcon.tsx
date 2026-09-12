import { getTechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  className?: string;
}

/**
 * Brand mark for a technology, in the brand's own colour. The two theme variants
 * are set as custom properties here and selected by `.tech-icon` in globals.css,
 * so marks that are near-black or near-white stay visible in both themes.
 */
export function TechIcon({ name, className }: Props) {
  const icon = getTechIcon(name);

  if (!icon) {
    return (
      <span
        aria-hidden
        className={cn("inline-block size-1.5 shrink-0 rounded-full bg-fg-subtle", className)}
      />
    );
  }

  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      style={
        {
          "--brand-on-light": icon.onLight,
          "--brand-on-dark": icon.onDark,
        } as React.CSSProperties
      }
      className={cn("tech-icon size-4 shrink-0", className)}
    >
      <path d={icon.path} />
    </svg>
  );
}
