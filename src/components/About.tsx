"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js",
  "PostgreSQL", "Tailwind CSS", "Figma", "Vercel",
];

const principles = [
  "Poucos projetos por vez — todos com atenção total",
  "Comunicação direta entre cliente e quem constrói",
  "Código limpo e documentado desde o primeiro commit",
  "Entrega completa: da estratégia ao deploy",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-[110px]"
      style={{
        background: "#FBFAF7",
        borderTop: "1px solid #E4E1D9",
        borderBottom: "1px solid #E4E1D9",
      }}
      data-testid="about-section"
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        <div
          className="grid sobre-grid gap-20 items-start"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            data-testid="about-content"
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                05 / Sobre
              </span>
            </motion.div>

            <motion.h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              variants={fadeInUp}
              data-testid="about-title"
            >
              Um estúdio enxuto
              <br />
              com{" "}
              <em className="italic text-accent">obsessão</em>
              <br />
              por bom trabalho.
            </motion.h2>

            <motion.div variants={fadeInUp} data-testid="about-description">
              <p className="text-ink-2 mt-6 leading-[1.65]" style={{ fontSize: 16 }}>
                A Asimpta nasceu da união de pessoas com visão técnica e criativa
                para construir software com qualidade. Somos uma software house
                pequena por escolha — trabalhamos com poucos clientes por vez para
                entregar projetos do tamanho que merecem ser entregues.
              </p>
              <p className="text-ink-2 mt-4 leading-[1.65]" style={{ fontSize: 16 }}>
                Estratégia, design e desenvolvimento integrados em uma única equipe.
                Nosso jeito de trabalhar foi desenhado para times que querem um
                parceiro técnico, e não um fornecedor que precisa ser gerenciado.
              </p>
            </motion.div>

            <motion.div
              className="font-serif italic text-accent mt-7"
              style={{ fontSize: 22 }}
              variants={fadeInUp}
            >
              — equipe Asimpta
            </motion.div>
          </motion.div>

          {/* Right: stack + principles */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div>
              <h4
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4"
              >
                Stack principal
              </h4>
              <div className="flex flex-wrap gap-2" data-testid="about-stack">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-ink-2 px-3 py-1.5 border border-line rounded-full bg-paper tracking-[0.04em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="pt-8"
              style={{ borderTop: "1px solid #E4E1D9" }}
            >
              <h4
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-5"
              >
                Como trabalhamos
              </h4>
              <ul className="flex flex-col gap-3" data-testid="about-principles">
                {principles.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 leading-[1.55]"
                    style={{ fontSize: 14, color: "#2C2F33" }}
                  >
                    <span className="text-accent mt-px flex-none" aria-hidden="true">
                      →
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
