import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** Device bezel for app screenshots. Screens are portrait; the frame crops to 9:19.5. */
export function PhoneFrame({ src, alt, className, priority }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] border border-line bg-surface p-1.5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.35)]",
        className,
      )}
    >
      <div className="relative size-full overflow-hidden rounded-[1.6rem]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 70vw, 24vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
