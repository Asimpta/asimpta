import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/components/Contact";
import { projectTypeOptions } from "@/data/site";
import {
  ContactFormData,
  makeContactFormData,
  makeFormspreePayload,
  makeInvalidEmailContactFormData,
  makeRequiredContactErrors,
} from "@/__tests__/factories/contact.factory";

function mockFetch() {
  const fetchMock = jest.fn();
  global.fetch = fetchMock as unknown as typeof fetch;
  return fetchMock;
}

async function selectProjectType(value: string) {
  fireEvent.click(screen.getByTestId("contact-select-trigger-project-type"));
  fireEvent.click(screen.getByTestId(`contact-select-option-${value}`));
}

async function fillContactForm(data: ContactFormData) {
  const user = userEvent.setup();

  await user.type(screen.getByTestId("contact-input-name"), data.name);
  await user.type(screen.getByTestId("contact-input-email"), data.email);
  await user.type(screen.getByTestId("contact-textarea-message"), data.message);

  if (data.whatsapp) {
    await user.type(screen.getByTestId("contact-input-whatsapp"), data.whatsapp);
  }

  await selectProjectType(data.projectType);

  return user;
}

describe("Formulário de contato", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("exibe erro imediato quando o endpoint do formulário não está configurado", async () => {
    // Arrange — simula deploy sem a variável de ambiente configurada
    const originalEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT = "";

    const data = makeContactFormData({ whatsapp: "" });
    const fetchMock = mockFetch();
    render(<Contact />);
    const user = await fillContactForm(data);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(await screen.findByTestId("contact-error-submit")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();

    // Cleanup
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT = originalEndpoint;
  });

  it("bloqueia o envio e exibe erros obrigatórios quando o formulário está vazio", async () => {
    // Arrange
    const user = userEvent.setup();
    const fetchMock = mockFetch();
    const errors = makeRequiredContactErrors();
    render(<Contact />);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(await screen.findByTestId("contact-error-name")).toHaveTextContent(
      errors.name
    );
    expect(screen.getByTestId("contact-error-email")).toHaveTextContent(
      errors.email
    );
    expect(screen.getByTestId("contact-error-project-type")).toHaveTextContent(
      errors.projectType
    );
    expect(screen.getByTestId("contact-error-message")).toHaveTextContent(
      errors.message
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("bloqueia o envio quando o e-mail tem formato inválido", async () => {
    // Arrange
    const data = makeInvalidEmailContactFormData({ whatsapp: "" });
    const fetchMock = mockFetch();
    render(<Contact />);

    // Act
    const user = await fillContactForm(data);
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(await screen.findByTestId("contact-error-email")).toHaveTextContent(
      "E-mail inválido."
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("permite selecionar o tipo de projeto pelo teclado no dropdown customizado", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "Enter" });

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveTextContent(projectTypeOptions[0].label);
  });

  it("permite navegar e fechar o dropdown customizado pelo teclado", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });
    fireEvent.keyDown(trigger, { key: "ArrowUp" });
    fireEvent.keyDown(trigger, { key: "Escape" });

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveTextContent("Selecione uma opção");
  });

  it("abre o dropdown pela tecla espaço", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.keyDown(trigger, { key: " " });

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("listbox", { name: "Tipo de projeto" })).toBeInTheDocument();
  });

  it("ignora teclas sem ação mapeada no dropdown customizado", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.keyDown(trigger, { key: "Tab" });

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveTextContent("Selecione uma opção");
  });

  it("fecha o dropdown ao clicar fora e mantém aberto ao clicar dentro", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.click(trigger);
    fireEvent.mouseDown(trigger);

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Act
    fireEvent.mouseDown(document.body);

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("fecha o dropdown ao clicar novamente no trigger", () => {
    // Arrange
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    fireEvent.click(trigger);
    fireEvent.click(trigger);

    // Assert
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("mantém a opção selecionada marcada ao reabrir o dropdown", async () => {
    // Arrange
    const selectedOption = projectTypeOptions[3] ?? projectTypeOptions[0];
    const hoveredOption =
      projectTypeOptions.find((option) => option.value !== selectedOption.value) ??
      selectedOption;
    render(<Contact />);
    const trigger = screen.getByTestId("contact-select-trigger-project-type");

    // Act
    await selectProjectType(selectedOption.value);
    await waitFor(() =>
      expect(screen.getByTestId("contact-select-trigger-project-type")).toHaveTextContent(
        selectedOption.label
      )
    );
    fireEvent.click(trigger);
    fireEvent.mouseEnter(
      screen.getByTestId(`contact-select-option-${hoveredOption.value}`)
    );

    // Assert
    expect(
      screen.getByTestId(`contact-select-option-${selectedOption.value}`)
    ).toHaveAttribute("aria-selected", "true");
    expect(trigger).toHaveTextContent(selectedOption.label);
  });

  it("envia o payload esperado e limpa o formulário após sucesso", async () => {
    // Arrange
    const data = makeContactFormData();
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue({ ok: true });
    render(<Contact />);
    const user = await fillContactForm(data);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [, options] = fetchMock.mock.calls[0];
    const body = JSON.parse(options.body);

    expect(options).toMatchObject({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    expect(body).toEqual(makeFormspreePayload(data));
    expect(await screen.findByTestId("contact-success-message")).toBeInTheDocument();
    expect(screen.getByTestId("contact-input-name")).toHaveValue("");
    expect(screen.getByTestId("contact-input-email")).toHaveValue("");
    expect(screen.getByTestId("contact-input-whatsapp")).toHaveValue("");
    expect(screen.getByTestId("contact-textarea-message")).toHaveValue("");
  });

  it("mantém o botão de envio desabilitado enquanto a requisição está pendente", async () => {
    // Arrange
    const data = makeContactFormData({ whatsapp: "" });
    let resolveRequest!: (response: { ok: boolean }) => void;
    const fetchMock = mockFetch();
    fetchMock.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveRequest = resolve;
        })
    );
    render(<Contact />);
    const user = await fillContactForm(data);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(screen.getByTestId("contact-button-submit")).toBeDisabled();

    // Act
    resolveRequest({ ok: true });

    // Assert
    await waitFor(() =>
      expect(screen.getByTestId("contact-button-submit")).not.toBeDisabled()
    );
  });

  it("exibe erro de envio quando a requisição falha", async () => {
    // Arrange
    const data = makeContactFormData({ whatsapp: "" });
    const fetchMock = mockFetch();
    fetchMock.mockRejectedValue(new Error("Network error"));
    render(<Contact />);
    const user = await fillContactForm(data);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(await screen.findByTestId("contact-error-submit")).toBeInTheDocument();
  });

  it("exibe erro de envio quando o serviço retorna uma resposta sem sucesso", async () => {
    // Arrange
    const data = makeContactFormData({ whatsapp: "" });
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue({ ok: false });
    render(<Contact />);
    const user = await fillContactForm(data);

    // Act
    await user.click(screen.getByTestId("contact-button-submit"));

    // Assert
    expect(await screen.findByTestId("contact-error-submit")).toBeInTheDocument();
  });
});
