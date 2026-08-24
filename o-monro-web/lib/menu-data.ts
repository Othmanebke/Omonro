export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const brunchMenu: MenuItem[] = [
  {
    name: "Café",
    description: "Filtre lent, torréfaction maison, servi en verre",
    price: "4€",
  },
  {
    name: "Œuf",
    description: "Poché ou mollet, sur pain de campagne grillé",
    price: "7€",
  },
  {
    name: "Pancakes",
    description: "Trio épais, sirop d'érable, beurre demi-sel",
    price: "9€",
  },
  {
    name: "Toast",
    description: "Avocat, citron, graines, fleur de sel",
    price: "8€",
  },
];

export const fastFoodMenu: MenuItem[] = [
  {
    name: "Burger",
    description: "Bœuf maturé, cheddar affiné, sauce maison",
    price: "12€",
  },
  {
    name: "Frites",
    description: "Coupe épaisse, double cuisson, sel de mer",
    price: "5€",
  },
  {
    name: "Soda",
    description: "Recette artisanale, servi glacé",
    price: "4€",
  },
  {
    name: "Wrap",
    description: "Poulet grillé, crudités, sauce épicée",
    price: "10€",
  },
];
