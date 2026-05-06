import type { Deliverable, ProcessStep, Differential, SelectOption } from "@/types";

export const services = [
  {
    id: "institutional-sites",
    number: "01",
    title: "Sites institucionais",
    description:
      "Presença digital sólida e bem hierarquizada para empresas que querem ser levadas a sério.",
    iconName: "Monitor",
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação qualificada de leads.",
    iconName: "Layout",
  },
  {
    id: "web-systems",
    number: "03",
    title: "Sistemas web",
    description:
      "Aplicações internas e ferramentas operacionais que organizam o dia a dia da sua equipe.",
    iconName: "Code2",
  },
  {
    id: "saas-platforms",
    number: "04",
    title: "Plataformas SaaS",
    description:
      "Produtos completos com autenticação, billing, multi-tenant e arquitetura preparada para escalar.",
    iconName: "Shield",
  },
  {
    id: "dashboards",
    number: "05",
    title: "Dashboards",
    description:
      "Painéis de dados claros e acionáveis, com filtros, métricas e relatórios em tempo real.",
    iconName: "BarChart3",
  },
  {
    id: "automations",
    number: "06",
    title: "Automações",
    description:
      "Integrações e fluxos que eliminam trabalho manual repetitivo entre suas ferramentas.",
    iconName: "Zap",
  },
  {
    id: "apps",
    number: "07",
    title: "Aplicativos",
    description:
      "Apps mobile e PWAs com a mesma atenção a detalhes que damos para web.",
    iconName: "Smartphone",
  },
  {
    id: "maintenance",
    number: "08",
    title: "Manutenção e evolução",
    description:
      "Continuidade técnica para produtos vivos: ajustes, melhorias e novas features.",
    iconName: "Wrench",
  },
];

export const deliverables: Deliverable[] = [
  {
    id: "strategy",
    number: "→ 01",
    title: "Estratégia",
    description:
      "Diagnóstico do problema, definição de escopo e priorização do que realmente vai gerar resultado.",
  },
  {
    id: "ui-design",
    number: "→ 02",
    title: "Design de interface",
    description:
      "Sistema visual, fluxos, componentes e protótipo navegável antes de qualquer linha de código.",
  },
  {
    id: "fullstack-dev",
    number: "→ 03",
    title: "Desenvolvimento fullstack",
    description:
      "Código limpo em stack moderna, com padrões testados e estrutura preparada para crescer.",
  },
  {
    id: "integrations",
    number: "→ 04",
    title: "Integrações",
    description:
      "Conectamos o produto às ferramentas que você já usa: pagamentos, CRMs, e-mail, APIs internas.",
  },
  {
    id: "database",
    number: "→ 05",
    title: "Banco de dados",
    description:
      "Modelagem cuidadosa, performance pensada desde o começo e migrações sem dor de cabeça.",
  },
  {
    id: "deploy",
    number: "→ 06",
    title: "Deploy & infra",
    description:
      "Ambientes de staging e produção, CI/CD configurado e monitoramento ativo de saúde.",
  },
  {
    id: "support",
    number: "→ 07",
    title: "Suporte e melhorias contínuas",
    description:
      "Depois do lançamento, seguimos junto. Acompanhamos métricas, ouvimos seus usuários e evoluímos o produto em ciclos curtos — sem você precisar contratar uma nova equipe a cada nova feature.",
    wide: true,
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Descoberta",
    description:
      "Conversa inicial para entender objetivos de negócio, contexto da operação, restrições e expectativas. Sai daqui um documento curto com o problema, e não com a solução.",
    duration: "1–2 sem",
  },
  {
    id: "planning",
    number: "02",
    title: "Planejamento",
    description:
      "Escopo detalhado, definição de fases, stack, integrações e cronograma. Um plano que você pode levar para um stakeholder sem precisar traduzir.",
    duration: "1 sem",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "Wireframes, sistema visual e protótipo navegável de alta fidelidade. Tudo validado em Figma antes do desenvolvimento começar.",
    duration: "2–4 sem",
  },
  {
    id: "development",
    number: "04",
    title: "Desenvolvimento",
    description:
      "Sprints semanais com entregas reais. Código revisado, ambiente de staging atualizado e demos toda semana — sem caixa preta.",
    duration: "4–12 sem",
  },
  {
    id: "testing",
    number: "05",
    title: "Testes",
    description:
      "QA funcional, validação de performance, acessibilidade e testes em dispositivos reais. Pré-lançamento com checklist público.",
    duration: "1–2 sem",
  },
  {
    id: "launch",
    number: "06",
    title: "Lançamento",
    description:
      "Go-live coordenado, monitoramento ativo nas primeiras semanas e suporte dedicado para qualquer ajuste pós-lançamento.",
    duration: "+ contínuo",
  },
];

export const solutions = [
  {
    id: "websites",
    title: "Sites & Landing Pages",
    description:
      "Presença digital elegante, rápida e orientada a conversão. Do institucional ao lançamento de produto.",
    tags: ["Next.js", "Astro", "CMS"],
    iconName: "Monitor",
  },
  {
    id: "systems",
    title: "Sistemas Web",
    description:
      "Ferramentas internas, portais e operações que organizam e aceleram o trabalho da sua equipe.",
    tags: ["React", "Node.js", "PostgreSQL"],
    iconName: "Code2",
  },
  {
    id: "saas",
    title: "Plataformas SaaS",
    description:
      "Produtos digitais completos com autenticação, billing, dashboard e arquitetura escalável.",
    tags: ["Next.js", "Stripe", "Auth"],
    iconName: "Layers",
  },
  {
    id: "data",
    title: "Dashboards & Dados",
    description:
      "Painéis de controle com métricas, filtros e relatórios que tornam a tomada de decisão mais rápida.",
    tags: ["React", "D3.js", "APIs"],
    iconName: "BarChart3",
  },
];

export const differentials: Differential[] = [
  {
    id: "custom-solutions",
    mark: "A",
    title: "Soluções sob medida",
    description:
      "Não vendemos templates. Cada projeto é desenhado a partir do problema específico do seu negócio.",
  },
  {
    id: "clear-communication",
    mark: "B",
    title: "Comunicação clara",
    description:
      "Você fala com quem está construindo. Sem camadas de gerência ou ruído entre o briefing e o código.",
  },
  {
    id: "functional-design",
    mark: "C",
    title: "Design funcional",
    description:
      "Interfaces que existem para serem usadas, não para ganhar prêmios. Bonito vem como consequência.",
  },
  {
    id: "clean-code",
    mark: "D",
    title: "Código limpo",
    description:
      "Stack moderna, padrões consistentes e documentação interna. Outro time consegue continuar o trabalho.",
  },
  {
    id: "full-delivery",
    mark: "E",
    title: "Entrega completa",
    description:
      "Da estratégia ao deploy. Você recebe um produto pronto para produção, não um conjunto de peças.",
  },
  {
    id: "result-focus",
    mark: "F",
    title: "Foco em resultado",
    description:
      "Acompanhamos métricas reais e ajustamos o que não está funcionando. Projeto entregue não é fim de jornada.",
  },
];

export const projectTypeOptions: SelectOption[] = [
  { value: "site-institucional", label: "Site institucional", hint: "Presença digital", token: "01" },
  { value: "landing-page", label: "Landing page", hint: "Campanha · conversão", token: "02" },
  { value: "sistema-web", label: "Sistema web", hint: "Ferramenta interna", token: "03" },
  { value: "plataforma-saas", label: "Plataforma SaaS", hint: "Produto digital", token: "04" },
  { value: "dashboard", label: "Dashboard", hint: "Dados em tempo real", token: "05" },
  { value: "automacao", label: "Automação", hint: "Integrações e fluxos", token: "06" },
  { value: "aplicativo", label: "Aplicativo", hint: "Mobile · PWA", token: "07" },
  { value: "outro", label: "Outro / não tenho certeza", hint: "Conversamos juntos", token: "→" },
];

export const tickerItems = [
  "Sites institucionais",
  "Landing pages",
  "Sistemas web",
  "Plataformas SaaS",
  "Dashboards",
  "Automações",
  "Aplicativos",
  "Manutenção contínua",
];
