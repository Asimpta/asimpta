import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageHeader from "@/components/PageHeader";

const desktopLinks = [
  ["header-link-home", "/"],
  ["header-link-services", "/#servicos"],
  ["header-link-process", "/#processo"],
  ["header-link-about", "/#sobre"],
  ["header-link-contact", "/#contato"],
] as const;

const mobileLinks = [
  ["mobile-menu-link-home", "/"],
  ["mobile-menu-link-services", "/#servicos"],
  ["mobile-menu-link-process", "/#processo"],
  ["mobile-menu-link-about", "/#sobre"],
  ["mobile-menu-link-contact", "/#contato"],
] as const;

describe("Cabeçalho de páginas internas (PageHeader)", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
  });

  it("renderiza o logo e os CTAs apontando para a raiz e para contato", () => {
    // Arrange
    render(<PageHeader />);

    // Act + Assert
    expect(screen.getByTestId("header-logo-link")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("header-button-contact")).toHaveAttribute("href", "/#contato");
    expect(screen.getByTestId("header-button-start-project")).toHaveAttribute("href", "/#contato");
  });

  it("renderiza os links do menu desktop com caminhos absolutos para a homepage", () => {
    // Arrange
    render(<PageHeader />);

    // Assert
    desktopLinks.forEach(([testId, href]) => {
      expect(screen.getByTestId(testId)).toHaveAttribute("href", href);
    });
  });

  it("abre e fecha o menu mobile pelo botão de alternância", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<PageHeader />);

    // Act — abre
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    // Assert
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fechar menu" })).toBeInTheDocument();

    // Act — fecha
    await user.click(screen.getByRole("button", { name: "Fechar menu" }));

    // Assert
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
  });

  it("exibe os links do menu mobile com caminhos absolutos para a homepage", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<PageHeader />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    // Assert
    mobileLinks.forEach(([testId, href]) => {
      expect(screen.getByTestId(testId)).toHaveAttribute("href", href);
    });
  });

  it("fecha o menu mobile ao clicar em um link de navegação", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<PageHeader />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByTestId("mobile-menu-link-services"));

    // Assert
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
  });

  it("mantém os test ids da navegação desktop e mobile únicos quando o menu está aberto", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<PageHeader />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    // Assert
    expect(screen.getAllByTestId("header-link-services")).toHaveLength(1);
    expect(screen.getAllByTestId("mobile-menu-link-services")).toHaveLength(1);
  });
});
