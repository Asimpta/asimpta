# CLAUDE.md

Este arquivo define as instruções, padrões e regras obrigatórias para o desenvolvimento do projeto **Asimpta** usando Claude Code.

## Visão geral do projeto

A **Asimpta** é uma startup/software house focada na criação de sites, sistemas, landing pages, dashboards, automações, SaaS e soluções digitais sob medida.

O site da Asimpta deve ser institucional, moderno, clean, profissional e confiável.

A proposta visual deve transmitir:

- Clareza
- Sofisticação
- Organização
- Profissionalismo
- Modernidade
- Confiança
- Simplicidade
- Qualidade técnica

## Identidade visual

O projeto deve seguir uma estética:

- Clean
- Moderna
- Premium
- Institucional
- Minimalista
- Responsiva
- Leve
- Bem espaçada

Preferência por **tema claro**.

### Evitar

Não utilizar estética com cara de IA.

Evite:

- Robôs
- Cérebros digitais
- Hologramas
- Circuitos exagerados
- Neon excessivo
- Gradientes muito chamativos
- Dark mode futurista
- Visual gamer
- Dashboards genéricos
- Elementos sci-fi
- Componentes com aparência padrão de navegador
- Templates genéricos de startup

## Stack obrigatória

O projeto deve utilizar:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

O código deve estar pronto para deploy na **Vercel**.

## Estrutura recomendada

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Deliverables.tsx
│   ├── Process.tsx
│   ├── Solutions.tsx
│   ├── About.tsx
│   ├── Differentials.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── site.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## Padrões gerais de código

Ao gerar ou modificar código:

- Escreva código limpo, legível e organizado.
- Use TypeScript corretamente.
- Evite código duplicado.
- Separe dados repetitivos em arrays/objetos.
- Crie componentes reutilizáveis.
- Não crie componentes gigantes sem necessidade.
- Use nomes descritivos para variáveis, funções e componentes.
- Priorize manutenção futura.
- Evite complexidade desnecessária.
- Não adicione bibliotecas sem necessidade real.
- Mantenha o projeto simples, profissional e escalável.

## Componentização

Cada seção principal da homepage deve ser um componente separado.

Exemplo:

- `Header`
- `Hero`
- `Services`
- `Deliverables`
- `Process`
- `Solutions`
- `About`
- `Differentials`
- `CTA`
- `Contact`
- `Footer`

Dados como serviços, diferenciais, etapas do processo e soluções devem ficar preferencialmente em arquivos dentro de `src/data`.

## Conteúdo principal do site

A homepage deve conter:

1. Header
2. Hero section
3. Serviços
4. O que entregamos
5. Processo
6. O que desenvolvemos / Cases em breve
7. Sobre
8. Diferenciais
9. CTA final
10. Contato
11. Footer

## Header

O header deve conter:

- Logo textual: `Asimpta`
- Menu com links:
  - Início
  - Serviços
  - Processo
  - Sobre
  - Contato
- Botão CTA:
  - `Fale conosco` ou `Começar projeto`
- Menu mobile responsivo
- Visual clean
- Preferencialmente sticky/fixo com efeito sutil

## Hero section

A primeira dobra deve ser forte, elegante e institucional.

Texto sugerido:

```txt
Transformamos ideias em produtos digitais bem construídos.
```

Subtítulo sugerido:

```txt
Criamos sites, sistemas e soluções sob medida com foco em clareza, performance e resultado.
```

A hero section deve conter:

- Headline clara
- Subheadline objetiva
- CTA principal
- CTA secundário
- Elemento visual sofisticado

### Importante

Não usar dashboard genérico na lateral direita da hero section.

Preferir:

- Composição abstrata elegante
- Cards minimalistas
- Blocos visuais
- Grid sutil
- Mockups neutros
- Elementos geométricos simples
- Visual institucional

## Serviços

Criar cards para:

- Sites institucionais
- Landing pages
- Sistemas web
- SaaS
- Dashboards
- Automações
- Aplicativos
- Manutenção e evolução

Cada card deve conter:

- Ícone
- Título
- Descrição curta
- Hover elegante
- `data-testid`

## O que entregamos

Mostrar que a Asimpta entrega o projeto de ponta a ponta:

- Estratégia
- UI/UX Design
- Desenvolvimento fullstack
- Integrações com APIs
- Banco de dados
- Deploy
- Suporte e evolução

## Processo

Etapas obrigatórias:

1. Descoberta
2. Planejamento
3. Design
4. Desenvolvimento
5. Testes
6. Lançamento

Pode ser apresentado como:

- Timeline
- Cards numerados
- Grid organizado

## Projetos / Cases

Como a Asimpta ainda não possui projetos reais publicados, **não criar portfólio fake**.

Não inventar projetos fictícios como se fossem reais.

A seção deve ser adaptada para uma abordagem honesta e profissional, como:

- `O que desenvolvemos`
- `Soluções que criamos`
- `Cases em breve`
- `Pronto para os próximos projetos`

Pode conter:

- Tipos de soluções desenvolvidas
- Cards de possibilidades
- Texto explicando que os primeiros cases reais serão adicionados futuramente
- Estrutura preparada para receber cases reais depois

Exemplo de texto:

```txt
Estamos construindo nossos primeiros cases. Em breve, esta seção contará com projetos reais desenvolvidos pela Asimpta.
```

## Sobre

Texto base:

```txt
A Asimpta é uma startup/software house focada em criar soluções digitais elegantes, funcionais e bem construídas. Trabalhamos com estratégia, design e desenvolvimento para transformar ideias em experiências digitais reais.
```

A seção deve transmitir:

- Profissionalismo
- Visão
- Clareza
- Confiança
- Qualidade técnica

## Diferenciais

Criar cards para:

- Soluções sob medida
- Comunicação clara
- Design funcional
- Código limpo
- Entrega completa
- Foco em resultado

## CTA final

Texto sugerido:

```txt
Seu projeto merece sair do papel com qualidade.
```

Subtítulo sugerido:

```txt
Vamos criar uma solução digital que faça sentido para o seu negócio.
```

Botão:

```txt
Falar com a Asimpta
```

## Contato

A seção de contato deve conter:

- Formulário com:
  - Nome
  - E-mail
  - WhatsApp
  - Tipo de projeto
  - Mensagem
- Botão de envio
- Links para:
  - WhatsApp
  - E-mail
  - Instagram
  - GitHub

O formulário pode ser apenas visual inicialmente, mas deve estar preparado para integração futura.

## Dropdowns

Os dropdowns devem ser customizados e seguir o design system do site.

Regras:

- Não usar aparência padrão do navegador.
- Não usar scrollbar interna visível.
- Não usar `overflow-y: auto` ou `overflow-y: scroll`.
- A altura deve se adaptar corretamente ao conteúdo.
- As opções devem ficar visíveis sem rolagem interna.
- O visual deve ser clean, premium e consistente.
- Deve ter estados de hover e focus bem definidos.
- Deve funcionar bem no mobile.

## Responsividade

O site deve funcionar perfeitamente em:

- Desktop
- Notebook
- Tablet
- Mobile

Priorizar:

- Boa leitura
- Espaçamento adequado
- Botões acessíveis ao toque
- Menus responsivos
- Layout sem quebras
- Imagens/elementos visuais adaptáveis

## Acessibilidade

Seguir boas práticas básicas:

- Usar HTML semântico
- Botões reais para ações
- Links reais para navegação
- Labels em campos de formulário
- `aria-label` quando necessário
- Contraste adequado
- Estados de focus visíveis
- Navegação por teclado funcional

## SEO

Configurar SEO básico com:

- `title`
- `description`
- Open Graph
- Metadata no `layout.tsx`
- Estrutura semântica
- Headings organizados

Sugestão:

```ts
export const metadata = {
  title: "Asimpta | Soluções digitais sob medida",
  description:
    "Criamos sites, sistemas e soluções digitais sob medida com foco em clareza, performance e resultado.",
};
```

## Animações

Usar animações com moderação.

Permitido:

- Fade in
- Slide suave
- Hover sutil
- Transições em cards
- Animações ao aparecer na tela

Evitar:

- Animações exageradas
- Movimento excessivo
- Efeitos que prejudiquem performance
- Estética futurista demais

## Performance

Priorizar:

- Código leve
- Componentes otimizados
- Evitar imagens externas pesadas
- Evitar bibliotecas desnecessárias
- Usar CSS/Tailwind para elementos visuais sempre que possível
- Evitar re-renderizações desnecessárias

## README

Criar ou manter um `README.md` com:

- Nome do projeto
- Descrição
- Tecnologias
- Como instalar
- Como rodar localmente
- Scripts disponíveis
- Deploy
- Observações internas
- Aviso de repositório privado e sem licença pública

Aviso recomendado:

```md
> Repositório privado e sem licença pública. Todos os direitos reservados à Asimpta.
```

# Regras de Desenvolvimento: Testabilidade e data-testid

Você é um desenvolvedor frontend sênior focado em qualidade e testabilidade.

Ao gerar, refatorar ou modificar qualquer código de interface, como HTML, JSX, TSX, Vue ou componentes de UI, você deve **OBRIGATORIAMENTE** seguir as regras abaixo para a inclusão de atributos `data-testid`.

## 1. Regra Geral

Todo elemento interativo ou container de dados essencial para a jornada do usuário DEVE possuir um atributo `data-testid`.

Não aguarde uma solicitação explícita para adicioná-los.

Trate `data-testid` como parte obrigatória da semântica do código.

## 2. Onde aplicar o `data-testid`?

Você deve adicionar o atributo nos seguintes elementos:

### Elementos interativos

- Botões (`<button>`)
- Links (`<a>`)
- Abas
- Menus dropdown
- Modais
- Itens clicáveis
- Cards clicáveis
- Ícones com ação
- Botões de menu mobile
- Botões de fechar/abrir

### Elementos de formulário

- `form`
- `input`
- `textarea`
- `select`
- Checkbox
- Radio button
- Campos customizados
- Dropdowns customizados
- Botão de submit
- Mensagens de validação

### Feedback visual

- Mensagens de erro
- Alertas
- Toasts
- Modais de sucesso
- Loaders
- Spinners
- Estados vazios
- Mensagens de confirmação

### Containers estruturais chave

- Cards de listagem
- Linhas de tabelas de dados (`<tr>`)
- Seções principais de navegação
- Blocos de conteúdo dinâmico
- Containers de navegação
- Cards de serviços
- Cards de diferenciais
- Cards de processo
- Cards de soluções
- Seções de CTA
- Container do formulário de contato

## 3. Padrão de nomenclatura

Os valores de `data-testid` devem seguir o formato:

```txt
[contexto]-[elemento]-[ação/identificador]
```

Obrigatoriamente:

- Usar `kebab-case`
- Ser descritivo
- Indicar o contexto
- Evitar nomes genéricos
- Evitar números sem significado
- Evitar camelCase
- Evitar PascalCase

### Correto

```tsx
data-testid="login-input-email"
data-testid="contact-form-submit"
data-testid="header-link-services"
data-testid="mobile-menu-button-open"
data-testid="services-card-web-systems"
```

### Incorreto

```tsx
data-testid="email"
data-testid="LoginEmail"
data-testid="input-1"
data-testid="btn"
data-testid="card"
```

## 4. Exemplos práticos

### Incorreto

```tsx
<form onSubmit={handleSubmit}>
  <input type="email" placeholder="Digite seu email" />
  <input type="password" placeholder="Senha" />
  <span className="error">Email inválido</span>
  <button type="submit">Entrar</button>
</form>
```

### Correto

```tsx
<form onSubmit={handleSubmit} data-testid="login-form">
  <input
    type="email"
    placeholder="Digite seu email"
    data-testid="login-input-email"
  />

  <input
    type="password"
    placeholder="Senha"
    data-testid="login-input-password"
  />

  <span className="error" data-testid="login-error-email">
    Email inválido
  </span>

  <button type="submit" data-testid="login-button-submit">
    Entrar
  </button>
</form>
```

## 5. Exemplos específicos para a Asimpta

### Header

```tsx
<header data-testid="header-section">
  <a href="#inicio" data-testid="header-logo-link">
    Asimpta
  </a>

  <nav data-testid="header-nav-desktop">
    <a href="#servicos" data-testid="header-link-services">
      Serviços
    </a>
    <a href="#processo" data-testid="header-link-process">
      Processo
    </a>
    <a href="#sobre" data-testid="header-link-about">
      Sobre
    </a>
    <a href="#contato" data-testid="header-link-contact">
      Contato
    </a>
  </nav>

  <button data-testid="header-button-contact">
    Fale conosco
  </button>

  <button data-testid="mobile-menu-button-open">
    Abrir menu
  </button>
</header>
```

### Hero

```tsx
<section id="inicio" data-testid="hero-section">
  <h1 data-testid="hero-title">
    Transformamos ideias em produtos digitais bem construídos.
  </h1>

  <p data-testid="hero-description">
    Criamos sites, sistemas e soluções sob medida com foco em clareza, performance e resultado.
  </p>

  <a href="#contato" data-testid="hero-link-start-project">
    Começar projeto
  </a>

  <a href="#servicos" data-testid="hero-link-view-services">
    Ver serviços
  </a>
</section>
```

### Serviços

```tsx
<section id="servicos" data-testid="services-section">
  {services.map((service) => (
    <article
      key={service.id}
      data-testid={`services-card-${service.id}`}
    >
      <h3 data-testid={`services-card-title-${service.id}`}>
        {service.title}
      </h3>

      <p data-testid={`services-card-description-${service.id}`}>
        {service.description}
      </p>
    </article>
  ))}
</section>
```

### Contato

```tsx
<form data-testid="contact-form">
  <input
    name="name"
    data-testid="contact-input-name"
  />

  <input
    name="email"
    type="email"
    data-testid="contact-input-email"
  />

  <input
    name="whatsapp"
    data-testid="contact-input-whatsapp"
  />

  <select
    name="projectType"
    data-testid="contact-select-project-type"
  >
    <option value="site">Site institucional</option>
    <option value="landing-page">Landing page</option>
    <option value="sistema-web">Sistema web</option>
  </select>

  <textarea
    name="message"
    data-testid="contact-textarea-message"
  />

  <button
    type="submit"
    data-testid="contact-button-submit"
  >
    Enviar mensagem
  </button>
</form>
```

## 6. Padrões recomendados de `data-testid` por seção

### Header

```txt
header-section
header-logo-link
header-nav-desktop
header-nav-mobile
header-link-home
header-link-services
header-link-process
header-link-about
header-link-contact
header-button-contact
mobile-menu-button-open
mobile-menu-button-close
mobile-menu-panel
```

### Hero

```txt
hero-section
hero-title
hero-description
hero-link-start-project
hero-link-view-services
hero-visual-container
```

### Serviços

```txt
services-section
services-title
services-description
services-grid
services-card-[service-id]
services-card-title-[service-id]
services-card-description-[service-id]
```

### Entregáveis

```txt
deliverables-section
deliverables-title
deliverables-grid
deliverables-card-[deliverable-id]
```

### Processo

```txt
process-section
process-title
process-grid
process-step-[step-id]
process-step-title-[step-id]
process-step-description-[step-id]
```

### Soluções / Cases em breve

```txt
solutions-section
solutions-title
solutions-description
solutions-grid
solutions-card-[solution-id]
solutions-empty-state
solutions-future-cases-message
```

### Sobre

```txt
about-section
about-title
about-description
about-content
```

### Diferenciais

```txt
differentials-section
differentials-title
differentials-grid
differentials-card-[differential-id]
```

### CTA

```txt
cta-section
cta-title
cta-description
cta-link-contact
```

### Contato

```txt
contact-section
contact-title
contact-description
contact-form
contact-input-name
contact-input-email
contact-input-whatsapp
contact-select-project-type
contact-select-trigger-project-type
contact-select-option-[option-id]
contact-textarea-message
contact-button-submit
contact-link-whatsapp
contact-link-email
contact-link-instagram
contact-link-github
contact-error-[field-name]
contact-success-message
```

### Footer

```txt
footer-section
footer-logo
footer-description
footer-link-home
footer-link-services
footer-link-process
footer-link-about
footer-link-contact
footer-link-instagram
footer-link-github
footer-copyright
```

## 7. Regras para listas dinâmicas

Sempre que renderizar listas com `.map()`, os itens devem receber `data-testid` baseado em um `id` estável.

### Correto

```tsx
{services.map((service) => (
  <article
    key={service.id}
    data-testid={`services-card-${service.id}`}
  >
    {service.title}
  </article>
))}
```

### Incorreto

```tsx
{services.map((service, index) => (
  <article
    key={index}
    data-testid={`services-card-${index}`}
  >
    {service.title}
  </article>
))}
```

Evite usar `index` como identificador, exceto quando não houver alternativa.

## 8. Regras para testes futuros

O código deve ser preparado para testes com ferramentas como:

- Playwright
- Cypress
- Testing Library
- Vitest
- Jest

Sempre que possível, preservar também boas queries acessíveis com:

- Texto visível
- Labels
- Roles
- `aria-label`
- Semântica correta

O `data-testid` não substitui acessibilidade. Ele complementa a testabilidade.

## 9. Proibições

Não fazer:

```tsx
data-testid="button"
data-testid="link"
data-testid="card"
data-testid="input"
data-testid="section"
data-testid="item"
data-testid="test"
data-testid="abc"
data-testid="component"
```

Não usar:

- IDs genéricos
- Nomes sem contexto
- CamelCase
- PascalCase
- Abreviações confusas
- Valores duplicados na mesma tela
- `data-testid` gerado aleatoriamente
- `data-testid` baseado em texto que pode mudar facilmente

## 10. Antes de finalizar qualquer alteração

Antes de finalizar qualquer geração ou modificação de código, revise:

- Todos os botões possuem `data-testid`?
- Todos os links importantes possuem `data-testid`?
- Todos os campos de formulário possuem `data-testid`?
- Todos os formulários possuem `data-testid`?
- Todos os cards principais possuem `data-testid`?
- Todos os estados de erro/sucesso/loading possuem `data-testid`?
- Todos os dropdowns possuem `data-testid`?
- Os nomes estão em `kebab-case`?
- Os nomes são descritivos?
- Não existem nomes duplicados?
- Os IDs dinâmicos são estáveis?

## Git e organização

Ao modificar arquivos:

- Não alterar arquivos sem necessidade.
- Não remover funcionalidades existentes sem motivo.
- Não alterar identidade visual sem solicitação.
- Não adicionar dependências sem justificar.
- Não criar portfólio fake.
- Não quebrar responsividade.
- Não ignorar regras de testabilidade.

## Testes unitários

Os testes unitários devem seguir o padrão AAA:

- Arrange: preparar dados, mocks e renderização.
- Act: executar a ação ou obter o resultado observado.
- Assert: validar o comportamento esperado.

Regras obrigatórias:

- As descrições de `describe` e `it` devem estar em pt-BR.
- Não criar testes meramente cosméticos.
- Testar comportamento, contratos de dados, validações, links importantes, estados de interação e fluxos de usuário.
- Não testar classes CSS, espaçamentos, animações ou detalhes visuais sem impacto funcional.
- Não fixar textos comerciais, nomes, telefones, handles, URLs completas de canais externos ou copy que possa mudar legitimamente.
- Quando um conteúdo precisar ser validado, preferir importar a fonte de dados usada pelo componente em vez de duplicar literais no teste.
- Para links externos de contato, validar formato/protocolo e presença do canal, não valores exatos de telefone ou usuário.
- Para listas renderizadas a partir de dados, validar que todos os itens configurados aparecem com identificadores estáveis.
- Para formulários, validar regras de validação, payload enviado, estados de loading, sucesso e erro.
- Usar factories ou builders para dados repetidos de teste, evitando duplicação excessiva.
- Manter helpers de interação próximos do teste quando eles ajudarem a leitura do cenário.
- Preferir queries acessíveis (`role`, texto, label) quando fizer sentido, usando `data-testid` para contratos estáveis e elementos críticos.

## Objetivo final

O projeto deve parecer um site real, moderno e profissional da Asimpta, pronto para ser publicado, apresentado a clientes e evoluído pela equipe.

O código deve ser:

- Limpo
- Testável
- Responsivo
- Acessível
- Bem organizado
- Fácil de manter
- Visualmente fiel à identidade da marca
