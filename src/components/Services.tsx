"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Layout,
  Code2,
  Shield,
  BarChart3,
  Zap,
  Smartphone,
  Wrench,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { services } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={22} strokeWidth={1.4} />,
  Layout: <Layout size={22} strokeWidth={1.4} />,
  Code2: <Code2 size={22} strokeWidth={1.4} />,
  Shield: <Shield size={22} strokeWidth={1.4} />,
  BarChart3: <BarChart3 size={22} strokeWidth={1.4} />,
  Zap: <Zap size={22} strokeWidth={1.4} />,
  Smartphone: <Smartphone size={22} strokeWidth={1.4} />,
  Wrench: <Wrench size={22} strokeWidth={1.4} />,
};

export default function Services() {
  return (
    <section id="servicos" className="py-[110px]" data-testid="services-section">
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        {/* Section header */}
        <div
          className="grid section-head-grid gap-20 items-end mb-[60px]"
          style={{ gridTemplateColumns: "1fr 1.2fr" }}
        >
          <div>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              01 / Serviços
            </span>
            <h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              data-testid="services-title"
            >
              O que fazemos
              <br />
              com <em className="italic text-accent">cuidado</em>.
            </h2>
          </div>
          <p
            className="text-muted"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "56ch" }}
            data-testid="services-description"
          >
            Trabalhamos com um portfólio enxuto de serviços, sempre sob medida.
            Cada projeto começa com uma conversa real sobre o problema antes de
            qualquer linha de código.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid services-grid-inner border border-line rounded-[16px] overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "#E4E1D9",
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          data-testid="services-grid"
        >
          {services.map((svc) => (
            <motion.article
              key={svc.id}
              className="bg-paper flex flex-col gap-4 relative cursor-default transition-colors duration-200 hover:bg-bg-elev"
              style={{ padding: "32px 28px 36px", minHeight: 240 }}
              variants={fadeInUp}
              data-testid={`services-card-${svc.id}`}
            >
              <span
                className="absolute top-5 right-5 font-mono text-[11px] text-muted-2"
                aria-hidden="true"
              >
                {svc.number}
              </span>

              <div className="w-9 h-9 flex items-center justify-center text-ink">
                {iconMap[svc.iconName]}
              </div>

              <h3
                className="text-[16px] font-medium text-ink tracking-[-0.01em]"
                data-testid={`services-card-title-${svc.id}`}
              >
                {svc.title}
              </h3>

              <p
                className="text-muted text-sm leading-[1.55]"
                data-testid={`services-card-description-${svc.id}`}
              >
                {svc.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
