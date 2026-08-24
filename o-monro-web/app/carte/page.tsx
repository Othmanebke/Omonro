"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { brunchMenu, fastFoodMenu } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Tab = "am" | "pm";

export default function CartePage() {
  const { mode } = useTheme();
  const [tab, setTab] = useState<Tab>("am");

  useEffect(() => {
    setTab(mode);
  }, [mode]);
  const isAm = tab === "am";
  const items = isAm ? brunchMenu : fastFoodMenu;

  return (
    <div
      className={cn(
        "transition-colors duration-500",
        isAm ? "bg-blanc-craie text-noir-encre" : "bg-noir-encre text-blanc-craie"
      )}
    >
      {/* TABS — choix brutaliste, indépendant de l'heure réelle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b-4 border-current">
        <button
          type="button"
          onClick={() => setTab("am")}
          aria-pressed={isAm}
          className={cn(
            "flex flex-col items-center justify-center gap-2 py-10 md:py-14 border-b-4 sm:border-b-0 sm:border-r-4 border-current transition-colors",
            isAm ? "bg-noir-encre text-blanc-craie" : "hover:bg-current/10"
          )}
        >
          <span className="font-display uppercase text-2xl md:text-4xl">Carte Brunch</span>
          <span className="text-xs font-sans font-bold tracking-label opacity-70">
            10H — 15H
          </span>
        </button>
        <button
          type="button"
          onClick={() => setTab("pm")}
          aria-pressed={!isAm}
          className={cn(
            "flex flex-col items-center justify-center gap-2 py-10 md:py-14 border-current transition-colors",
            !isAm ? "bg-blanc-craie text-noir-encre" : "hover:bg-current/10"
          )}
        >
          <span className="font-display uppercase text-2xl md:text-4xl">Carte Food</span>
          <span className="text-xs font-sans font-bold tracking-label opacity-70">
            18H — 01H
          </span>
        </button>
      </div>

      <div className="px-6 md:px-10 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="border-t-2 border-current/20">
              {items.map((item, index) => (
                <li
                  key={item.name}
                  className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto] items-baseline gap-4 md:gap-8 py-8 border-b-2 border-current/20"
                >
                  <span className="font-display text-xl md:text-2xl opacity-30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display uppercase text-2xl md:text-4xl">{item.name}</h2>
                    <p className="mt-2 text-sm md:text-base opacity-70 max-w-md">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-2xl md:text-4xl whitespace-nowrap">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 p-8 md:p-12 border-2 border-current flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display uppercase text-xl md:text-3xl leading-tight">
            {isAm ? "Fast Food dès 18h" : "Brunch dès 10h"}
          </p>
          <p className="text-sm opacity-70 max-w-sm">
            {isAm
              ? "Basculez l'onglet pour découvrir la carte du soir, même en plein midi."
              : "Basculez l'onglet pour découvrir la carte du matin, même en pleine nuit."}
          </p>
        </div>
      </div>
    </div>
  );
}
