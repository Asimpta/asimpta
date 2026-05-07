import { render, screen, within } from "@testing-library/react";
import Differentials from "@/components/Differentials";
import { differentials } from "@/data/site";

describe("Diferenciais", () => {
  it("renderiza todos os diferenciais configurados", () => {
    // Arrange
    render(<Differentials />);

    // Act
    const grid = screen.getByTestId("differentials-grid");
    const cards = differentials.map((differential) =>
      screen.getByTestId(`differentials-card-${differential.id}`)
    );

    // Assert
    expect(within(grid).getAllByRole("article")).toHaveLength(differentials.length);
    expect(cards).toHaveLength(differentials.length);
  });

  it("mantém cada card vinculado ao diferencial correto", () => {
    // Arrange
    render(<Differentials />);

    // Act & Assert
    differentials.forEach((differential) => {
      const card = screen.getByTestId(`differentials-card-${differential.id}`);

      expect(within(card).getByText(differential.mark)).toBeInTheDocument();
      expect(within(card).getByText(differential.title)).toBeInTheDocument();
      expect(within(card).getByText(differential.description)).toBeInTheDocument();
    });
  });
});
