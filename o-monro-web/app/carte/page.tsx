"use client";

import { useTheme } from "@/components/ThemeProvider";
import { brunchMenu, fastFoodMenu } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export default function CartePage() {
  const { mode } = useTheme();
  const isAm = mode === "am";
  const items = isAm ? brunchMenu : fastFoodMenu;

  return (
    <div className="px-6 md:px-10 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b-2 border-current/20 pb-10 mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-label text-chene">
            {isAm ? "10h — 15h" : "18h — 01h"}
          </span>
          <h1 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] mt-4">
            {isAm ? "Carte Brunch" : "Carte Fast Food"}
          </h1>
        </div>
        <p className="max-w-sm text-sm md:text-base opacity-80">
          {isAm
            ? "Une sélection lente, servie jusqu'à 15h. Basculez le switch dans le header pour voir la carte du soir."
            : "Une carte rapide, servie jusqu'à 01h. Basculez le switch dans le header pour voir la carte du matin."}
        </p>
      </div>

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

      <div
        className={cn(
          "mt-16 p-8 md:p-12 rounded-3xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
          isAm ? "border-noir-encre" : "border-blanc-craie"
        )}
      >
        <p className="font-display uppercase text-xl md:text-3xl leading-tight">
          {isAm ? "Fast Food dès 18h" : "Brunch dès 10h"}
        </p>
        <p className="text-sm opacity-70 max-w-sm">
          {isAm
            ? "Revenez demain matin pour le café filtre, les œufs et les pancakes."
            : "Revenez ce soir pour les burgers, les frites et les wraps."}
        </p>
      </div>
    </div>
  );
}
