export function Contact() {
  return (
    <section id="contact" className="relative bg-bg-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-14 shadow-xl shadow-navy/20 sm:px-14 lg:px-20 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Vous avez une idée ? Construisons-la ensemble.
              </h2>
              <p className="mt-5 max-w-md text-lg text-mist">
                Parlons de votre projet digital. Notre équipe à Dakar vous
                répond sous 48h.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:contact@moon-innov.sn"
                  className="flex items-center gap-3 text-white transition-colors hover:text-orange"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-orange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 6h18v12H3V6Zm0 1 9 6 9-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  contact@moon-innov.sn
                </a>
                <a
                  href="tel:+221770131208"
                  className="flex items-center gap-3 text-white transition-colors hover:text-orange"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-orange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  +221 77 013 12 08
                </a>
                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-orange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Dakar, Sénégal
                </div>
              </div>
            </div>

            <form className="glass rounded-3xl p-6 sm:p-8" action="#" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nom complet" id="name" placeholder="Awa Diop" />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="awa@entreprise.sn"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Entreprise"
                  id="company"
                  placeholder="Nom de votre entreprise"
                  required={false}
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-mist"
                >
                  Votre projet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre idée en quelques lignes…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-mist/50 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/30"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-ink shadow-lg shadow-orange/25 transition-all hover:bg-orange-bright"
              >
                Envoyer ma demande
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-mist"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-white placeholder:text-mist/50 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/30"
      />
    </div>
  );
}
