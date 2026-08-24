import { Clock3, Flame, Leaf } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Matières Brutes",
    description: "Produits locaux, peu transformés, sourcés en direct.",
  },
  {
    icon: Clock3,
    title: "Deux Tempos",
    description: "Un service lent le matin, un service rapide le soir.",
  },
  {
    icon: Flame,
    title: "Fait Maison",
    description: "Sauces, pains et pâtisseries préparés sur place chaque jour.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <div>
      <section className="px-6 md:px-10 py-16 md:py-24 border-b-2 border-current/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <span className="md:col-span-3 text-xs font-bold uppercase tracking-label text-chene">
            Qui sommes-nous
          </span>
          <h1 className="md:col-span-9 font-display uppercase leading-[0.88] text-[12vw] md:text-[6.5vw]">
            Un lieu, deux vies, une seule adresse.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-b-2 border-current/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:col-start-1">
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-80">
              O&apos;Monro est né d&apos;une idée simple : un même lieu peut vivre deux vies
              radicalement différentes selon l&apos;heure. Le matin, la salle respire, la
              lumière naturelle guide le service, et chaque assiette se compose lentement.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-80">
              À 15h, tout bascule. Les tables se resserrent, les emballages kraft
              remplacent la vaisselle, la musique accélère. Jusqu&apos;à 01h, O&apos;Monro
              devient un comptoir de fast food rapide, pensé pour la nuit.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-current/20">
        <div className="px-6 md:px-10 py-16">
          <h2 className="font-display uppercase text-titre md:text-display mb-4">Nos Valeurs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-current/20">
          {values.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`p-10 md:p-14 border-current/20 ${
                i < values.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2" : ""
              }`}
            >
              <Icon strokeWidth={1.5} className="size-8 mb-8 text-chene" />
              <h3 className="font-display uppercase text-2xl mb-3">{title}</h3>
              <p className="text-sm opacity-75 max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <p className="md:col-span-4 text-xs font-bold uppercase tracking-label text-chene">
            Notre équipe
          </p>
          <p className="md:col-span-8 font-display uppercase leading-[0.9] text-[9vw] md:text-[4.5vw]">
            Cuisiniers, boulangers et baristas, réunis pour deux services par jour.
          </p>
        </div>
      </section>
    </div>
  );
}
