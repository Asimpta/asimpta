"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section id="processo" className="py-[110px]" data-testid="process-section">
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        {/* Section header */}
        <div
          className="grid section-head-grid gap-20 items-end mb-[50px]"
          style={{ gridTemplateColumns: "1fr 1.2fr" }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              03 / Processo
            </span>
            <h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              data-testid="process-title"
            >
              Como{" "}
              <em className="italic text-accent">trabalhamos</em>.
            </h2>
          </div>
          <p className="text-muted" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "56ch" }}>
            Um fluxo enxuto, transparente e iterativo. Você acompanha cada
            etapa em tempo real e entende exatamente onde o projeto está em
            qualquer momento.
          </p>
        </div>

        {/* Rail */}
        <motion.div
          className="border-t border-line"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          data-testid="process-grid"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              className="grid step-grid border-b border-line items-start cursor-default transition-all duration-200 hover:pl-3"
              style={{
                gridTemplateColumns: "80px 1fr 1.5fr 100px",
                gap: 32,
                padding: "28px 0",
              }}
              variants={fadeInUp}
              data-testid={`process-step-${step.id}`}
            >
              <div className="font-serif text-[28px] text-accent italic">
                {step.number}
              </div>

              <div
                className="font-serif text-ink leading-none tracking-[-0.01em]"
                style={{ fontSize: 30 }}
                data-testid={`process-step-title-${step.id}`}
              >
                {step.title}
              </div>

              <p
                className="text-muted leading-[1.55] step-desc-col"
                style={{ fontSize: 14.5, maxWidth: "56ch" }}
                data-testid={`process-step-description-${step.id}`}
              >
                {step.description}
              </p>

              <div className="font-mono text-[11px] text-muted tracking-[0.06em] uppercase text-right step-tag-col">
                {step.duration}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
