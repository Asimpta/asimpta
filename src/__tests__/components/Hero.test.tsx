import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import { tickerItems } from "@/data/site";

describe("Hero", () => {
  it("mantém os CTAs principais apontando para os fluxos corretos", () => {
    // Arrange
    render(<Hero />);

    // Act
    const startProjectLink = screen.getByTestId("hero-link-start-project");
    const viewServicesLink = screen.getByTestId("hero-link-view-services");

    // Assert
    expect(startProjectLink).toHaveAttribute("href", "#contato");
    expect(viewServicesLink).toHaveAttribute("href", "#servicos");
  });

  it("renderiza todas as ofertas do ticker a partir dos dados estáveis", () => {
    // Arrange
    render(<Hero />);

    // Act & Assert
    tickerItems.forEach((item) => {
      expect(screen.getAllByText(item)).toHaveLength(2);
    });
  });
});
