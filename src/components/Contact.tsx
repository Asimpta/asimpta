"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projectTypeOptions } from "@/data/site";
import type { SelectOption } from "@/types";


// ─── Custom Select ────────────────────────────────────────────────────────────

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

function CustomSelect({
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIdx(0);
      } else if (e.key === "Enter" && activeIdx >= 0) {
        handleSelect(options[activeIdx]);
      } else {
        setActiveIdx((prev) => Math.min(options.length - 1, prev + 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(0, prev - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative" data-testid="contact-select-project-type">
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          if (!open)
            setActiveIdx(selected ? options.findIndex((o) => o.value === value) : 0);
        }}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full bg-transparent flex items-center justify-between gap-3 text-left py-3 transition-colors duration-200"
        style={{
          borderBottom: `1px solid ${open ? "#1F4A45" : "#E4E1D9"}`,
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 0,
          fontSize: 16,
          color: selected ? "#15171A" : "#6B6F75",
          outline: "none",
        }}
        data-testid="contact-select-trigger-project-type"
      >
        <span>{selected ? selected.label : "Selecione uma opção"}</span>
        <ChevronDown
          size={16}
          className="flex-none text-muted transition-transform duration-200"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "#1F4A45" : undefined,
          }}
        />
      </button>

      {/* Dropdown list — no internal scroll */}
      {open && (
        <motion.ul
          role="listbox"
          aria-label="Tipo de projeto"
          className="absolute left-0 right-0 bg-paper border border-line rounded-[16px] z-20 overflow-hidden"
          style={{
            top: "calc(100% + 10px)",
            padding: 6,
            boxShadow:
              "0 1px 0 rgba(20,22,25,0.04), 0 18px 40px -16px rgba(20,22,25,0.18)",
          }}
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {options.map((option, i) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setActiveIdx(i)}
              className="grid cursor-pointer rounded-lg transition-colors duration-150"
              style={{
                gridTemplateColumns: "28px 1fr auto",
                alignItems: "center",
                gap: 14,
                padding: "12px 14px",
                background:
                  option.value === value
                    ? "#DDE5E2"
                    : activeIdx === i
                    ? "#FBFAF7"
                    : "transparent",
                marginBottom: i < options.length - 1 ? 2 : 0,
              }}
              data-testid={`contact-select-option-${option.value}`}
            >
              <span
                className="font-mono text-[11px] tracking-[0.06em] text-center"
                style={{ color: option.value === value ? "#1F4A45" : "#6B6F75" }}
              >
                {option.token}
              </span>
              <span className="text-[15px] text-ink tracking-[-0.005em] leading-tight">
                {option.label}
              </span>
              <span className="font-mono text-[10.5px] text-muted tracking-[0.04em] lowercase whitespace-nowrap hidden sm:block">
                {option.hint}
              </span>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

// ─── Contact links ─────────────────────────────────────────────────────────

const contactLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+55 (14) 99630-5339",
    href: "https://wa.me/5514996305339",
    testId: "contact-link-whatsapp",
  },
  {
    id: "email",
    label: "E-mail",
    value: "contato@asimpta.com.br",
    href: "mailto:contato@asimpta.com.br",
    testId: "contact-link-email",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/asimpta",
    href: "https://github.com/asimpta",
    testId: "contact-link-github",
  },
];

// ─── Form ──────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-transparent border-b border-line py-3 text-base text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200";

const emptyForm: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  projectType: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const e: FormErrors = {};
  if (!form.name.trim()) e.name = "Nome é obrigatório.";
  if (!form.email.trim()) e.email = "E-mail é obrigatório.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = "E-mail inválido.";
  if (!form.projectType) e.projectType = "Selecione um tipo de projeto.";
  if (!form.message.trim()) e.message = "Mensagem é obrigatória.";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp || undefined,
          _subject: `Novo projeto: ${form.projectType}`,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contato"
      className="py-[110px]"
      style={{ borderTop: "1px solid #E4E1D9" }}
      data-testid="contact-section"
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
              07 / Contato
            </span>
            <h2
              className="font-serif text-ink mt-4"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
              data-testid="contact-title"
            >
              Conta o que
              <br />
              você <em className="italic text-accent">precisa</em>.
            </h2>
          </div>
          <p
            className="text-muted"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: "56ch" }}
            data-testid="contact-description"
          >
            Respondemos em até um dia útil com próximos passos honestos. Se o
            seu projeto não for fit para nós, dizemos isso também.
          </p>
        </div>

        <div
          className="grid contato-grid gap-20"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
            {/* Name */}
            <div className="mb-[22px]">
              <label
                htmlFor="contact-name"
                className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2"
              >
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
                data-testid="contact-input-name"
              />
              {errors.name && (
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "#B95C3F" }}
                  data-testid="contact-error-name"
                >
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email + WhatsApp */}
            <div
              className="grid email-whatsapp-grid gap-8 mb-[22px]"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="voce@empresa.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className={inputClass}
                  data-testid="contact-input-email"
                />
                {errors.email && (
                  <span
                    className="text-sm mt-1 block"
                    style={{ color: "#B95C3F" }}
                    data-testid="contact-error-email"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-whatsapp"
                  className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2"
                >
                  WhatsApp <span className="normal-case opacity-60">(opcional)</span>
                </label>
                <input
                  id="contact-whatsapp"
                  type="tel"
                  name="whatsapp"
                  placeholder="+55 (11) 99000-0000"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, whatsapp: e.target.value }))
                  }
                  className={inputClass}
                  data-testid="contact-input-whatsapp"
                />
              </div>
            </div>

            {/* Project type */}
            <div className="mb-[22px]">
              <label className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2">
                Tipo de projeto
              </label>
              <CustomSelect
                options={projectTypeOptions}
                value={form.projectType}
                onChange={(v) => setForm((f) => ({ ...f, projectType: v }))}
              />
              {errors.projectType && (
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "#B95C3F" }}
                  data-testid="contact-error-project-type"
                >
                  {errors.projectType}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="mb-[22px]">
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Conte um pouco sobre seu projeto, prazo e orçamento estimado."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className={`${inputClass} resize-y min-h-[96px]`}
                data-testid="contact-textarea-message"
              />
              {errors.message && (
                <span
                  className="text-sm mt-1 block"
                  style={{ color: "#B95C3F" }}
                  data-testid="contact-error-message"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 mt-3"
              data-testid="contact-button-submit"
            >
              {status === "loading" ? "Enviando…" : "Enviar mensagem →"}
            </button>

            {status === "success" && (
              <p
                className="text-[13px] mt-4"
                style={{ color: "#1F4A45" }}
                data-testid="contact-success-message"
              >
                Mensagem enviada — respondemos em até um dia útil.
              </p>
            )}
            {status === "error" && (
              <p
                className="text-[13px] mt-4"
                style={{ color: "#B95C3F" }}
                data-testid="contact-error-submit"
              >
                Algo deu errado. Tente novamente ou nos chame pelo WhatsApp.
              </p>
            )}
          </form>

          {/* Side */}
          <aside
            className="pl-[60px] contato-side"
            style={{ borderLeft: "1px solid #E4E1D9" }}
          >
            <h3 className="font-serif text-ink text-[28px] mb-6">
              Outros canais
            </h3>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-[18px] border-b border-line first:border-t transition-all duration-200 hover:pl-2 group"
                  data-testid={link.testId}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted">
                      {link.label}
                    </span>
                    <span className="text-base text-ink">{link.value}</span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div
              className="mt-7 flex items-center gap-3 p-[18px] rounded-[10px]"
              style={{ background: "#FBFAF7", border: "1px solid #E4E1D9" }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-none pulse-dot"
                style={{ background: "#4FA48F" }}
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-[13.5px] text-ink font-medium">
                  Disponível para novos projetos.
                </span>
                <span className="text-xs text-muted">
                  Respondemos em até 24h.
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
