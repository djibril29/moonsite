"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Shot = {
  src: string;
  caption: string;
  /** Optional title shown in the side detail panel (e.g. the platform name). */
  title?: string;
  /** Optional bullet points detailing the work done. */
  points?: string[];
};

type Brand = {
  name: string;
  sector: string;
  url: string;
  urlLabel: string;
  blurb: string;
  services: string[];
  desktop: string;
  mobile: string;
  gallery: Shot[];
};

const IT_POINTS = [
  "Mise en place et configuration de l'espace de travail",
  "Gestion des boîtes mail et de la messagerie professionnelle",
  "Administration des comptes, des accès et des permissions",
  "Sécurité, sauvegardes et protection des données",
  "Support et accompagnement des équipes au quotidien",
];

const brands: Brand[] = [
  {
    name: "J-GEN Sénégal",
    sector: "Communication & plaidoyer",
    url: "https://www.jgen.sn/",
    urlLabel: "jgen.sn",
    blurb:
      "Présence digitale complète pour l'association de défense des droits des femmes et des filles J-GEN Sénégal : site web, identité et ligne éditoriale social media, ainsi que l'administration de leur environnement collaboratif (Microsoft 365 / Google Workspace).",
    services: ["Site web", "Branding", "Social media", "IT & Cloud"],
    desktop: "/images/cases/jgen-sn.png",
    mobile: "/images/cases/jgen-phone.png",
    gallery: [
      {
        src: "/images/cases/feed-jgen.png",
        caption: "Identité visuelle & ligne éditoriale social media",
      },
      {
        src: "/images/cases/it-workspace.png",
        caption: "Environnement de travail administré par Moon.innov",
        title: "Microsoft 365",
        points: IT_POINTS,
      },
    ],
  },
  {
    name: "BTLABS Consulting",
    sector: "Études environnementales",
    url: "https://www.btlabsconsulting.com/",
    urlLabel: "btlabsconsulting.com",
    blurb:
      "Plateforme web et univers social media pour le cabinet d'études d'impact environnemental BTLABS Consulting, avec la mise en place et l'administration de leur environnement de travail cloud sécurisé.",
    services: ["Site web", "Social media", "Marketing", "IT & Cloud"],
    desktop: "/images/cases/btlabsconsulting.png",
    mobile: "/images/cases/btlabs-phone.png",
    gallery: [
      {
        src: "/images/cases/feed-btlabs.png",
        caption: "Identité visuelle & univers social media",
      },
      {
        src: "/images/cases/it-workspace.png",
        caption: "Environnement de travail administré par Moon.innov",
        title: "Google Workspace",
        points: IT_POINTS,
      },
    ],
  },
];

export function Portfolio() {
  const [openBrand, setOpenBrand] = useState<number | null>(null);
  const [shotIndex, setShotIndex] = useState(0);

  const current = openBrand !== null ? brands[openBrand] : null;
  const shot = current ? current.gallery[shotIndex] : null;
  const hasDetails = !!(shot && shot.points && shot.points.length);

  const close = useCallback(() => setOpenBrand(null), []);

  const next = useCallback(() => {
    if (!current) return;
    setShotIndex((i) => (i + 1) % current.gallery.length);
  }, [current]);

  const prev = useCallback(() => {
    if (!current) return;
    setShotIndex((i) => (i - 1 + current.gallery.length) % current.gallery.length);
  }, [current]);

  useEffect(() => {
    if (openBrand === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openBrand, close, next, prev]);

  const openLightbox = (brandIndex: number, shot: number) => {
    setOpenBrand(brandIndex);
    setShotIndex(shot);
  };

  return (
    <section id="portfolio" className="relative bg-bg py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-orange">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Les marques qui nous font confiance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Site web, branding, social media et environnement IT — un aperçu de
            nos réalisations pour des organisations d&apos;ici.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-10 lg:gap-14">
          {brands.map((brand, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={brand.name}
                className="grid items-center gap-12 rounded-4xl bg-surface p-6 shadow-xl shadow-navy/5 ring-1 ring-black/5 sm:p-10 md:grid-cols-2 md:gap-14"
              >
                {/* Devices */}
                <div className={reversed ? "md:order-2" : ""}>
                  <BrandDevices brand={brand} />
                </div>

                {/* Text */}
                <div className={reversed ? "md:order-1" : ""}>
                  <div className="flex flex-wrap gap-2">
                    {brand.services.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-bg px-3 py-1 text-xs font-semibold text-muted ring-1 ring-black/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-orange">
                    {brand.sector}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {brand.blurb}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-colors hover:bg-orange-bright"
                    >
                      Visiter le site
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17 17 7m0 0H9m8 0v8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <button
                      type="button"
                      onClick={() => openLightbox(index, 0)}
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-600"
                    >
                      Identité visuelle
                    </button>
                    <button
                      type="button"
                      onClick={() => openLightbox(index, 1)}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-muted ring-1 ring-black/10 transition-colors hover:text-ink hover:ring-black/20"
                    >
                      Environnement IT
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Votre marque, la prochaine ?{" "}
          <a href="#contact" className="font-semibold text-orange hover:underline">
            Discutons de votre projet
          </a>
          .
        </p>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie — ${current.name}`}
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {current.name}
                </h3>
                <p className="text-sm text-mist">{current.sector}</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className={
                hasDetails
                  ? "grid items-center gap-6 lg:grid-cols-[1.5fr_1fr]"
                  : ""
              }
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-navy ${
                  hasDetails
                    ? "aspect-3/2 w-full"
                    : "mx-auto aspect-4/5 w-full max-w-sm"
                }`}
              >
                <Image
                  src={current.gallery[shotIndex].src}
                  alt={current.gallery[shotIndex].caption}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />

                {current.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Image précédente"
                      className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white transition-colors hover:bg-ink/80"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M15 18l-6-6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Image suivante"
                      className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white transition-colors hover:bg-ink/80"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {hasDetails && (
                <div className="rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                    Environnement de travail
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-bold text-white">
                    {current.gallery[shotIndex].title}
                  </h4>
                  <p className="mt-1 text-sm text-mist">
                    Déployé et administré par Moon.innov
                  </p>
                  <ul className="mt-5 space-y-3">
                    {current.gallery[shotIndex].points?.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm text-mist"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-0.5 shrink-0 text-orange"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-mist">
                {current.gallery[shotIndex].caption}
              </p>
              {current.gallery.length > 1 && (
                <span className="shrink-0 text-sm font-semibold text-white/60">
                  {shotIndex + 1} / {current.gallery.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function BrandDevices({ brand }: { brand: Brand }) {
  return (
    <div className="relative w-full pb-8 pr-4 sm:pb-10">
      <LaptopMockup src={brand.desktop} alt={`Site web ${brand.name}`} />
      <div className="absolute -bottom-1 right-0 w-[26%] sm:w-[23%]">
        <PhoneMockup src={brand.mobile} alt={`Version mobile ${brand.name}`} />
      </div>
    </div>
  );
}

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full">
      <div className="mx-auto w-[94%] rounded-t-xl border-[7px] border-b-0 border-ink bg-ink shadow-2xl shadow-navy/30">
        <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-white">
          <div
            role="img"
            aria-label={alt}
            style={{ backgroundImage: `url(${src})` }}
            className="animate-screen absolute inset-0 bg-top bg-no-repeat bg-size-[100%_auto] hover:[animation-play-state:paused]"
          />
        </div>
      </div>
      <div className="relative h-3 w-full rounded-b-xl bg-ink shadow-lg">
        <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-md bg-white/15" />
      </div>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-2xl shadow-navy/40">
      <div className="relative aspect-9/19 overflow-hidden rounded-[1.2rem] bg-white">
        <div className="absolute left-1/2 top-0 z-10 h-3.5 w-1/3 -translate-x-1/2 rounded-b-xl bg-ink" />
        <div
          role="img"
          aria-label={alt}
          style={{ backgroundImage: `url(${src})` }}
          className="animate-screen absolute inset-0 bg-top bg-no-repeat bg-size-[100%_auto] [animation-duration:15s] hover:[animation-play-state:paused]"
        />
      </div>
    </div>
  );
}
