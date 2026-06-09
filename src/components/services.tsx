"use client";

import { useState } from "react";

type Service = {
  title: string;
  blurb: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Sites & plateformes e-commerce",
    blurb:
      "Votre boutique en ligne pour vendre vos produits partout et à toute heure, avec un paiement simple et sécurisé.",
    icon: (
      <path
        d="M3 4h2l2 12h11l2-8H6m1 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Branding & identité de marque",
    blurb:
      "Une image forte et reconnaissable pour votre entreprise : logo, couleurs et style qui inspirent confiance.",
    icon: (
      <path
        d="M12 3 4 7v6c0 4 3.5 6.5 8 8 4.5-1.5 8-4 8-8V7l-8-4Zm-2 9 1.5 1.5L15 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Applications web & mobiles",
    blurb:
      "Des applications sur ordinateur et téléphone, simples à utiliser pour vos clients comme pour vos équipes.",
    icon: (
      <path
        d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Sites vitrines",
    blurb:
      "Un site élégant qui présente votre activité et rassure vos clients — votre carte de visite sur internet.",
    icon: (
      <path
        d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Stratégie produit & UX/UI",
    blurb:
      "Nous pensons et dessinons votre service pour qu'il soit clair, agréable et facile à prendre en main.",
    icon: (
      <path
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Marketing digital & SEO",
    blurb:
      "Nous vous rendons visible sur Google et les réseaux sociaux pour attirer davantage de clients.",
    icon: (
      <path
        d="M3 17V8m6 9V5m6 12v-7m6 7V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Services() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-bg-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
            Nos services
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Au-delà de nos produits, nous accompagnons votre marque
          </h2>
          <p className="mt-4 text-sm text-muted">
            Survolez ou touchez une carte pour découvrir ce que nous faisons.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setFlipped((prev) => (prev === i ? null : i))}
              aria-pressed={flipped === i}
              data-flipped={flipped === i}
              className="flip-card group h-52 text-left focus:outline-none sm:h-60"
            >
              <div className="flip-inner">
                {/* Front — icon + title */}
                <div className="flip-face flex-col items-center justify-center rounded-3xl border border-black/5 bg-surface px-5 py-9 text-center shadow-sm shadow-navy/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-navy/10 sm:px-8">
                  <span className="text-orange transition-transform duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-11 w-11 sm:h-14 sm:w-14"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-wide text-ink sm:mt-7 sm:text-base lg:text-lg">
                    {s.title}
                  </h3>
                </div>

                {/* Back — plain-language description */}
                <div className="flip-back flip-face flex-col items-center justify-center gap-3 rounded-3xl border border-orange/20 bg-navy px-5 py-8 text-center shadow-xl shadow-navy/20 sm:px-7">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-orange sm:text-base">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
                    {s.blurb}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
