const steps = [
  {
    num: "01",
    title: "Découverte & cadrage",
    text: "Nous écoutons votre vision, étudions le marché sénégalais et définissons ensemble les objectifs du produit.",
  },
  {
    num: "02",
    title: "Design & prototypage",
    text: "Nous concevons des interfaces claires et des parcours pensés pour vos utilisateurs, du mobile au desktop.",
  },
  {
    num: "03",
    title: "Développement",
    text: "Nos équipes construisent un produit robuste, sécurisé et évolutif, avec des technologies modernes.",
  },
  {
    num: "04",
    title: "Lancement & croissance",
    text: "Nous déployons, mesurons et améliorons en continu pour maximiser l'impact de votre solution.",
  },
];

export function Approach() {
  return (
    <section id="approche" className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
              Notre approche
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Une méthode pensée pour l&apos;impact local
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted">
              De l&apos;idée au lancement, nous avançons par étapes claires et
              mesurables. Chaque produit est conçu pour les réalités du terrain
              africain : connectivité, paiements, usages.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Mobile-first", "Paiements locaux", "Multilingue", "Scalable"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy/15 bg-white px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <ol className="space-y-6">
              {steps.map((s) => (
                <li
                  key={s.num}
                  className="relative flex gap-5 rounded-2xl bg-navy p-5 shadow-lg shadow-navy/10 transition-transform hover:-translate-y-0.5"
                >
                  <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange font-display text-lg font-bold text-white">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
