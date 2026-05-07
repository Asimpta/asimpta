import { render, screen } from "@testing-library/react";
import CTA from "@/components/CTA";

describe("CTA final", () => {
  it("direciona o usuário para contato e soluções sem sair da página", () => {
    // Arrange
    render(<CTA />);

    // Act
    const contactLink = screen.getByTestId("cta-link-contact");
    const solutionsLink = screen.getByTestId("cta-link-solutions");

    // Assert
    expect(contactLink).toHaveAttribute("href", "#contato");
    expect(solutionsLink).toHaveAttribute("href", "#projetos");
  });
});
