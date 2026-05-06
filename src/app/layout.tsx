import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asimpta.com"),
  title: "Asimpta | Soluções digitais sob medida",
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
    "São Paulo",
  ],
  authors: [{ name: "Asimpta" }],
  creator: "Asimpta",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://asimpta.com",
    siteName: "Asimpta",
    title: "Asimpta | Soluções digitais sob medida",
    description:
      "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Asimpta — Estúdio digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asimpta | Soluções digitais sob medida",
    description:
      "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
