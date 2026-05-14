"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início", testId: "header-link-home", mobileTestId: "mobile-menu-link-home" },
  { href: "/#servicos", label: "Serviços", testId: "header-link-services", mobileTestId: "mobile-menu-link-services" },
  { href: "/#processo", label: "Processo", testId: "header-link-process", mobileTestId: "mobile-menu-link-process" },
  { href: "/#sobre", label: "Sobre", testId: "header-link-about", mobileTestId: "mobile-menu-link-about" },
  { href: "/#contato", label: "Contato", testId: "header-link-contact", mobileTestId: "mobile-menu-link-contact" },
];

export default function PageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-testid="header-section"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-line/70" : "border-b border-transparent"
        }`}
        style={{
          background: scrolled
            ? "rgba(246,244,239,0.88)"
            : "rgba(246,244,239,0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
          <div className="flex items-center justify-between h-[68px]">
            <a
              href="/"
              className="font-serif text-2xl tracking-tight text-ink flex items-baseline gap-1.5"
              aria-label="Asimpta — Estúdio digital"
              data-testid="header-logo-link"
            >
              Asimpta
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
                style={{ transform: "translateY(-2px)" }}
                aria-hidden="true"
              />
            </a>

            <nav
              className="hidden md:flex gap-1 items-center"
              aria-label="Principal"
              data-testid="header-nav-desktop"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="text-sm text-ink-2 px-3.5 py-2 rounded-full transition-all duration-200 hover:bg-ink/5 hover:text-ink"
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/#contato"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-ink border border-line transition-all duration-200 hover:bg-paper hover:border-[#C9C5BB]"
                data-testid="header-button-contact"
              >
                Fale conosco
              </a>
              <a
                href="/#contato"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink transition-all duration-200 hover:bg-accent"
                data-testid="header-button-start-project"
              >
                Começar projeto →
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                data-testid={menuOpen ? "mobile-menu-button-close" : "mobile-menu-button-open"}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 top-[68px] bg-bg z-40 flex flex-col px-6 pt-8 gap-1 border-t border-line md:hidden"
          data-testid="mobile-menu-panel"
        >
          <nav data-testid="header-nav-mobile" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-ink block py-4 border-b border-line hover:text-accent transition-colors"
                data-testid={link.mobileTestId}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-6 self-start inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent transition-colors"
            data-testid="mobile-menu-button-start-project"
          >
            Começar projeto →
          </a>
        </div>
      )}
    </>
  );
}
