"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { differentials } from "@/data/site";

export default function Differentials() {
  return (
    <section className="py-[110px]" data-testid="differentials-section">
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        {/* Section header */}
        <div
          className="grid section-head-grid gap-20 items-end mb-[60px]"
          style={{ gridTemplateColumns: "1fr 1.2fr" }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              06 / Diferenciais
            </span>
            <h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              data-testid="differentials-title"
            >
              Por que{" "}
              <em className="italic text-accent">nós</em>.
            </h2>
          </div>
          <p className="text-muted" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "56ch" }}>
            Não temos um pitch genérico. O que oferecemos é resultado de
            escolhas específicas sobre como trabalhar, e cada uma delas tem
            consequência prática para você.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid differentials-grid gap-5"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          data-testid="differentials-grid"
        >
          {differentials.map((diff) => (
            <motion.article
              key={diff.id}
              className="bg-paper border border-line rounded-[16px] p-7 flex flex-col gap-3.5 cursor-default transition-all duration-200 hover:border-[#C9C5BB] hover:shadow-sm"
              style={{ minHeight: 200 }}
              variants={fadeInUp}
              data-testid={`differentials-card-${diff.id}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-medium text-accent"
                style={{ background: "#DDE5E2" }}
              >
                {diff.mark}
              </div>
              <h3 className="text-[17px] font-medium text-ink tracking-[-0.01em]">
                {diff.title}
              </h3>
              <p className="text-muted text-[13.5px] leading-[1.55]">
                {diff.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
