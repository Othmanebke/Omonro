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
  const line = isAm ? "border-noir-encre" : "border-blanc-craie";

  return (
    <div>
      {/* HERO — split dur, typographie viewport */}
      <section className={cn("grid grid-cols-1 md:grid-cols-2 border-b-2", line)}>
        <div
          className={cn(
            "min-h-[65vh] md:min-h-[85vh] flex flex-col justify-end p-6 md:p-10 border-b-2 md:border-b-0 md:border-r-2 transition-colors duration-500",
            line,
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
            className="font-display uppercase leading-[0.8] text-[16vw] md:text-[9.5vw]"
          >
            {isAm ? (
              <>
                Brunch
                <br />
                Matin
              </>
            ) : (
              <>
                Fast
                <br />
                Food
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

        <div className="min-h-[35vh] md:min-h-[85vh] flex items-center justify-center bg-current/5">
          <span className="text-[10px] uppercase tracking-label opacity-30">Photo</span>
        </div>
      </section>

      {/* ACCROCHE */}
      <section className={cn("px-4 md:px-8 py-10 md:py-14 border-b-2", line)}>
        <p className="font-display uppercase text-[11vw] md:text-[6.2vw] leading-[0.8]">
          Deux Vies,
          <br />
          Un Lieu.
        </p>
        <Link
          href="/qui-sommes-nous"
          className={cn(
            "mt-8 inline-flex items-center gap-2 px-7 py-4 font-bold text-xs uppercase tracking-label border-2 transition-colors",
            line
          )}
        >
          Qui sommes-nous
        </Link>
      </section>

      <SectionMarquee />

      {/* LE CONCEPT */}
      <section className={cn("border-b-2", line)}>
        <div className={cn("px-4 md:px-8 py-10 md:py-14 border-b-2", line)}>
          <h2 className="font-display uppercase text-[11vw] md:text-[6.2vw] leading-[0.8]">
            Le Concept
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={cn("bg-blanc-craie text-noir-encre p-6 md:p-10 border-b-2 md:border-b-0 md:border-r-2", line)}>
            <span className="text-xs font-bold uppercase tracking-label text-chene">
              10h — 15h
            </span>
            <p className="font-display uppercase text-[13vw] md:text-[6.5vw] leading-[0.8] mt-4">
              Brunch
              <br />
              Matin
            </p>
            <p className="mt-6 text-corps max-w-sm">
              Lumière naturelle, bois brut, vaisselle blanche. Un lieu lent. Le logo se pose en
              noir sur fond craie, le kraft en respiration.
            </p>
          </div>
          <div className="bg-noir-encre text-blanc-craie p-6 md:p-10">
            <span className="text-xs font-bold uppercase tracking-label text-chene">
              18h — 01h
            </span>
            <p className="font-display uppercase text-[13vw] md:text-[6.5vw] leading-[0.8] mt-4">
              Fast
              <br />
              Food
            </p>
            <p className="mt-6 text-corps max-w-sm">
              Nuit, néon chaud, comptoir sombre. Un lieu rapide. Le logo passe en blanc sur
              noir, le bois devient accent.
            </p>
          </div>
        </div>
      </section>

      {/* NOS SIGNATURES */}
      <section className={cn("border-b-2", line)}>
        <div className={cn("px-4 md:px-8 py-10 md:py-14 border-b-2", line)}>
          <h2 className="font-display uppercase text-[11vw] md:text-[6.2vw] leading-[0.8]">
            Nos Signatures
          </h2>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-t-2",
            line,
            isAm ? "bg-noir-encre" : "bg-blanc-craie"
          )}
        >
          {signatures.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className={cn(
                "flex flex-col p-6 min-h-[320px] transition-colors duration-500",
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
              <h3 className="font-display uppercase text-2xl leading-[0.9] mb-2">{title}</h3>
              <p className="text-sm opacity-75">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — NOUS TROUVER */}
      <section className="bg-chene text-noir-encre px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display uppercase leading-[0.8] text-[14vw] md:text-[6.5vw]">
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
