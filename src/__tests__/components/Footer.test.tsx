import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Rodapé", () => {
  it("mantém os links internos principais apontando para as seções da página", () => {
    // Arrange
    render(<Footer />);

    // Act
    const internalLinks = [
      ["footer-link-services", "#servicos"],
      ["footer-link-process", "#processo"],
      ["footer-link-solutions", "#projetos"],
      ["footer-link-about", "#sobre"],
      ["footer-link-contact", "#contato"],
    ] as const;

    // Assert
    internalLinks.forEach(([testId, href]) => {
      expect(screen.getByTestId(testId)).toHaveAttribute("href", href);
    });
  });

  it("mantém os canais externos de contato com formatos válidos", () => {
    // Arrange
    render(<Footer />);

    // Act
    const externalLinks = [
      ["footer-link-email", /^mailto:.+@.+\..+$/],
      ["footer-link-whatsapp", /^https:\/\/wa\.me\/\d+$/],
      ["footer-link-instagram", /^https:\/\/.+/],
      ["footer-link-github", /^https:\/\/.+/],
    ] as const;

    // Assert
    externalLinks.forEach(([testId, hrefPattern]) => {
      expect(screen.getByTestId(testId).getAttribute("href")).toMatch(hrefPattern);
    });
  });

  it("mantém os links legais apontando para as páginas institucionais corretas", () => {
    // Arrange
    render(<Footer />);

    // Assert
    expect(screen.getByTestId("footer-link-privacy")).toHaveAttribute(
      "href",
      "/politica-de-privacidade"
    );
    expect(screen.getByTestId("footer-link-terms")).toHaveAttribute(
      "href",
      "/termos-de-uso"
    );
  });
});
