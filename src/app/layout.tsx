import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Absolute base used to build Open Graph / Twitter image URLs.
 * Prefers an explicit site URL, then the Vercel deployment URL, and finally
 * the production custom domain — so link previews resolve on every environment.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://mooninnov.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moon.innov — Studio digital au Sénégal",
    template: "%s · Moon.innov",
  },
  description:
    "Moon.innov est un studio digital basé au Sénégal. Nous délivrons des solutions digitales innovantes pour l'Afrique : plateformes, produits sur-mesure, e-commerce et branding.",
  keywords: [
    "studio digital Sénégal",
    "agence tech Dakar",
    "développement produit Afrique",
    "Moon.innov",
    "solutions digitales Afrique",
  ],
  openGraph: {
    title: "Moon.innov — Studio digital au Sénégal",
    description:
      "Nous délivrons des solutions digitales innovantes pour l'Afrique.",
    url: siteUrl,
    siteName: "Moon.innov",
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon.innov — Studio digital au Sénégal",
    description:
      "Nous délivrons des solutions digitales innovantes pour l'Afrique.",
  },
  icons: {
    icon: "/site-fav-moon.svg",
    shortcut: "/site-fav-moon.svg",
    apple: "/site-fav-moon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
