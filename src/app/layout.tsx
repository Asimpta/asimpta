import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://asimpta.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Asimpta | Soluções digitais sob medida",
    template: "%s | Asimpta",
  },
  description:
    "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado. Estratégia, design e engenharia em um único time.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "sites institucionais",
    "SaaS",
    "sistemas web",
    "landing pages",
    "dashboards",
    "automações",
    "startup",
    "São Paulo",
    "Brasil",
  ],
  authors: [{ name: "Asimpta", url: BASE_URL }],
  creator: "Asimpta",
  publisher: "Asimpta",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Asimpta",
    title: "Asimpta | Soluções digitais sob medida",
    description:
      "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Asimpta — Soluções digitais sob medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asimpta | Soluções digitais sob medida",
    description:
      "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asimpta",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description:
    "Software house focada em criar soluções digitais elegantes, funcionais e bem construídas.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "ola@asimpta.com",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://instagram.com/asimpta",
    "https://github.com/asimpta",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
