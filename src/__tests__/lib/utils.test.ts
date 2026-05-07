import { cn, fadeIn, fadeInUp, staggerContainer } from "@/lib/utils";

describe("Utilitários", () => {
  it("combina classes válidas e ignora valores vazios", () => {
    // Arrange
    const classes = ["btn", undefined, "btn-primary", null, false, "active"] as const;

    // Act
    const result = cn(...classes);

    // Assert
    expect(result).toBe("btn btn-primary active");
  });

  it("mantém os contratos de animação reutilizados pelos componentes", () => {
    // Arrange
    const expectedFadeInUpHidden = { opacity: 0, y: 16 };
    const expectedFadeInHidden = { opacity: 0 };

    // Act
    const staggerChildren = staggerContainer.visible.transition.staggerChildren;

    // Assert
    expect(fadeInUp.hidden).toEqual(expectedFadeInUpHidden);
    expect(fadeIn.hidden).toEqual(expectedFadeInHidden);
    expect(staggerChildren).toBe(0.08);
  });
});
