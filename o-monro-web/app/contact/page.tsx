"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

const fields = [
  { name: "name", label: "Nom", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "message", label: "Message", type: "textarea" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="px-6 md:px-10 py-16 border-b-2 border-current/20">
        <span className="text-xs font-bold uppercase tracking-label text-chene">Contact</span>
        <h1 className="font-display uppercase leading-[0.88] text-[13vw] md:text-[7vw] mt-4">
          Parlons-nous
        </h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-current/20">
        {/* Infos */}
        <div className="p-6 md:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-current/20 flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-3 text-chene mb-3">
              <Clock strokeWidth={1.5} className="size-5" />
              <span className="text-xs font-bold uppercase tracking-label">Horaires</span>
            </div>
            <p className="font-display uppercase text-3xl md:text-5xl leading-tight">10h–15h</p>
            <p className="font-display uppercase text-3xl md:text-5xl leading-tight">18h–01h</p>
          </div>

          <div>
            <div className="flex items-center gap-3 text-chene mb-3">
              <MapPin strokeWidth={1.5} className="size-5" />
              <span className="text-xs font-bold uppercase tracking-label">Adresse</span>
            </div>
            <p className="font-display uppercase text-2xl md:text-4xl leading-tight">
              12 Rue de la Marmite
              <br />
              75011 Paris
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 text-chene mb-3">
              <Phone strokeWidth={1.5} className="size-5" />
              <span className="text-xs font-bold uppercase tracking-label">Téléphone</span>
            </div>
            <p className="font-display uppercase text-3xl md:text-5xl leading-tight">
              01 23 45 67 89
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="p-6 md:p-14">
          {sent ? (
            <p className="font-display uppercase text-2xl md:text-4xl leading-tight">
              Message envoyé.
              <br />
              Réponse rapide, promis.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {fields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.name}
                      className="text-xs font-bold uppercase tracking-label text-chene"
                    >
                      {field.label}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      required
                      rows={3}
                      className="bg-transparent border-0 border-b-2 border-current/40 focus:border-chene outline-none py-3 text-xl md:text-2xl font-sans resize-none placeholder:opacity-30"
                      placeholder="Votre message..."
                    />
                  </div>
                ) : (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.name}
                      className="text-xs font-bold uppercase tracking-label text-chene"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      className="bg-transparent border-0 border-b-2 border-current/40 focus:border-chene outline-none py-3 text-xl md:text-2xl font-sans placeholder:opacity-30"
                      placeholder={field.label}
                    />
                  </div>
                )
              )}

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center gap-2 self-start px-8 py-4 font-bold text-xs uppercase tracking-label border-2 border-current hover:bg-chene hover:border-chene hover:text-noir-encre transition-colors"
              >
                Envoyer
                <ArrowRight strokeWidth={1.5} className="size-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
