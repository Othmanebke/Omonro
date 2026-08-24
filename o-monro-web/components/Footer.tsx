import Link from "next/link";
import { AtSign, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/carte", label: "Carte" },
      { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Horaires",
    links: [
      { href: "/carte", label: "Brunch — 10h / 15h" },
      { href: "/carte", label: "Fast Food — 18h / 01h" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-kraft text-noir-encre">
      <div className="checkerboard h-4 w-full" />

      <div className="px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 border-b-2 border-noir-encre/20">
        <div className="md:col-span-7">
          <Logo className="h-32 w-56 sm:h-40 sm:w-72 md:h-56 md:w-96" />
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-label mb-4 text-noir-encre">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-noyer hover:text-noir-encre transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col gap-3 pt-2 text-noyer">
            <span className="flex items-center gap-2 text-sm">
              <MapPin strokeWidth={1.5} className="size-4" />
              12 Rue de la Marmite, 75011 Paris
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Phone strokeWidth={1.5} className="size-4" />
              01 23 45 67 89
            </span>
            <a
              href="#"
              className="flex items-center gap-2 text-sm hover:text-noir-encre transition-colors"
            >
              <AtSign strokeWidth={1.5} className="size-4" />
              @omonro.paris
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-label text-noyer">
        <span>© {new Date().getFullYear()} O&apos;Monro — Tous droits réservés</span>
        <span>Brunch le matin, Fast Food le soir</span>
      </div>

      <div className="checkerboard h-4 w-full" />
    </footer>
  );
}
