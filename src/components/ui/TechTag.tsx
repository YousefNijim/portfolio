import { TechIcon } from "./TechIcon";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Technology name to look the brand mark up by. Defaults to `children` when it is a string. */
  name?: string;
  /** Counters like "+6" have nothing to mark. */
  icon?: boolean;
}

export function TechTag({ children, className, name, icon = true }: Props) {
  const label = name ?? (typeof children === "string" ? children : undefined);

  return (
    <span
      className={cn(
        "type-meta group inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-fg-muted",
        className,
      )}
    >
      {icon && label && <TechIcon name={label} className="size-3.5" />}
      {children}
    </span>
  );
}
