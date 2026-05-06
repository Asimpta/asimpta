"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      className="py-[130px] text-center"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E4E1D9",
        borderBottom: "1px solid #E4E1D9",
      }}
      data-testid="cta-section"
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Vamos começar
          </span>

          <h2
            className="font-serif text-ink mx-auto mt-4"
            style={{
              fontSize: "clamp(40px, 5.4vw, 76px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.0,
              maxWidth: "18ch",
            }}
            data-testid="cta-title"
          >
            Seu projeto merece sair do papel{" "}
            <em className="italic text-accent">com qualidade</em>.
          </h2>

          <p
            className="text-muted mx-auto mt-6 max-w-[56ch]"
            style={{ fontSize: 19, lineHeight: 1.55 }}
            data-testid="cta-description"
          >
            Vamos criar uma solução digital que faça sentido para o seu negócio
            — sem promessas vazias, sem etapas desnecessárias.
          </p>

          <div className="flex justify-center gap-3 mt-9 flex-wrap">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent transition-colors duration-200"
              data-testid="cta-link-contact"
            >
              Falar com a Asimpta →
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-ink border border-line hover:bg-paper hover:border-[#C9C5BB] transition-all duration-200"
              data-testid="cta-link-solutions"
            >
              Ver soluções
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
