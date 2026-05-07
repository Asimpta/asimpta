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

  it("mantém a comunicação honesta de cases em breve", () => {
    // Arrange
    render(<Solutions />);

    // Act
    const futureCasesMessage = screen.getByTestId("solutions-future-cases-message");
    const reserveSlotLink = screen.getByTestId("solutions-link-reserve-slot");

    // Assert
    expect(futureCasesMessage).toHaveTextContent(
      /estamos construindo nossos primeiros cases/i
    );
    expect(futureCasesMessage).toHaveTextContent(/projetos reais da asimpta/i);
    expect(reserveSlotLink).toHaveAttribute("href", "#contato");
  });
});
