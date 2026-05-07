import { render, screen, within } from "@testing-library/react";
import Deliverables from "@/components/Deliverables";
import { deliverables } from "@/data/site";

describe("Entregáveis", () => {
  it("renderiza todos os entregáveis configurados", () => {
    // Arrange
    render(<Deliverables />);

    // Act
    const grid = screen.getByTestId("deliverables-grid");
    const cards = deliverables.map((deliverable) =>
      screen.getByTestId(`deliverables-card-${deliverable.id}`)
    );

    // Assert
    expect(within(grid).getAllByRole("article")).toHaveLength(deliverables.length);
    expect(cards).toHaveLength(deliverables.length);
  });

  it("mantém cada card vinculado ao título e descrição do entregável", () => {
    // Arrange
    render(<Deliverables />);

    // Act & Assert
    deliverables.forEach((deliverable) => {
      const card = screen.getByTestId(`deliverables-card-${deliverable.id}`);

      expect(within(card).getByText(deliverable.title)).toBeInTheDocument();
      expect(within(card).getByText(deliverable.description)).toBeInTheDocument();
    });
  });
});
