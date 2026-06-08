import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <Image
        src="/images/hero-entrepreneurs.png"
        alt="Entrepreneurs africains collaborant dans un studio tech à Dakar"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-ink/45" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-6 py-32 text-center lg:px-8">
        <div className="reveal flex flex-col items-center [text-shadow:0_2px_18px_rgba(6,13,31,0.55)]">
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nous délivrons des solutions digitales innovantes pour l&apos;Afrique
          </h1>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projets"
              className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange/25 transition-all hover:bg-orange-bright"
            >
              Voir nos réalisations
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
