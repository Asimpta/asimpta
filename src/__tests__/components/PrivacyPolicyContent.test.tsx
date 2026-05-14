import { render, screen } from "@testing-library/react";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

const CONTENT_SECTIONS = [
  "privacy-section-informacoes-coletadas",
  "privacy-section-uso-das-informacoes",
  "privacy-section-compartilhamento",
  "privacy-section-cookies",
  "privacy-section-seguranca",
  "privacy-section-direitos",
  "privacy-section-contato",
] as const;

const TOC_LINKS = [
  ["privacy-toc-link-informacoes-coletadas", "#informacoes-coletadas"],
  ["privacy-toc-link-uso-das-informacoes", "#uso-das-informacoes"],
  ["privacy-toc-link-compartilhamento", "#compartilhamento"],
  ["privacy-toc-link-cookies", "#cookies"],
  ["privacy-toc-link-seguranca", "#seguranca"],
  ["privacy-toc-link-direitos", "#direitos"],
  ["privacy-toc-link-contato-privacidade", "#contato-privacidade"],
] as const;

describe("Página de Política de Privacidade", () => {
  beforeEach(() => {
    render(<PrivacyPolicyContent />);
  });

  it("renderiza o hero com título, subtítulo, introdução e data de atualização", () => {
    // Assert
    expect(screen.getByTestId("privacy-hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("privacy-hero-title")).toBeInTheDocument();
    expect(screen.getByTestId("privacy-hero-subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("privacy-intro")).toBeInTheDocument();
    expect(screen.getByTestId("privacy-last-updated")).toBeInTheDocument();
  });

  it("renderiza o breadcrumb com link para a homepage e indicador de página atual", () => {
    // Act
    const homeLink = screen.getByTestId("privacy-breadcrumb-home");
    const current = screen.getByTestId("privacy-breadcrumb-current");

    // Assert
    expect(homeLink).toHaveAttribute("href", "/");
    expect(current).toHaveAttribute("aria-current", "page");
  });

  it("renderiza todas as 7 seções de conteúdo exigidas", () => {
    // Assert
    CONTENT_SECTIONS.forEach((testId) => {
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });

  it("o sumário lateral contém links para todas as seções com âncoras corretas", () => {
    // Assert
    TOC_LINKS.forEach(([testId, href]) => {
      expect(screen.getByTestId(testId)).toHaveAttribute("href", href);
    });
  });

  it("o link de e-mail de contato da LGPD segue o formato mailto válido", () => {
    // Act
    const emailLink = screen.getByTestId("privacy-contact-email");

    // Assert
    expect(emailLink.getAttribute("href")).toMatch(/^mailto:.+@.+\..+$/);
  });

  it("o CTA final direciona o usuário para a seção de contato", () => {
    // Act
    const ctaLink = screen.getByTestId("privacy-cta-link");

    // Assert
    expect(ctaLink).toHaveAttribute("href", "/#contato");
    expect(screen.getByTestId("privacy-cta-title")).toBeInTheDocument();
    expect(screen.getByTestId("privacy-cta-description")).toBeInTheDocument();
  });
});
