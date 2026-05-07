import { render, screen, within } from "@testing-library/react";
import Services from "@/components/Services";
import { services } from "@/data/site";

describe("Serviços", () => {
  it("renderiza um card para cada serviço configurado", () => {
    // Arrange
    render(<Services />);

    // Act
    const grid = screen.getByTestId("services-grid");
    const cards = services.map((service) =>
      screen.getByTestId(`services-card-${service.id}`)
    );

    // Assert
    expect(screen.getByRole("heading", { name: /o que fazemos/i })).toBeInTheDocument();
    expect(within(grid).getAllByRole("article")).toHaveLength(services.length);
    expect(cards).toHaveLength(8);
  });

  it("vincula cada card renderizado aos dados estáveis do serviço", () => {
    // Arrange
    render(<Services />);

    // Act & Assert
    services.forEach((service) => {
      const card = screen.getByTestId(`services-card-${service.id}`);

      expect(within(card).getByTestId(`services-card-title-${service.id}`)).toHaveTextContent(
        service.title
      );
      expect(
        within(card).getByTestId(`services-card-description-${service.id}`)
      ).toHaveTextContent(service.description);
    });
  });

  it("mantém os ids dos serviços únicos para keys e seletores de teste", () => {
    // Arrange
    const ids = services.map((service) => service.id);

    // Act
    const uniqueIds = new Set(ids);

    // Assert
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("não apresenta métricas falsas de performance como prova", () => {
    // Arrange
    render(<Services />);

    // Act
    const renderedText = screen.getByTestId("services-section").textContent;

    // Assert
    expect(renderedText).not.toMatch(/40\+|98%|500k/i);
  });
});
