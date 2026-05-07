import { render, screen, within } from "@testing-library/react";
import About from "@/components/About";

describe("Sobre", () => {
  it("mantém a stack principal exigida pelo projeto visível na seção", () => {
    // Arrange
    const requiredStack = [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ];
    render(<About />);

    // Act
    const stack = screen.getByTestId("about-stack");

    // Assert
    requiredStack.forEach((tech) => {
      expect(within(stack).getByText(tech)).toBeInTheDocument();
    });
  });

  it("comunica o modelo de trabalho enxuto e de entrega completa", () => {
    // Arrange
    render(<About />);

    // Act
    const principles = screen.getByTestId("about-principles");

    // Assert
    expect(principles).toHaveTextContent(/poucos projetos por vez/i);
    expect(principles).toHaveTextContent(/comunicação direta/i);
    expect(principles).toHaveTextContent(/da estratégia ao deploy/i);
  });
});
