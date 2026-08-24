import { ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  iconClassName,
  withTagline = false,
}: {
  className?: string;
  iconClassName?: string;
  withTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
      <span className="inline-flex items-center gap-1">
        <span className="font-logo text-[1.15em] leading-none">O&apos;</span>
        <ChefHat
          strokeWidth={1.5}
          className={cn("size-[0.55em] -translate-y-[0.35em] shrink-0", iconClassName)}
        />
        <span className="font-logo text-[1.15em] leading-none -ml-1">Monro</span>
      </span>
      {withTagline && (
        <span className="text-[10px] font-sans font-bold uppercase tracking-label opacity-70 mt-1">
          Brunch - Fast Food
        </span>
      )}
    </span>
  );
}
