import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Conheça as condições para utilização do site e dos serviços da Asimpta.",
  alternates: {
    canonical: "https://asimpta.com.br/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso | Asimpta",
    description:
      "Conheça as condições para utilização do site e dos serviços da Asimpta.",
    url: "https://asimpta.com.br/termos-de-uso",
  },
};

export default function TermosDeUsoPage() {
  return <TermsContent />;
}
