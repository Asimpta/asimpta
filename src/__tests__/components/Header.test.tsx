import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/Header";
import {
  makeHeaderDesktopLinks,
  makeScrollTarget,
} from "@/__tests__/factories/header.factory";

describe("Cabeçalho", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
    jest.clearAllMocks();
  });

  it("renderiza o contrato de navegação desktop", () => {
    // Arrange
    const desktopLinks = makeHeaderDesktopLinks();
    render(<Header />);

    // Act
    const logo = screen.getByTestId("header-logo-link");
    const contactCta = screen.getByTestId("header-button-contact");
    const startProjectCta = screen.getByTestId("header-button-start-project");

    // Assert
    expect(logo).toHaveTextContent("Asimpta");
    expect(logo).toHaveAttribute("href", "#top");
    expect(contactCta).toHaveAttribute("href", "#contato");
    expect(startProjectCta).toHaveAttribute("href", "#contato");

    desktopLinks.forEach(([testId, label, href]) => {
      const link = screen.getByTestId(testId);

      expect(link).toHaveTextContent(label);
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("abre e fecha o menu mobile pelo botão de alternância", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Header />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    // Assert
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fechar menu" })).toBeInTheDocument();

    // Act
    await user.click(screen.getByRole("button", { name: "Fechar menu" }));

    // Assert
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
  });

  it("fecha o menu mobile e rola até o destino selecionado", async () => {
    // Arrange
    const user = userEvent.setup();
    Object.defineProperty(window, "scrollY", { writable: true, value: 20 });
    makeScrollTarget("#servicos", 300);
    render(<Header />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByTestId("mobile-menu-link-services"));

    // Assert
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 248,
      behavior: "smooth",
    });
  });

  it("rola até o topo ao clicar no logo", async () => {
    // Arrange
    const user = userEvent.setup();
    Object.defineProperty(window, "scrollY", { writable: true, value: 200 });
    makeScrollTarget("#top", 0);
    render(<Header />);

    // Act
    await user.click(screen.getByTestId("header-logo-link"));

    // Assert
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 128,
      behavior: "smooth",
    });
  });

  it("rola até a seção selecionada pelo menu desktop", async () => {
    // Arrange
    const user = userEvent.setup();
    Object.defineProperty(window, "scrollY", { writable: true, value: 20 });
    makeScrollTarget("#processo", 420);
    render(<Header />);

    // Act
    await user.click(screen.getByTestId("header-link-process"));

    // Assert
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 368,
      behavior: "smooth",
    });
  });

  it("não tenta rolar quando a seção de destino não existe", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Header />);

    // Act
    await user.click(screen.getByTestId("header-link-about"));

    // Assert
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("rola até contato ao clicar nos CTAs desktop", async () => {
    // Arrange
    const user = userEvent.setup();
    Object.defineProperty(window, "scrollY", { writable: true, value: 10 });
    makeScrollTarget("#contato", 500);
    render(<Header />);

    // Act
    await user.click(screen.getByTestId("header-button-contact"));
    await user.click(screen.getByTestId("header-button-start-project"));

    // Assert
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, {
      top: 438,
      behavior: "smooth",
    });
    expect(window.scrollTo).toHaveBeenNthCalledWith(2, {
      top: 438,
      behavior: "smooth",
    });
  });

  it("fecha o menu mobile e rola até contato pelo CTA mobile", async () => {
    // Arrange
    const user = userEvent.setup();
    Object.defineProperty(window, "scrollY", { writable: true, value: 10 });
    makeScrollTarget("#contato", 500);
    render(<Header />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByTestId("mobile-menu-button-start-project"));

    // Assert
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 438,
      behavior: "smooth",
    });
  });

  it("mantém os test ids da navegação desktop e mobile únicos com o menu aberto", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Header />);

    // Act
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    // Assert
    expect(screen.getAllByTestId("header-link-services")).toHaveLength(1);
    expect(screen.getAllByTestId("mobile-menu-link-services")).toHaveLength(1);
  });

  it("adiciona estado visual de borda depois do scroll da janela", () => {
    // Arrange
    render(<Header />);
    const header = screen.getByTestId("header-section");

    // Act
    Object.defineProperty(window, "scrollY", { writable: true, value: 100 });
    fireEvent.scroll(window);

    // Assert
    expect(header).toHaveClass("border-b");
    expect(header.className).toContain("border-line");
  });
});
