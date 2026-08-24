import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  invert = false,
  priority = false,
}: {
  className?: string;
  invert?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative inline-block h-12 w-40", className)}>
      <Image
        src="/logo.png"
        alt="O'Monro — Brunch - Fast Food"
        fill
        priority={priority}
        sizes="(max-width: 768px) 160px, 320px"
        className={cn("object-contain object-left transition-[filter] duration-500", invert && "invert")}
      />
    </span>
  );
}
