import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
  });

  it("renderiza o header com data-testid correto", () => {
    render(<Header />);
    expect(screen.getByTestId("header-section")).toBeInTheDocument();
  });

  it("renderiza o logo com link e data-testid", () => {
    render(<Header />);
    const logo = screen.getByTestId("header-logo-link");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent("Asimpta");
  });

  it("renderiza todos os links de navegação desktop", () => {
    render(<Header />);
    expect(screen.getByTestId("header-link-home")).toHaveTextContent("Início");
    expect(screen.getByTestId("header-link-services")).toHaveTextContent("Serviços");
    expect(screen.getByTestId("header-link-process")).toHaveTextContent("Processo");
    expect(screen.getByTestId("header-link-about")).toHaveTextContent("Sobre");
    expect(screen.getByTestId("header-link-contact")).toHaveTextContent("Contato");
  });

  it("renderiza botões de CTA", () => {
    render(<Header />);
    expect(screen.getByTestId("header-button-contact")).toBeInTheDocument();
    expect(screen.getByTestId("header-button-start-project")).toBeInTheDocument();
  });

  it("abre o menu mobile ao clicar no botão de toggle", () => {
    render(<Header />);
    const toggleBtn = screen.getByTestId("mobile-menu-button-open");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument();
  });

  it("fecha o menu mobile ao clicar novamente no toggle", () => {
    render(<Header />);
    const toggleBtn = screen.getByTestId("mobile-menu-button-open");

    fireEvent.click(toggleBtn); // abre
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument();

    const closeBtn = screen.getByTestId("mobile-menu-button-close");
    fireEvent.click(closeBtn); // fecha
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
  });

  it("fecha o menu mobile ao clicar em um link de navegação", () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId("mobile-menu-button-open"));
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument();

    // Clica num link do menu mobile
    const mobileLinks = screen.getByTestId("header-nav-mobile");
    fireEvent.click(mobileLinks.querySelector("a")!);
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument();
  });

  it("adiciona border ao header quando scrolled", async () => {
    render(<Header />);
    const header = screen.getByTestId("header-section");

    // Simula scroll
    await act(async () => {
      Object.defineProperty(window, "scrollY", { writable: true, value: 100 });
      fireEvent.scroll(window);
    });

    // Com scrollY > 12, o header deve ter a classe border-b border-line
    expect(header.className).toMatch(/border-b/);
  });
});
