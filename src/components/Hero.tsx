"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { tickerItems } from "@/data/site";

function HeroVisual() {
  return (
    <div
      className="relative w-full ml-auto"
      style={{ aspectRatio: "4/5", maxWidth: 520 }}
      data-testid="hero-visual-container"
      aria-hidden="true"
    >
      {/* Hairline grid */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "6% 0",
          backgroundImage:
            "linear-gradient(to right, rgba(20,22,25,0.05) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />

      {/* Primary card — monogram */}
      <motion.div
        className="absolute rounded-[16px] border border-line shadow-md overflow-hidden flex flex-col justify-between"
        style={{
          inset: "4% 8% 30% 4%",
          padding: "26px 28px",
          background: "linear-gradient(180deg, #FEFDFA 0%, #F9F7F1 100%)",
        }}
        whileHover={{ x: -2, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-none" />
          A · 01
        </div>

        <div
          className="font-serif text-ink leading-[0.85] tracking-[-0.04em]"
          style={{ fontSize: "clamp(80px, 11vw, 160px)", padding: "12px 0 6px" }}
        >
          A<em className="italic text-accent">i</em>
        </div>

        <div
          className="flex gap-2.5 items-center font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase pt-3"
          style={{ borderTop: "1px solid #EFECE5" }}
        >
          <span>Estúdio digital</span>
          <span>·</span>
          <span>Asimpta</span>
        </div>
      </motion.div>

      {/* Dark meta card */}
      <motion.div
        className="absolute rounded-[16px] overflow-hidden"
        style={{
          right: 0,
          top: "18%",
          width: "52%",
          padding: "22px 22px 24px",
          background: "#15171A",
          border: "1px solid #15171A",
        }}
        whileHover={{ x: 2, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div style={{ width: 28, height: 2, background: "#88B5AE", marginBottom: 18 }} />
        <div className="flex flex-col gap-3.5">
          {[
            { k: "Disciplinas", v: "Estratégia · Design · Engenharia" },
            { k: "Fundação", v: "2026" },
            { k: "Origem", v: "São Paulo, BR" },
          ].map((item, i, arr) => (
            <div
              key={item.k}
              className="flex flex-col gap-1 pb-3.5"
              style={{
                borderBottom:
                  i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.1em] uppercase"
                style={{ color: "#9CA1A8" }}
              >
                {item.k}
              </span>
              <span
                className="font-serif text-[17px]"
                style={{ color: "#F4F2EC", letterSpacing: "-0.005em" }}
              >
                {item.v}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quote card */}
      <motion.div
        className="absolute rounded-[16px] border border-line"
        style={{
          left: "12%",
          right: "22%",
          bottom: "8%",
          padding: "26px 28px 22px",
          background: "#FBFAF7",
        }}
        whileHover={{ x: -2, y: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative pl-5">
          <span
            className="absolute font-serif text-[56px] leading-none text-accent italic"
            style={{ left: -2, top: -10 }}
          >
            "
          </span>
          <p className="font-serif text-[22px] leading-[1.2] tracking-[-0.01em] text-ink">
            Construir bem é fazer com<br />
            que pareça <em className="italic text-accent">simples</em>.
          </p>
        </div>
      </motion.div>

      {/* Circular mark */}
      <motion.div
        className="absolute bg-paper border border-line rounded-full shadow-md flex flex-col items-center justify-center"
        style={{
          right: "4%",
          bottom: 0,
          width: "26%",
          aspectRatio: "1",
          padding: 14,
          color: "#1F4A45",
        }}
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <svg
          viewBox="0 0 80 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ width: "52%" }}
          aria-hidden="true"
        >
          <circle cx="40" cy="40" r="34" />
          <path d="M14 50 L40 14 L66 50" />
          <path d="M22 50 L58 50" />
        </svg>
        <span className="font-mono text-[8px] tracking-[0.1em] text-muted uppercase mt-1.5 text-center leading-tight">
          Asimpta · Est. MMXXVI
        </span>
      </motion.div>
    </div>
  );
}

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div
      className="overflow-hidden border-t border-b border-line"
      style={{ background: "#FBFAF7", padding: "22px 0" }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-serif text-[22px] text-ink-2 inline-flex items-center whitespace-nowrap"
            style={{ gap: 64 }}
          >
            {item}
            <span className="text-accent" style={{ fontSize: 14 }} aria-hidden="true">
              …
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-[140px] pb-0" data-testid="hero-section">
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        <div
          className="grid hero-two-col gap-20 items-end pb-20"
          style={{ gridTemplateColumns: "1.05fr 1fr" }}
        >
          {/* Left column */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Estúdio digital · São Paulo, BR
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-ink mt-7"
              style={{
                fontSize: "clamp(44px, 6.4vw, 88px)",
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
              }}
              data-testid="hero-title"
              variants={fadeInUp}
            >
              Transformamos
              <br />
              ideias em produtos
              <br />
              digitais{" "}
              <em className="italic text-accent">
                bem
                <br />
                construídos
              </em>
              .
            </motion.h1>

            <motion.p
              className="text-muted mt-8 max-w-[56ch]"
              style={{ fontSize: 19, lineHeight: 1.55 }}
              data-testid="hero-description"
              variants={fadeInUp}
            >
              Criamos sites, sistemas e SaaS sob medida com foco em clareza,
              performance e resultado. Estratégia, design e engenharia em um
              único time.
            </motion.p>

            <motion.div className="flex gap-3 mt-9 flex-wrap" variants={fadeInUp}>
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent transition-colors duration-200"
                data-testid="hero-link-start-project"
              >
                Começar projeto <span>→</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-medium text-ink border border-line hover:bg-paper hover:border-[#C9C5BB] transition-all duration-200"
                data-testid="hero-link-view-services"
              >
                Ver serviços
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
