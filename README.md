# Asimpta

Site institucional da Asimpta — estúdio digital focado na criação de soluções digitais elegantes, funcionais e bem construídas.

## Tecnologias

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion**
- **Lucide React**
- Deploy: **Vercel**

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site.

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Layout raiz com metadata e SEO
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globais, variáveis e animações
├── components/
│   ├── Header.tsx        # Cabeçalho fixo com menu mobile
│   ├── Hero.tsx          # Seção hero com composição visual editorial
│   ├── Services.tsx      # Grid de serviços
│   ├── Deliverables.tsx  # Seção de entregas (fundo escuro)
│   ├── Process.tsx       # Rail de processo em etapas
│   ├── Solutions.tsx     # O que desenvolvemos / cases em breve
│   ├── About.tsx         # Sobre o estúdio com stats
│   ├── Differentials.tsx # Diferenciais em cards
│   ├── CTA.tsx           # Chamada para ação final
│   ├── Contact.tsx       # Formulário de contato com dropdown custom
│   └── Footer.tsx        # Rodapé com links
├── data/
│   └── site.ts           # Dados centralizados (serviços, steps, etc.)
├── lib/
│   └── utils.ts          # Utilitários e variantes de animação
└── types/
    └── index.ts          # Tipos TypeScript
```

## Deploy na Vercel

```bash
# Via Vercel CLI
npx vercel

# Ou conecte o repositório em vercel.com
```

## Observações internas

- O site está preparado para receber cases reais na seção "O que desenvolvemos"
- O formulário de contato é visual — integrar com backend ou serviço (Resend, EmailJS, etc.) quando necessário
- As redes sociais e links de contato devem ser atualizados com dados reais
- A imagem de OG (`/og-image.png`) deve ser criada e adicionada à pasta `public/`

---

> Repositório privado e sem licença pública. Todos os direitos reservados à Asimpta.
