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

  it("mantém os canais externos de contato configurados", () => {
    // Arrange
    render(<Footer />);

    // Act
    const externalLinks = [
      ["footer-link-email", "mailto:contato@asimpta.com.br"],
      ["footer-link-whatsapp", "https://wa.me/5511990000000"],
      ["footer-link-instagram", "https://instagram.com/asimptasoftware"],
      ["footer-link-github", "https://github.com/asimpta"],
    ] as const;

    // Assert
    externalLinks.forEach(([testId, href]) => {
      expect(screen.getByTestId(testId)).toHaveAttribute("href", href);
    });
  });
});
