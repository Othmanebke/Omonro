"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Logo from "@/components/Logo";

export default function ModePicker() {
  const { hasChosen, setMode } = useTheme();

  if (hasChosen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-noir-encre px-6 py-16 text-blanc-craie">
      <Logo className="h-20 w-36 md:h-24 md:w-44" invert />

      <p className="text-xs font-bold uppercase tracking-label text-chene text-center">
        Choisissez votre moment
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        <button
          type="button"
          onClick={() => setMode("am")}
          className="group flex flex-col items-center gap-4 rounded-3xl border-2 border-blanc-craie/30 px-8 py-10 transition-colors hover:border-blanc-craie hover:bg-blanc-craie hover:text-noir-encre"
        >
          <Sun strokeWidth={1.5} className="size-8" />
          <span className="font-display uppercase text-2xl">Brunch</span>
          <span className="text-xs uppercase tracking-label opacity-60 group-hover:opacity-100">
            10h — 15h
          </span>
        </button>

        <button
          type="button"
          onClick={() => setMode("pm")}
          className="group flex flex-col items-center gap-4 rounded-3xl border-2 border-blanc-craie/30 px-8 py-10 transition-colors hover:border-chene hover:bg-chene hover:text-noir-encre"
        >
          <Moon strokeWidth={1.5} className="size-8" />
          <span className="font-display uppercase text-2xl">Fast Food</span>
          <span className="text-xs uppercase tracking-label opacity-60 group-hover:opacity-100">
            18h — 01h
          </span>
        </button>
      </div>
    </div>
  );
}
