"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Beef, Clock, Soup } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import SectionMarquee from "@/components/SectionMarquee";
import { cn } from "@/lib/utils";

const signatures = [
  {
    icon: Coffee,
    title: "Café Filtre Lent",
    description: "Torréfaction maison, servi en verre, à savourer sans se presser.",
    tag: "AM",
  },
  {
    icon: Soup,
    title: "Pancakes du Matin",
    description: "Trio épais, sirop d'érable, beurre demi-sel.",
    tag: "AM",
  },
  {
    icon: Beef,
    title: "Le Burger O'Monro",
    description: "Bœuf maturé, cheddar affiné, sauce maison, pain toasté.",
    tag: "PM",
  },
  {
    icon: Clock,
    title: "Frites Double Cuisson",
    description: "Coupe épaisse, croustillant garanti, sel de mer.",
    tag: "PM",
  },
];

export default function Home() {
  const { mode } = useTheme();
  const isAm = mode === "am";

  return (
    <div>
      {/* HERO — bloc couleur + image, façon affiche éditoriale */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          className={cn(
            "min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end p-8 md:p-14 transition-colors duration-500",
            isAm ? "bg-chene text-noir-encre" : "bg-noyer text-blanc-craie"
          )}
        >
          <motion.span
            key={`label-${mode}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-label mb-4"
          >
            {isAm ? "Concept AM — 10h / 15h" : "Concept PM — 18h / 01h"}
          </motion.span>

          <motion.h1
            key={`title-${mode}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display uppercase text-titre md:text-display"
          >
            {isAm ? (
              <>
                Brunch
                <br />
                Le Matin
              </>
            ) : (
              <>
                Fast Food
                <br />
                Le Soir
              </>
            )}
          </motion.h1>

          <Link
            href="/carte"
            className={cn(
              "mt-8 inline-flex items-center gap-2 self-start px-7 py-4 font-bold text-xs uppercase tracking-label border-2 transition-colors",
              isAm
                ? "bg-noir-encre text-blanc-craie border-noir-encre hover:bg-transparent hover:text-noir-encre"
                : "bg-blanc-craie text-noir-encre border-blanc-craie hover:bg-transparent hover:text-blanc-craie"
            )}
          >
            Voir la carte
            <ArrowRight strokeWidth={1.5} className="size-4" />
          </Link>
        </div>

        <div className="min-h-[40vh] md:min-h-[70vh] flex items-center justify-center bg-current/5">
          <span className="text-[10px] uppercase tracking-label opacity-30">Photo</span>
        </div>
      </section>

      <div className="checkerboard h-4 w-full" />

      {/* ACCROCHE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-2 border-current/20">
        <p className="font-display uppercase text-titre md:text-display leading-[0.95] max-w-4xl">
          O&apos;Monro est le lieu qui vit deux vies : lumière et lenteur le matin, néon et
          vitesse le soir.
        </p>
        <Link
          href="/qui-sommes-nous"
          className={cn(
            "mt-8 inline-flex items-center gap-2 px-7 py-4 font-bold text-xs uppercase tracking-label border-2 transition-colors",
            isAm ? "border-noir-encre" : "border-blanc-craie"
          )}
        >
          Qui sommes-nous
        </Link>
      </section>

      <SectionMarquee />

      {/* LE CONCEPT */}
      <section className="border-b-2 border-current/20">
        <div className="px-6 md:px-10 py-16">
          <h2 className="font-display uppercase text-titre md:text-display mb-4">Le Concept</h2>
          <p className="max-w-2xl font-sans text-corps opacity-80">
            Un seul lieu, deux vies. À 15h, la salle bascule : la lumière change, le service
            s&apos;accélère, la carte se retourne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-current/20">
          <div className="bg-blanc-craie text-noir-encre p-10 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-current/20">
            <span className="text-xs font-bold uppercase tracking-label text-chene">
              10h — 15h
            </span>
            <p className="font-display uppercase text-4xl md:text-6xl leading-[0.9] mt-4">
              Brunch
              <br />
              Le Matin
            </p>
            <p className="mt-6 text-corps max-w-sm">
              Lumière naturelle, bois brut, vaisselle blanche. Un lieu lent. Le logo se pose en
              noir sur fond craie, le kraft en respiration.
            </p>
          </div>
          <div className="bg-noir-encre text-blanc-craie p-10 md:p-16">
            <span className="text-xs font-bold uppercase tracking-label text-chene">
              18h — 01h
            </span>
            <p className="font-display uppercase text-4xl md:text-6xl leading-[0.9] mt-4">
              Fast Food
              <br />
              Le Soir
            </p>
            <p className="mt-6 text-corps max-w-sm">
              Nuit, néon chaud, comptoir sombre. Un lieu rapide. Le logo passe en blanc sur
              noir, le bois devient accent.
            </p>
          </div>
        </div>
      </section>

      {/* NOS SIGNATURES */}
      <section className="px-6 md:px-10 py-16 border-b-2 border-current/20">
        <h2 className="font-display uppercase text-titre md:text-display mb-10">
          Nos Signatures
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-current/20 border-2 border-current/20">
          {signatures.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col p-8 min-h-[320px] transition-colors duration-500",
                isAm ? "bg-blanc-craie" : "bg-noir-encre"
              )}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-label text-chene">
                  {tag}
                </span>
                <Icon strokeWidth={1.5} className="size-6" />
              </div>
              <div className="flex-1 bg-current/10 mb-6 flex items-center justify-center text-[10px] uppercase tracking-label opacity-40">
                Photo
              </div>
              <h3 className="font-display uppercase text-lg leading-tight mb-2">{title}</h3>
              <p className="text-sm opacity-75">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — NOUS TROUVER */}
      <section className="bg-chene text-noir-encre px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display uppercase leading-[0.85] text-[13vw] md:text-[5.2vw]">
              Brunch
              <br />
              Fast Food
              <br />
              O&apos;Monro
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="text-corps">
              Un seul lieu, deux services par jour. Réservez votre table pour le brunch du
              matin ou passez commande au comptoir le soir venu.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start px-7 py-4 bg-noir-encre text-blanc-craie font-bold text-xs uppercase tracking-label border-2 border-noir-encre hover:bg-transparent hover:text-noir-encre transition-colors"
            >
              Nous trouver
              <ArrowRight strokeWidth={1.5} className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
