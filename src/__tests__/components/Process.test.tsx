import { render, screen } from "@testing-library/react";
import Process from "@/components/Process";
import { processSteps } from "@/data/site";

describe("Processo", () => {
  it("renderiza todas as etapas configuradas em ordem", () => {
    // Arrange
    render(<Process />);

    // Act
    const renderedSteps = processSteps.map((step) =>
      screen.getByTestId(`process-step-${step.id}`)
    );

    // Assert
    expect(renderedSteps).toHaveLength(processSteps.length);
    renderedSteps.forEach((stepElement, index) => {
      expect(stepElement).toHaveTextContent(processSteps[index].number);
      expect(stepElement).toHaveTextContent(processSteps[index].title);
      expect(stepElement).toHaveTextContent(processSteps[index].description);
      expect(stepElement).toHaveTextContent(processSteps[index].duration);
    });
  });
});
