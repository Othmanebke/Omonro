"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "Carte" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const isAm = mode === "am";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b-2 transition-colors duration-500",
        isAm
          ? "bg-blanc-craie border-noir-encre text-noir-encre"
          : "bg-noir-encre border-blanc-craie text-blanc-craie"
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" className="font-display text-2xl md:text-3xl uppercase tracking-tight">
          O&apos;Monro
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-bold text-xs uppercase tracking-label hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleMode}
            aria-label="Basculer entre Brunch et Fast Food"
            className={cn(
              "hidden sm:flex items-center gap-2 border-2 rounded-full px-1 py-1 transition-colors duration-500",
              isAm ? "border-noir-encre" : "border-blanc-craie"
            )}
          >
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-label transition-colors duration-300",
                isAm ? "bg-noir-encre text-blanc-craie" : "text-blanc-craie/50"
              )}
            >
              <Sun strokeWidth={1.5} className="size-3.5" />
              Brunch
            </span>
            <span
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-label transition-colors duration-300",
                !isAm ? "bg-blanc-craie text-noir-encre" : "text-noir-encre/50"
              )}
            >
              <Moon strokeWidth={1.5} className="size-3.5" />
              Fast Food
            </span>
          </button>

          <button
            type="button"
            className="md:hidden"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X strokeWidth={1.5} className="size-6" />
            ) : (
              <Menu strokeWidth={1.5} className="size-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={cn(
            "md:hidden flex flex-col border-t-2 px-6 py-6 gap-5",
            isAm ? "border-noir-encre" : "border-blanc-craie"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans font-bold text-sm uppercase tracking-label"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleMode}
            className={cn(
              "mt-2 self-start border-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-label",
              isAm ? "border-noir-encre" : "border-blanc-craie"
            )}
          >
            {isAm ? "Passer en Fast Food" : "Passer en Brunch"}
          </button>
        </nav>
      )}
    </header>
  );
}
