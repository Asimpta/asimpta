export default function Footer() {
  const navLinks = [
    { href: "#servicos", label: "Serviços", testId: "footer-link-services" },
    { href: "#processo", label: "Processo", testId: "footer-link-process" },
    { href: "#projetos", label: "O que desenvolvemos", testId: "footer-link-solutions" },
    { href: "#sobre", label: "Sobre", testId: "footer-link-about" },
    { href: "#contato", label: "Contato", testId: "footer-link-contact" },
  ];

  const serviceLinks = [
    { href: "#servicos", label: "Sites institucionais" },
    { href: "#servicos", label: "Landing pages" },
    { href: "#servicos", label: "SaaS & Sistemas" },
    { href: "#servicos", label: "Dashboards" },
    { href: "#servicos", label: "Automações" },
  ];

  const connectLinks = [
    { href: "mailto:contato@asimpta.com.br", label: "contato@asimpta.com.br", testId: "footer-link-email" },
    { href: "https://wa.me/5514996305339", label: "WhatsApp", testId: "footer-link-whatsapp" },
    { href: "https://instagram.com/asimptabr", label: "Instagram", testId: "footer-link-instagram" },
    { href: "https://github.com/asimpta", label: "GitHub", testId: "footer-link-github" },
  ];

  return (
    <footer
      className="pt-20 pb-8"
      style={{ background: "#15171A", color: "#B7BBC1" }}
      data-testid="footer-section"
    >
      <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
        <div
          className="grid foot-grid-inner gap-10 pb-[60px]"
          style={{
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="font-serif flex items-baseline gap-1.5"
              style={{ color: "#F4F2EC", fontSize: 28 }}
              aria-label="Asimpta"
              data-testid="footer-logo"
            >
              Asimpta
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
                style={{ transform: "translateY(-2px)" }}
                aria-hidden="true"
              />
            </a>
            <p
              className="mt-[18px] leading-[1.55] max-w-[38ch]"
              style={{ fontSize: 13.5, color: "#9CA1A8" }}
              data-testid="footer-description"
            >
              Estúdio digital que transforma ideias em produtos digitais bem
              construídos. Estratégia, design e engenharia em um único time.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="font-mono text-[11px] tracking-[0.08em] uppercase mb-5 font-medium"
              style={{ color: "#9CA1A8" }}
            >
              Navegar
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#88B5AE]"
                    style={{ color: "#DCDDE1" }}
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-mono text-[11px] tracking-[0.08em] uppercase mb-5 font-medium"
              style={{ color: "#9CA1A8" }}
            >
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#88B5AE]"
                    style={{ color: "#DCDDE1" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="font-mono text-[11px] tracking-[0.08em] uppercase mb-5 font-medium"
              style={{ color: "#9CA1A8" }}
            >
              Conectar
            </h4>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 hover:text-[#88B5AE]"
                    style={{ color: "#DCDDE1" }}
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex justify-between items-center gap-4 flex-wrap"
          style={{ fontSize: 12.5, color: "#767A81" }}
        >
          <span data-testid="footer-copyright">
            © 2026 Asimpta · Estúdio digital · São Paulo, BR
          </span>
          <div className="flex gap-[18px] flex-wrap">
            <a
              href="/politica-de-privacidade"
              className="hover:text-[#88B5AE] transition-colors"
              data-testid="footer-link-privacy"
            >
              Política de privacidade
            </a>
            <a
              href="/termos-de-uso"
              className="hover:text-[#88B5AE] transition-colors"
              data-testid="footer-link-terms"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
