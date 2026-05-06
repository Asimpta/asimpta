import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "@/components/Services";
import { services } from "@/data/site";

describe("Services", () => {
  it("renderiza a seção com data-testid correto", () => {
    render(<Services />);
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
  });

  it("renderiza o título da seção", () => {
    render(<Services />);
    expect(screen.getByTestId("services-title")).toBeInTheDocument();
  });

  it("renderiza o grid de serviços", () => {
    render(<Services />);
    expect(screen.getByTestId("services-grid")).toBeInTheDocument();
  });

  it("renderiza exatamente 8 cards de serviço", () => {
    render(<Services />);
    expect(services).toHaveLength(8);
    services.forEach((svc) => {
      expect(screen.getByTestId(`services-card-${svc.id}`)).toBeInTheDocument();
    });
  });

  it("cada card exibe título e descrição com data-testid corretos", () => {
    render(<Services />);
    services.forEach((svc) => {
      const title = screen.getByTestId(`services-card-title-${svc.id}`);
      const desc = screen.getByTestId(`services-card-description-${svc.id}`);
      expect(title).toHaveTextContent(svc.title);
      expect(desc).toHaveTextContent(svc.description);
    });
  });

  it("nenhum card contém dados estatísticos mockados", () => {
    render(<Services />);
    // Garante que não há números falsos de projetos no componente
    expect(screen.queryByText(/40\+/)).not.toBeInTheDocument();
    expect(screen.queryByText(/98%/)).not.toBeInTheDocument();
  });

  it("os IDs dos serviços são estáveis e únicos", () => {
    const ids = services.map((s) => s.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});
