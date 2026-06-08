import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Studio digital basé à Dakar. Nous délivrons des solutions
              digitales innovantes pour l&apos;Afrique.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  d: "M4 4h4v16H4V4Zm2-3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v6h-4v-6c0-1.5-.5-2.5-2-2.5S14 12 14 14v6h-4V9Z",
                },
                {
                  label: "Instagram",
                  d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                },
                {
                  label: "X",
                  d: "M4 4h4l4 6 5-6h3l-6.5 8L21 20h-4l-4.5-6.5L7 20H4l6.8-8.4L4 4Z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-mist transition-colors hover:border-orange/50 hover:text-orange"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li>
                <a href="#projets" className="hover:text-orange">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange">
                  Services
                </a>
              </li>
              <li>
                <a href="#approche" className="hover:text-orange">
                  Approche
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Nos produits
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li>Wooma</li>
              <li>Senconcours</li>
              <li>SpeedLivraison</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-mist">
            © {new Date().getFullYear()} Moon.innov — Tous droits réservés.
          </p>
          <p className="text-sm text-mist">
            Conçu avec passion à Dakar 🇸🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
