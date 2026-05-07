"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { deliverables } from "@/data/site";

export default function Deliverables() {
  return (
    <section
      className="py-[110px]"
      style={{ background: "#15171A" }}
      data-testid="deliverables-section"
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        {/* Section header */}
        <div
          className="grid section-head-grid gap-20 items-end mb-[60px]"
          style={{ gridTemplateColumns: "1fr 1.2fr" }}
        >
          <div>
            <span
              className="font-mono text-[11px] tracking-[0.08em] uppercase inline-flex items-center gap-2"
              style={{ color: "#B7BBC1" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              02 / Entregas
            </span>
            <h2
              className="font-serif mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#F4F2EC",
              }}
              data-testid="deliverables-title"
            >
              Ponta a ponta,
              <br />
              de verdade
              <em className="italic" style={{ color: "#88B5AE" }}>
                .
              </em>
            </h2>
          </div>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "#B7BBC1", maxWidth: "56ch" }}>
            Cobrimos cada camada de um produto digital — da decisão estratégica
            ao deploy. Você não precisa orquestrar fornecedores diferentes para
            tirar uma ideia do papel.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid deliverables-grid-inner rounded-[16px] overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          data-testid="deliverables-grid"
        >
          {deliverables.map((d) => (
            <motion.article
              key={d.id}
              className={`flex flex-col gap-3.5 cursor-default transition-colors duration-200 hover:bg-[#1F2226]${d.wide ? " deliverables-card-wide" : ""}`}
              style={{
                background: "#15171A",
                padding: "36px 28px",
                minHeight: 200,
                gridColumn: d.wide ? "span 3" : "span 1",
              }}
              variants={fadeInUp}
              data-testid={`deliverables-card-${d.id}`}
            >
              <span
                className="font-mono text-[11px] tracking-[0.06em]"
                style={{ color: "#88B5AE" }}
              >
                {d.number}
              </span>
              <h3
                className="text-[17px] font-medium tracking-[-0.01em]"
                style={{ color: "#F4F2EC" }}
              >
                {d.title}
              </h3>
              <p className="text-[13.5px] leading-[1.55]" style={{ color: "#9CA1A8" }}>
                {d.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
