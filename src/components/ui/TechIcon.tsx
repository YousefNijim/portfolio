import { getTechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  className?: string;
}

/**
 * Brand mark for a technology. Monochrome by default so the page keeps its single
 * accent (DESIGN.md §2); the brand colour appears on hover of the enclosing
 * `.group`, which is where the extra colour is a reward rather than noise.
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
      style={{ "--brand": icon.hex } as React.CSSProperties}
      className={cn(
        "size-4 shrink-0 fill-current text-fg-subtle transition-colors duration-300",
        "group-hover:fill-[var(--brand)]",
        className,
      )}
    >
      <path d={icon.path} />
    </svg>
  );
}
