"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const TEXT = "BRUNCH LE MATIN — FAST FOOD LE SOIR";

export default function SectionMarquee() {
  const { mode } = useTheme();
  const isAm = mode === "am";
  const items = Array.from({ length: 8 });

  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 py-5",
        isAm
          ? "bg-kraft border-noir-encre text-noir-encre"
          : "bg-chene border-blanc-craie text-noir-encre"
      )}
    >
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="font-display text-xl md:text-3xl uppercase tracking-tight flex items-center gap-8"
          >
            {TEXT}
            <span aria-hidden className="text-2xl">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
