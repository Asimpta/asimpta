import { projectTypeOptions } from "@/data/site";

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  message: string;
}

export function makeContactFormData(
  overrides: Partial<ContactFormData> = {}
): ContactFormData {
  return {
    name: "João Silva",
    email: "joao@empresa.com",
    whatsapp: "+55 11 99999-0000",
    projectType: projectTypeOptions[0].value,
    message: "Quero um site institucional.",
    ...overrides,
  };
}

export function makeInvalidEmailContactFormData(
  overrides: Partial<ContactFormData> = {}
): ContactFormData {
  return makeContactFormData({
    email: "email-invalido",
    projectType: projectTypeOptions[1]?.value ?? projectTypeOptions[0].value,
    message: "Preciso de um site.",
    ...overrides,
  });
}

export function makeFormspreePayload(data = makeContactFormData()) {
  return {
    name: data.name,
    email: data.email,
    whatsapp: data.whatsapp,
    _subject: `Novo projeto: ${data.projectType}`,
    message: data.message,
  };
}

export function makeRequiredContactErrors() {
  return {
    name: "Nome é obrigatório.",
    email: "E-mail é obrigatório.",
    projectType: "Selecione um tipo de projeto.",
    message: "Mensagem é obrigatória.",
  };
}
