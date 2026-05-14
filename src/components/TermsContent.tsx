"use client";

import { motion } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const LAST_UPDATED = "13 de maio de 2026";

const tocSections = [
  { id: "aceitacao", title: "Aceitação" },
  { id: "sobre-asimpta", title: "Sobre a Asimpta" },
  { id: "responsabilidades", title: "Responsabilidades do usuário" },
  { id: "propriedade-intelectual", title: "Propriedade intelectual" },
  { id: "limitacao", title: "Limitação de responsabilidade" },
  { id: "suspensao", title: "Suspensão" },
  { id: "alteracoes", title: "Alterações" },
  { id: "legislacao", title: "Legislação aplicável" },
];

function SectionHeading({
  number,
  title,
  id,
  testId,
}: {
  number: string;
  title: string;
  id: string;
  testId: string;
}) {
  return (
    <div
      id={id}
      data-testid={testId}
      className="flex items-baseline gap-4 mb-7 pb-5 border-b border-line scroll-mt-28"
    >
      <span className="font-mono text-[11px] tracking-[0.1em] text-muted-2 flex-shrink-0">
        {number}
      </span>
      <h2 className="font-serif text-[1.5rem] text-ink leading-tight">{title}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[10px] w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TermsContent() {
  return (
    <>
      <PageHeader />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          data-testid="terms-hero-section"
          className="pt-[124px] pb-20"
          style={{ background: "var(--bg)" }}
        >
          <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              data-testid="terms-breadcrumb"
              aria-label="Localização"
              className="flex items-center gap-1.5 mb-10"
            >
              <a
                href="/"
                data-testid="terms-breadcrumb-home"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                Início
              </a>
              <ChevronRight size={13} className="text-muted-2" aria-hidden="true" />
              <span
                data-testid="terms-breadcrumb-current"
                className="text-sm text-ink"
                aria-current="page"
              >
                Termos de Uso
              </span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="max-w-[660px]"
            >
              <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-2 rounded-full bg-accent-soft border border-accent/20">
                <FileText size={13} className="text-accent" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-[0.07em] text-accent uppercase">
                  Termos de Uso
                </span>
              </div>

              <h1
                data-testid="terms-hero-title"
                className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] text-ink mb-5"
              >
                Termos de Uso
              </h1>

              <p
                data-testid="terms-hero-subtitle"
                className="text-[1.05rem] text-muted leading-[1.7] mb-8 max-w-[52ch]"
              >
                Conheça as condições para utilização dos serviços da Asimpta.
              </p>

              <p
                data-testid="terms-intro"
                className="text-[15px] text-ink-2 leading-[1.8] max-w-[60ch]"
              >
                Ao acessar e utilizar o site da Asimpta, você concorda com as
                condições descritas neste documento. Leia com atenção. Caso não
                concorde com algum ponto, recomendamos que entre em contato antes
                de prosseguir com a utilização dos nossos serviços.
              </p>

              <div className="mt-10 pt-8 border-t border-line">
                <span
                  data-testid="terms-last-updated"
                  className="font-mono text-[12px] text-muted-2"
                >
                  Última atualização: {LAST_UPDATED}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────── */}
        <section
          data-testid="terms-content-section"
          className="py-20"
          style={{
            background: "var(--bg-elev)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
            <div className="legal-content-grid">
              {/* TOC sidebar */}
              <aside
                data-testid="terms-toc"
                className="hidden lg:block legal-toc-sticky"
              >
                <p className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted-2 mb-5">
                  Nesta página
                </p>
                <nav aria-label="Sumário dos termos de uso">
                  <ul className="flex flex-col gap-0.5">
                    {tocSections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          data-testid={`terms-toc-link-${s.id}`}
                          className="block text-[13.5px] text-ink-2 py-[5px] pl-3 border-l-[1.5px] border-line hover:border-accent hover:text-accent transition-all duration-200"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Main content */}
              <div
                data-testid="terms-content"
                className="space-y-16 text-[15px] text-ink-2 leading-[1.78]"
              >
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-aceitacao"
                >
                  <SectionHeading
                    number="01"
                    title="Aceitação"
                    id="aceitacao"
                    testId="terms-section-heading-aceitacao"
                  />
                  <div className="space-y-5">
                    <p>
                      Ao acessar, navegar ou utilizar qualquer recurso do site
                      da Asimpta — incluindo o formulário de contato, links
                      externos e demais funcionalidades — você declara que leu,
                      compreendeu e concorda com estes Termos de Uso em sua
                      versão vigente.
                    </p>
                    <p>
                      Se você estiver utilizando o site em nome de uma empresa
                      ou organização, declara ter autoridade para aceitar estes
                      termos em nome dessa entidade.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-sobre-asimpta"
                >
                  <SectionHeading
                    number="02"
                    title="Sobre a Asimpta"
                    id="sobre-asimpta"
                    testId="terms-section-heading-sobre"
                  />
                  <div className="space-y-5">
                    <p>
                      A Asimpta é uma startup e software house focada no
                      desenvolvimento de soluções digitais sob medida. Nossos
                      serviços incluem:
                    </p>
                    <BulletList
                      items={[
                        "Sites institucionais e landing pages",
                        "Sistemas web e ferramentas internas",
                        "Plataformas SaaS e produtos digitais",
                        "Dashboards e visualização de dados",
                        "Automações e integrações entre plataformas",
                        "Aplicativos mobile e PWAs",
                        "Manutenção, evolução e suporte técnico contínuo",
                      ]}
                    />
                    <p>
                      Cada projeto é desenvolvido de forma personalizada, com
                      foco em clareza, performance e resultado real para o
                      negócio do cliente.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-responsabilidades"
                >
                  <SectionHeading
                    number="03"
                    title="Responsabilidades do usuário"
                    id="responsabilidades"
                    testId="terms-section-heading-responsabilidades"
                  />
                  <div className="space-y-5">
                    <p>
                      Ao utilizar o site e os canais de contato da Asimpta, você
                      se compromete a:
                    </p>
                    <BulletList
                      items={[
                        "Fornecer informações verdadeiras, precisas e atualizadas ao entrar em contato",
                        "Não utilizar os recursos do site para fins ilícitos ou que causem danos a terceiros",
                        "Não tentar explorar vulnerabilidades técnicas, realizar testes não autorizados ou sobrecarregar a infraestrutura",
                        "Não enviar conteúdo ofensivo, spam ou comunicações maliciosas por nenhum dos canais disponíveis",
                        "Não se passar por outra pessoa ou entidade ao entrar em contato com a equipe",
                      ]}
                    />
                    <p>
                      O uso indevido dos nossos canais pode resultar no bloqueio
                      do acesso e, quando aplicável, nas medidas legais cabíveis.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-propriedade-intelectual"
                >
                  <SectionHeading
                    number="04"
                    title="Propriedade intelectual"
                    id="propriedade-intelectual"
                    testId="terms-section-heading-propriedade"
                  />
                  <div className="space-y-5">
                    <p>
                      Todo o conteúdo presente no site da Asimpta — incluindo,
                      mas não se limitando a: identidade visual, logotipo,
                      tipografia, paleta de cores, textos, código-fonte,
                      componentes de interface, estrutura de layouts e demais
                      elementos — é de propriedade exclusiva da Asimpta ou de
                      seus respectivos licenciadores.
                    </p>
                    <p>
                      É vedada a reprodução, cópia, distribuição, modificação ou
                      uso comercial de qualquer material sem autorização expressa
                      e por escrito da Asimpta.
                    </p>
                    <p>
                      Em relação aos projetos desenvolvidos para clientes, os
                      direitos de propriedade intelectual sobre os entregáveis
                      são definidos individualmente em contrato.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-limitacao"
                >
                  <SectionHeading
                    number="05"
                    title="Limitação de responsabilidade"
                    id="limitacao"
                    testId="terms-section-heading-limitacao"
                  />
                  <div className="space-y-5">
                    <p>
                      A Asimpta se empenha para manter o site disponível e
                      funcionando corretamente. Porém, algumas situações fogem
                      do nosso controle direto:
                    </p>
                    <BulletList
                      items={[
                        "O site pode sofrer indisponibilidade temporária por manutenção planejada ou falhas técnicas",
                        "Integrações com serviços externos (mapas, analytics, formulários) podem apresentar instabilidade",
                        "Terceiros que compõem a infraestrutura do site podem causar interrupções sem aviso prévio",
                        "O conteúdo do site tem caráter informativo e não constitui compromisso legal ou proposta vinculante",
                      ]}
                    />
                    <p>
                      A Asimpta não se responsabiliza por eventuais danos
                      indiretos decorrentes de indisponibilidade do site ou
                      falhas em serviços de terceiros.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-suspensao"
                >
                  <SectionHeading
                    number="06"
                    title="Suspensão de atendimento"
                    id="suspensao"
                    testId="terms-section-heading-suspensao"
                  />
                  <div className="space-y-5">
                    <p>
                      A Asimpta reserva-se o direito de recusar, interromper ou
                      encerrar o atendimento a qualquer pessoa ou empresa em
                      situações que incluam, mas não se limitem a:
                    </p>
                    <BulletList
                      items={[
                        "Suspeita ou confirmação de fraude, falsidade de informações ou má-fé",
                        "Abuso dos canais de comunicação ou comportamento inadequado com a equipe",
                        "Uso indevido de recursos, tentativas de invasão ou exploração de vulnerabilidades",
                        "Prática de atividades ilegais ou que violem direitos de terceiros",
                      ]}
                    />
                    <p>
                      Nesses casos, nos reservamos o direito de notificar as
                      autoridades competentes quando necessário.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-alteracoes"
                >
                  <SectionHeading
                    number="07"
                    title="Alterações nos termos"
                    id="alteracoes"
                    testId="terms-section-heading-alteracoes"
                  />
                  <div className="space-y-5">
                    <p>
                      Estes Termos de Uso podem ser atualizados a qualquer
                      momento para refletir mudanças nos nossos serviços,
                      práticas internas ou exigências legais. A versão mais
                      recente sempre estará disponível nesta página, com a data
                      da última atualização indicada no topo.
                    </p>
                    <p>
                      O uso continuado do site após a publicação de alterações
                      implica aceitação dos novos termos. Recomendamos revisitar
                      esta página periodicamente.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="terms-section-legislacao"
                >
                  <SectionHeading
                    number="08"
                    title="Legislação aplicável"
                    id="legislacao"
                    testId="terms-section-heading-legislacao"
                  />
                  <div className="space-y-5">
                    <p>
                      Estes Termos de Uso são regidos pelas leis da República
                      Federativa do Brasil, incluindo a Lei Geral de Proteção de
                      Dados (LGPD — Lei nº 13.709/2018) e o Marco Civil da
                      Internet (Lei nº 12.965/2014).
                    </p>
                    <p>
                      Eventuais conflitos decorrentes destes termos serão
                      submetidos ao foro da comarca de São Paulo — SP, com
                      renúncia expressa de qualquer outro, por mais privilegiado
                      que seja.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          data-testid="terms-cta-section"
          className="py-24"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}
        >
          <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-[480px]"
            >
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted mb-4">
                Dúvidas?
              </p>
              <h2
                data-testid="terms-cta-title"
                className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] text-ink mb-4 leading-[1.15]"
              >
                Ficou com dúvidas?<br />Entre em contato.
              </h2>
              <p
                data-testid="terms-cta-description"
                className="text-[15px] text-muted leading-[1.7] mb-8"
              >
                Se tiver alguma dúvida sobre estes termos ou sobre como a
                Asimpta trabalha, estamos disponíveis para conversar.
              </p>
              <a
                href="/#contato"
                data-testid="terms-cta-link"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#FBFAF7] bg-ink hover:bg-accent transition-colors duration-200"
              >
                Falar com a Asimpta →
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
