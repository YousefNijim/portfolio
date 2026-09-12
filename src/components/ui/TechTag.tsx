import { cn } from "@/lib/utils";

export function TechTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "type-meta inline-flex items-center rounded-full border border-line px-3 py-1.5 text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
