"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, Mail } from "lucide-react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const LAST_UPDATED = "13 de maio de 2026";

const tocSections = [
  { id: "informacoes-coletadas", title: "Informações coletadas" },
  { id: "uso-das-informacoes", title: "Uso das informações" },
  { id: "compartilhamento", title: "Compartilhamento" },
  { id: "cookies", title: "Cookies" },
  { id: "seguranca", title: "Segurança" },
  { id: "direitos", title: "Direitos do usuário" },
  { id: "contato-privacidade", title: "Contato" },
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

export default function PrivacyPolicyContent() {
  return (
    <>
      <PageHeader />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          data-testid="privacy-hero-section"
          className="pt-[124px] pb-20"
          style={{ background: "var(--bg)" }}
        >
          <div className="w-full max-w-[1240px] mx-auto px-8 max-sm:px-5">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              data-testid="privacy-breadcrumb"
              aria-label="Localização"
              className="flex items-center gap-1.5 mb-10"
            >
              <a
                href="/"
                data-testid="privacy-breadcrumb-home"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                Início
              </a>
              <ChevronRight size={13} className="text-muted-2" aria-hidden="true" />
              <span
                data-testid="privacy-breadcrumb-current"
                className="text-sm text-ink"
                aria-current="page"
              >
                Política de Privacidade
              </span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="max-w-[660px]"
            >
              <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-2 rounded-full bg-accent-soft border border-accent/20">
                <Shield size={13} className="text-accent" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-[0.07em] text-accent uppercase">
                  Política de Privacidade
                </span>
              </div>

              <h1
                data-testid="privacy-hero-title"
                className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] text-ink mb-5"
              >
                Privacidade e<br />transparência
              </h1>

              <p
                data-testid="privacy-hero-subtitle"
                className="text-[1.05rem] text-muted leading-[1.7] mb-8 max-w-[52ch]"
              >
                Levamos a proteção de dados a sério. Saiba como tratamos suas
                informações.
              </p>

              <p
                data-testid="privacy-intro"
                className="text-[15px] text-ink-2 leading-[1.8] max-w-[60ch]"
              >
                A Asimpta acredita que transparência é a base de uma relação de
                confiança. Este documento explica, de forma clara e objetiva,
                quais informações podemos coletar quando você acessa nosso site
                ou entra em contato conosco, como utilizamos esses dados e quais
                são os seus direitos.
              </p>

              <div className="mt-10 pt-8 border-t border-line">
                <span
                  data-testid="privacy-last-updated"
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
          data-testid="privacy-content-section"
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
                data-testid="privacy-toc"
                className="hidden lg:block legal-toc-sticky"
              >
                <p className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted-2 mb-5">
                  Nesta página
                </p>
                <nav aria-label="Sumário da política de privacidade">
                  <ul className="flex flex-col gap-0.5">
                    {tocSections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          data-testid={`privacy-toc-link-${s.id}`}
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
                data-testid="privacy-content"
                className="space-y-16 text-[15px] text-ink-2 leading-[1.78]"
              >
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-informacoes-coletadas"
                >
                  <SectionHeading
                    number="01"
                    title="Informações coletadas"
                    id="informacoes-coletadas"
                    testId="privacy-section-heading-informacoes"
                  />
                  <div className="space-y-5">
                    <p>
                      Ao navegar pelo site da Asimpta ou entrar em contato pelo
                      formulário, e-mail ou WhatsApp, podemos receber informações
                      fornecidas diretamente por você:
                    </p>
                    <BulletList
                      items={[
                        "Nome completo",
                        "Endereço de e-mail",
                        "Número de telefone ou WhatsApp",
                        "Nome da empresa ou organização",
                        "Mensagens e descrições de projeto enviadas por você",
                      ]}
                    />
                    <p>
                      Além disso, como ocorre na maioria dos sites, podemos
                      coletar automaticamente dados técnicos de navegação:
                      endereço IP, tipo de navegador, dispositivo, páginas
                      acessadas e tempo de visita. Essas informações são usadas
                      de forma agregada e não identificam você pessoalmente.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-uso-das-informacoes"
                >
                  <SectionHeading
                    number="02"
                    title="Uso das informações"
                    id="uso-das-informacoes"
                    testId="privacy-section-heading-uso"
                  />
                  <div className="space-y-5">
                    <p>
                      As informações coletadas são utilizadas exclusivamente para
                      fins legítimos relacionados à nossa atividade:
                    </p>
                    <BulletList
                      items={[
                        "Responder suas mensagens e solicitações de contato",
                        "Elaborar orçamentos e propostas personalizadas",
                        "Prestar suporte durante e após o desenvolvimento de projetos",
                        "Melhorar continuamente nossos serviços e a experiência no site",
                        "Obter métricas de acesso e desempenho em formato agregado",
                        "Cumprir obrigações legais quando necessário",
                      ]}
                    />
                    <p>
                      Não utilizamos seus dados para envio de e-mails em massa,
                      listas de marketing ou qualquer finalidade fora do escopo
                      acima sem o seu consentimento expresso.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-compartilhamento"
                >
                  <SectionHeading
                    number="03"
                    title="Compartilhamento de dados"
                    id="compartilhamento"
                    testId="privacy-section-heading-compartilhamento"
                  />
                  <div className="space-y-5">
                    <p>
                      <strong className="text-ink font-medium">
                        A Asimpta não vende, aluga nem comercializa seus dados
                        pessoais.
                      </strong>{" "}
                      Ponto.
                    </p>
                    <p>
                      Porém, como qualquer operação digital, utilizamos serviços
                      de terceiros para manter o site funcionando. Esses serviços
                      podem ter acesso técnico a determinadas informações no
                      contexto das funções que desempenham:
                    </p>
                    <BulletList
                      items={[
                        "Provedores de hospedagem e infraestrutura",
                        "Ferramentas de analytics (ex.: Google Analytics)",
                        "Serviços de mapas (ex.: Google Maps)",
                        "Plataformas de comunicação (ex.: WhatsApp Business)",
                        "Ferramentas de marketing e automação, quando aplicável",
                      ]}
                    />
                    <p>
                      Esses parceiros operam de acordo com suas próprias
                      políticas de privacidade e são selecionados por serem
                      referências confiáveis no mercado.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-cookies"
                >
                  <SectionHeading
                    number="04"
                    title="Cookies"
                    id="cookies"
                    testId="privacy-section-heading-cookies"
                  />
                  <div className="space-y-5">
                    <p>
                      A Asimpta pode utilizar cookies próprios ou de terceiros
                      para melhorar a experiência do usuário, obter métricas e
                      permitir funcionalidades do site. Cookies são pequenos
                      arquivos armazenados no seu navegador que nos ajudam a:
                    </p>
                    <BulletList
                      items={[
                        "Medir o desempenho e a velocidade do site",
                        "Obter estatísticas anônimas de acesso e comportamento",
                        "Lembrar preferências de navegação",
                        "Permitir integrações com ferramentas de terceiros",
                      ]}
                    />
                    <p>
                      Você pode configurar seu navegador para recusar cookies ou
                      ser notificado quando forem enviados. Algumas
                      funcionalidades do site podem não operar corretamente sem
                      eles.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-seguranca"
                >
                  <SectionHeading
                    number="05"
                    title="Segurança"
                    id="seguranca"
                    testId="privacy-section-heading-seguranca"
                  />
                  <div className="space-y-5">
                    <p>
                      Adotamos medidas técnicas e organizacionais razoáveis para
                      proteger as informações coletadas contra acesso não
                      autorizado, uso indevido, alteração ou divulgação. Isso
                      inclui conexões seguras (HTTPS), infraestrutura gerenciada
                      por provedores confiáveis e controles de acesso internos.
                    </p>
                    <p>
                      Embora nenhum sistema seja 100% inviolável, nos
                      comprometemos a tratar seus dados com responsabilidade e a
                      agir prontamente em caso de qualquer incidente de
                      segurança que possa afetá-los.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-direitos"
                >
                  <SectionHeading
                    number="06"
                    title="Direitos do usuário (LGPD)"
                    id="direitos"
                    testId="privacy-section-heading-direitos"
                  />
                  <div className="space-y-5">
                    <p>
                      Em conformidade com a Lei Geral de Proteção de Dados (LGPD
                      — Lei nº 13.709/2018), você tem o direito de:
                    </p>
                    <BulletList
                      items={[
                        "Acessar os dados pessoais que temos sobre você",
                        "Solicitar a correção de dados incompletos, inexatos ou desatualizados",
                        "Solicitar a exclusão dos seus dados, quando aplicável",
                        "Revogar o consentimento dado anteriormente",
                        "Solicitar informações sobre uso e compartilhamento dos seus dados",
                      ]}
                    />
                    <p>
                      Para exercer qualquer desses direitos, basta entrar em
                      contato pelo e-mail abaixo. Faremos o possível para
                      responder em até 15 dias úteis.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-48px" }}
                  data-testid="privacy-section-contato"
                >
                  <SectionHeading
                    number="07"
                    title="Contato"
                    id="contato-privacidade"
                    testId="privacy-section-heading-contato"
                  />
                  <div className="space-y-5">
                    <p>
                      Caso tenha dúvidas, solicitações ou queira exercer seus
                      direitos previstos na LGPD, entre em contato:
                    </p>
                    <a
                      href="mailto:contato@asimpta.com.br"
                      data-testid="privacy-contact-email"
                      className="inline-flex items-center gap-2.5 text-accent font-medium hover:text-accent-2 transition-colors"
                    >
                      <Mail size={15} aria-hidden="true" />
                      contato@asimpta.com.br
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          data-testid="privacy-cta-section"
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
                data-testid="privacy-cta-title"
                className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] text-ink mb-4 leading-[1.15]"
              >
                Ficou com dúvidas?<br />Entre em contato.
              </h2>
              <p
                data-testid="privacy-cta-description"
                className="text-[15px] text-muted leading-[1.7] mb-8"
              >
                Nossa equipe está disponível para esclarecer qualquer questão
                sobre privacidade, proteção de dados ou uso das suas informações.
              </p>
              <a
                href="/#contato"
                data-testid="privacy-cta-link"
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
