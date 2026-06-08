import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moon-innov.sn"),
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
    locale: "fr_SN",
    type: "website",
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
