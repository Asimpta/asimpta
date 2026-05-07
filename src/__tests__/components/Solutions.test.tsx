import { render, screen, within } from "@testing-library/react";
import Solutions from "@/components/Solutions";
import { solutions } from "@/data/site";

describe("Soluções", () => {
  it("renderiza um card para cada solução configurada", () => {
    // Arrange
    render(<Solutions />);

    // Act
    const grid = screen.getByTestId("solutions-grid");
    const cards = solutions.map((solution) =>
      screen.getByTestId(`solutions-card-${solution.id}`)
    );

    // Assert
    expect(within(grid).getAllByRole("article")).toHaveLength(solutions.length);
    expect(cards).toHaveLength(solutions.length);
  });

  it("vincula cada card aos dados estáveis da solução", () => {
    // Arrange
    render(<Solutions />);

    // Act & Assert
    solutions.forEach((solution) => {
      const card = screen.getByTestId(`solutions-card-${solution.id}`);

      expect(within(card).getByText(solution.title)).toBeInTheDocument();
      expect(within(card).getByText(solution.description)).toBeInTheDocument();
      solution.tags.forEach((tag) => {
        expect(within(card).getByText(tag)).toBeInTheDocument();
      });
    });
  });

  it("mantém o estado de cases futuros identificado sem fixar texto comercial", () => {
    // Arrange
    render(<Solutions />);

    // Act
    const futureCasesMessage = screen.getByTestId("solutions-future-cases-message");
    const emptyState = screen.getByTestId("solutions-empty-state");
    const reserveSlotLink = screen.getByTestId("solutions-link-reserve-slot");

    // Assert
    expect(futureCasesMessage).toContainElement(emptyState);
    expect(reserveSlotLink).toHaveAttribute("href", "#contato");
  });
});
