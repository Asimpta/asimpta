import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Asimpta coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
  alternates: {
    canonical: "https://asimpta.com.br/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | Asimpta",
    description:
      "Saiba como a Asimpta coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
    url: "https://asimpta.com.br/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidadePage() {
  return <PrivacyPolicyContent />;
}
