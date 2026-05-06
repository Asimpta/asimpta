import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";

// Helper para preencher o formulário completo
async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByTestId("contact-input-name"), "João Silva");
  await user.type(screen.getByTestId("contact-input-email"), "joao@empresa.com");
  await user.type(screen.getByTestId("contact-textarea-message"), "Quero um site institucional.");

  // Seleciona tipo de projeto via dropdown customizado
  fireEvent.click(screen.getByTestId("contact-select-trigger-project-type"));
  fireEvent.click(screen.getByTestId("contact-select-option-site-institucional"));
}

describe("Contact — renderização", () => {
  it("renderiza a seção com data-testid correto", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-section")).toBeInTheDocument();
  });

  it("renderiza o formulário", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("renderiza todos os campos obrigatórios", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-input-name")).toBeInTheDocument();
    expect(screen.getByTestId("contact-input-email")).toBeInTheDocument();
    expect(screen.getByTestId("contact-input-whatsapp")).toBeInTheDocument();
    expect(screen.getByTestId("contact-select-project-type")).toBeInTheDocument();
    expect(screen.getByTestId("contact-textarea-message")).toBeInTheDocument();
    expect(screen.getByTestId("contact-button-submit")).toBeInTheDocument();
  });

  it("renderiza os links de contato laterais", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-link-whatsapp")).toBeInTheDocument();
    expect(screen.getByTestId("contact-link-email")).toBeInTheDocument();
    expect(screen.getByTestId("contact-link-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("contact-link-github")).toBeInTheDocument();
  });

  it("não exibe mensagem de sucesso ou erro inicialmente", () => {
    render(<Contact />);
    expect(screen.queryByTestId("contact-success-message")).not.toBeInTheDocument();
    expect(screen.queryByTestId("contact-error-submit")).not.toBeInTheDocument();
  });
});

describe("Contact — validação do formulário", () => {
  it("exibe erros ao tentar enviar formulário vazio", async () => {
    render(<Contact />);
    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(await screen.findByTestId("contact-error-name")).toHaveTextContent(
      "Nome é obrigatório."
    );
    expect(screen.getByTestId("contact-error-email")).toHaveTextContent(
      "E-mail é obrigatório."
    );
    expect(screen.getByTestId("contact-error-project-type")).toHaveTextContent(
      "Selecione um tipo de projeto."
    );
    expect(screen.getByTestId("contact-error-message")).toHaveTextContent(
      "Mensagem é obrigatória."
    );
  });

  it("exibe erro de e-mail inválido", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByTestId("contact-input-email"), "email-invalido");
    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(await screen.findByTestId("contact-error-email")).toHaveTextContent(
      "E-mail inválido."
    );
  });

  it("não exibe erros com formulário válido antes do envio", async () => {
    const user = userEvent.setup();
    vi.spyOn(global, "fetch").mockResolvedValue(new Response(null, { status: 200 }));

    render(<Contact />);
    await fillForm(user);
    fireEvent.click(screen.getByTestId("contact-button-submit"));

    await waitFor(() => {
      expect(screen.queryByTestId("contact-error-name")).not.toBeInTheDocument();
      expect(screen.queryByTestId("contact-error-email")).not.toBeInTheDocument();
    });

    vi.restoreAllMocks();
  });
});

describe("Contact — dropdown customizado", () => {
  it("abre o dropdown ao clicar no trigger", () => {
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("fecha o dropdown ao selecionar uma opção", () => {
    render(<Contact />);
    fireEvent.click(screen.getByTestId("contact-select-trigger-project-type"));
    fireEvent.click(screen.getByTestId("contact-select-option-landing-page"));
    expect(
      screen.getByTestId("contact-select-trigger-project-type")
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("exibe o label da opção selecionada no trigger", () => {
    render(<Contact />);
    fireEvent.click(screen.getByTestId("contact-select-trigger-project-type"));
    fireEvent.click(screen.getByTestId("contact-select-option-plataforma-saas"));
    expect(screen.getByTestId("contact-select-trigger-project-type")).toHaveTextContent(
      "Plataforma SaaS"
    );
  });

  it("fecha o dropdown ao pressionar Escape", () => {
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("navega pelas opções com ArrowDown e seleciona com Enter", () => {
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    fireEvent.keyDown(trigger, { key: "ArrowDown" }); // abre
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(trigger, { key: "ArrowDown" }); // move para índice 1
    fireEvent.keyDown(trigger, { key: "Enter" }); // seleciona
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    // Verifica que algum label foi selecionado (não é mais o placeholder)
    expect(trigger).not.toHaveTextContent("Selecione uma opção");
  });
});

describe("Contact — integração Formspree", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("chama fetch com o endpoint do Formspree ao enviar", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledOnce();
    });

    const [url, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(typeof url).toBe("string");
    expect(options.method).toBe("POST");
    expect(options.headers["Content-Type"]).toBe("application/json");
  });

  it("envia os dados corretos do formulário", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const body = JSON.parse(
      (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body
    );
    expect(body.name).toBe("João Silva");
    expect(body.email).toBe("joao@empresa.com");
    expect(body.message).toBe("Quero um site institucional.");
  });

  it("exibe mensagem de sucesso após envio bem-sucedido", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(
      await screen.findByTestId("contact-success-message")
    ).toBeInTheDocument();
  });

  it("limpa o formulário após envio bem-sucedido", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    await waitFor(() => {
      expect(screen.getByTestId("contact-input-name")).toHaveValue("");
      expect(screen.getByTestId("contact-input-email")).toHaveValue("");
      expect(screen.getByTestId("contact-textarea-message")).toHaveValue("");
    });
  });

  it("exibe mensagem de erro quando o Formspree retorna falha", async () => {
    vi.restoreAllMocks();
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(null, { status: 422 })
    );

    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(await screen.findByTestId("contact-error-submit")).toBeInTheDocument();
  });

  it("exibe mensagem de erro quando a rede falha", async () => {
    vi.restoreAllMocks();
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));

    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(await screen.findByTestId("contact-error-submit")).toBeInTheDocument();
  });

  it("desabilita o botão de envio durante o carregamento", async () => {
    vi.restoreAllMocks();
    // Fetch que demora para resolver
    vi.spyOn(global, "fetch").mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve(new Response(null, { status: 200 })), 200))
    );

    const user = userEvent.setup();
    render(<Contact />);
    await fillForm(user);

    fireEvent.click(screen.getByTestId("contact-button-submit"));

    expect(screen.getByTestId("contact-button-submit")).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByTestId("contact-button-submit")).not.toBeDisabled();
    });
  });
});
