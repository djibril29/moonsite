import Image from "next/image";

type Project = {
  name: string;
  tag: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Wooma",
    tag: "Marketplace · Emploi",
    description:
      "Une plateforme qui connecte les travailleurs qualifiés et les clients en quelques clics, pour faciliter l'accès aux services de proximité partout au Sénégal.",
    image: "/images/wooma.png",
  },
  {
    name: "Senconcours",
    tag: "EdTech · MOOC",
    description:
      "Une plateforme d'apprentissage en ligne qui prépare les étudiants aux concours et examens nationaux du Sénégal, avec cours, quiz et suivi personnalisé.",
    image: "/images/senconcours.png",
  },
  {
    name: "SpeedLivraison",
    tag: "Logistique · Livraison",
    description:
      "Un service de livraison rapide et fiable au Sénégal, qui digitalise la logistique du dernier kilomètre pour les commerçants et les particuliers.",
    image: "/images/speedlivraison.png",
  },
];

export function Projects() {
  return (
    <section id="projets" className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
            Nos réalisations
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Des solutions en production
          </h2>
        </div>

        {/* Staircase layout — alternating rows that step down the page */}
        <div className="mt-20 flex flex-col gap-14 md:gap-8">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={p.name}
                className={`group w-full max-w-3xl ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div
                  className={`grid items-center gap-6 md:grid-cols-2 md:gap-8 ${
                    isEven ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <span
                      className={`pointer-events-none absolute -top-7 z-10 font-display text-7xl font-extrabold text-navy/10 ${
                        isEven ? "-left-2" : "-right-2"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-navy/25 ring-1 ring-navy/10 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-navy/30">
                      <Image
                        src={p.image}
                        alt={`Illustration du projet ${p.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "md:pl-2" : "md:pr-2"}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {p.tag}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors hover:text-orange-bright"
                    >
                      Découvrir le projet
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12h14m0 0-6-6m6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
