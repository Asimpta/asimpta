"use client";

import { motion } from "framer-motion";
import { Monitor, Code2, Layers, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { solutions } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={52} strokeWidth={1.2} />,
  Code2: <Code2 size={52} strokeWidth={1.2} />,
  Layers: <Layers size={52} strokeWidth={1.2} />,
  BarChart3: <BarChart3 size={52} strokeWidth={1.2} />,
};

export default function Solutions() {
  return (
    <section
      id="projetos"
      className="py-[110px]"
      style={{
        background: "#FBFAF7",
        borderTop: "1px solid #E4E1D9",
        borderBottom: "1px solid #E4E1D9",
      }}
      data-testid="solutions-section"
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        {/* Section header */}
        <div
          className="grid section-head-grid gap-20 items-end mb-[60px]"
          style={{ gridTemplateColumns: "1fr 1.2fr" }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              04 / O que desenvolvemos
            </span>
            <h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              data-testid="solutions-title"
            >
              Soluções que
              <br />
              <em className="italic text-accent">construímos</em>.
            </h2>
          </div>
          <p
            className="text-muted"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "56ch" }}
            data-testid="solutions-description"
          >
            A Asimpta está em fase inicial. Estamos selecionando os primeiros
            projetos com cuidado. Abaixo, uma amostra do tipo de produto que
            desenvolvemos.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid solutions-grid gap-6"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          data-testid="solutions-grid"
        >
          {solutions.map((sol) => (
            <motion.article
              key={sol.id}
              className="bg-paper border border-line rounded-[16px] overflow-hidden flex flex-col cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              variants={fadeInUp}
              data-testid={`solutions-card-${sol.id}`}
            >
              {/* Visual area */}
              <div
                className="flex items-center justify-center"
                style={{
                  aspectRatio: "16/10",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(31,74,69,0.05), transparent 55%), repeating-linear-gradient(135deg, transparent 0 13px, rgba(31,74,69,0.045) 13px 14px)",
                  color: "#1F4A45",
                }}
              >
                {iconMap[sol.iconName]}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3.5 flex-1">
                <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-accent">
                  O que construímos
                </span>
                <h3
                  className="font-serif text-ink leading-tight tracking-[-0.01em]"
                  style={{ fontSize: 22 }}
                >
                  {sol.title}
                </h3>
                <p className="text-muted text-[13.5px] leading-[1.55]">
                  {sol.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] text-ink-2 px-2 py-1 border border-line rounded-full bg-bg-elev tracking-[0.04em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Cases em breve */}
        <motion.div
          className="mt-8 rounded-[16px] border border-line bg-paper p-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          data-testid="solutions-future-cases-message"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent badge-pulse" />
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
              Cases em breve
            </span>
          </div>
          <p
            className="font-serif text-ink"
            style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.01em" }}
            data-testid="solutions-empty-state"
          >
            Estamos construindo nossos primeiros cases.
            <br />
            <em className="italic text-accent">
              Em breve, projetos reais da Asimpta.
            </em>
          </p>
        </motion.div>

        {/* Reserve slot CTA */}
        <div
          className="mt-8 rounded-[16px] flex justify-between items-center gap-6 flex-wrap"
          style={{
            border: "1px dashed #C9C5BB",
            padding: "28px 32px",
          }}
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="font-serif text-ink text-2xl tracking-[-0.01em]">
              Quer ver o seu projeto aqui?
            </h3>
            <p className="text-muted text-[13.5px] leading-[1.55] max-w-[52ch]">
              Estamos selecionando os primeiros parceiros para os cases
              inaugurais da Asimpta. Se faz sentido para você ser um deles, a
              conversa começa por aqui.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent transition-colors whitespace-nowrap"
            data-testid="solutions-link-reserve-slot"
          >
            Reservar próximo case →
          </a>
        </div>
      </div>
    </section>
  );
}
