import { render, screen } from "@testing-library/react";
import TermsContent from "@/components/TermsContent";

const CONTENT_SECTIONS = [
  "terms-section-aceitacao",
  "terms-section-sobre-asimpta",
  "terms-section-responsabilidades",
  "terms-section-propriedade-intelectual",
  "terms-section-limitacao",
  "terms-section-suspensao",
  "terms-section-alteracoes",
  "terms-section-legislacao",
] as const;

const TOC_LINKS = [
  ["terms-toc-link-aceitacao", "#aceitacao"],
  ["terms-toc-link-sobre-asimpta", "#sobre-asimpta"],
  ["terms-toc-link-responsabilidades", "#responsabilidades"],
  ["terms-toc-link-propriedade-intelectual", "#propriedade-intelectual"],
  ["terms-toc-link-limitacao", "#limitacao"],
  ["terms-toc-link-suspensao", "#suspensao"],
  ["terms-toc-link-alteracoes", "#alteracoes"],
  ["terms-toc-link-legislacao", "#legislacao"],
] as const;

describe("Página de Termos de Uso", () => {
  beforeEach(() => {
    render(<TermsContent />);
  });

  it("renderiza o hero com título, subtítulo, introdução e data de atualização", () => {
    // Assert
    expect(screen.getByTestId("terms-hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("terms-hero-title")).toBeInTheDocument();
    expect(screen.getByTestId("terms-hero-subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("terms-intro")).toBeInTheDocument();
    expect(screen.getByTestId("terms-last-updated")).toBeInTheDocument();
  });

  it("renderiza o breadcrumb com link para a homepage e indicador de página atual", () => {
    // Act
    const homeLink = screen.getByTestId("terms-breadcrumb-home");
    const current = screen.getByTestId("terms-breadcrumb-current");

    // Assert
    expect(homeLink).toHaveAttribute("href", "/");
    expect(current).toHaveAttribute("aria-current", "page");
  });

  it("renderiza todas as 8 seções de conteúdo exigidas", () => {
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

  it("o CTA final direciona o usuário para a seção de contato", () => {
    // Act
    const ctaLink = screen.getByTestId("terms-cta-link");

    // Assert
    expect(ctaLink).toHaveAttribute("href", "/#contato");
    expect(screen.getByTestId("terms-cta-title")).toBeInTheDocument();
    expect(screen.getByTestId("terms-cta-description")).toBeInTheDocument();
  });
});
