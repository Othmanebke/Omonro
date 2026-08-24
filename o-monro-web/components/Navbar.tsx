"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "Carte" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { mode, openPicker } = useTheme();
  const [open, setOpen] = useState(false);
  const isAm = mode === "am";

  return (
    <header
      className={cn(
        "border-b-4 transition-colors duration-500",
        isAm
          ? "bg-blanc-craie text-noir-encre border-noir-encre"
          : "bg-noir-encre text-blanc-craie border-blanc-craie"
      )}
    >
      <div className="flex items-center justify-between gap-6 px-6 md:px-10 py-4 md:py-6">
        <Link href="/" aria-label="O'Monro — Accueil" className="shrink-0">
          <Logo className="h-14 w-24 md:h-20 md:w-36 lg:h-24 lg:w-40" invert={!isAm} priority />
        </Link>

        <div className="hidden md:flex flex-col items-end gap-4 flex-1">
          <button
            type="button"
            onClick={openPicker}
            className="text-xs font-bold uppercase tracking-label opacity-70 hover:opacity-100 transition-opacity"
          >
            Brunch le matin · Fast food le soir
          </button>
          <div className="h-px w-full bg-current/20" />
          <nav className="flex items-center gap-10">
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
        </div>

        <button
          type="button"
          className={cn(
            "md:hidden flex items-center justify-center border-2 p-2",
            isAm ? "border-noir-encre" : "border-blanc-craie"
          )}
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
            onClick={() => {
              setOpen(false);
              openPicker();
            }}
            className="mt-2 self-start text-xs font-bold uppercase tracking-label opacity-70"
          >
            Brunch le matin · Fast food le soir
          </button>
        </nav>
      )}
    </header>
  );
}
