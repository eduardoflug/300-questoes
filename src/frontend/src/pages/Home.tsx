import { PurchaseButton } from "@/components/PurchaseButton";
import { SubjectGrid } from "@/components/SubjectGrid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FAQ_ITEMS,
  HOW_TO_STEPS,
  ICON_STRIP,
  INCLUDED_ITEMS,
  PAIN_CARDS,
  PRICE,
  PRICE_FROM,
  TOTAL_QUESTIONS,
  VALUE_BULLETS,
} from "@/lib/content";
import {
  Check,
  Clock,
  Compass,
  FileText,
  MonitorSmartphone,
  Target,
  Wallet,
} from "lucide-react";

const ICONS = {
  devices: MonitorSmartphone,
  file: FileText,
  wallet: Wallet,
  compass: Compass,
  clock: Clock,
  target: Target,
} as const;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        data-ocid="hero.section"
        className="relative overflow-hidden border-b border-border bg-gradient-subtle"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <Badge
              variant="outline"
              className="rounded-full border-accent/50 bg-accent/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent"
            >
              Material digital de estudos
            </Badge>
            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-7xl">
              Simulado GM
              <br />
              Imperatriz
              <span className="mt-2 block text-primary">
                {TOTAL_QUESTIONS} Questões
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Prepare-se com {TOTAL_QUESTIONS} questões para treinar para a
              Guarda Municipal de Imperatriz-MA.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <PurchaseButton ocid="hero.primary_button" />
              <span className="numeral text-sm text-muted-foreground">
                Acesso imediato em PDF
              </span>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <img
              src="/assets/generated/hero-simulado.dim_1200x800.jpg"
              alt="Caderno de simulado e folha de respostas sobre mesa escura, representando o material de estudos em PDF"
              width={1200}
              height={800}
              loading="eager"
              className="w-full rounded-lg border border-border object-cover shadow-elevated-lg"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT CARD */}
      <section
        data-ocid="product.section"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24"
      >
        <Card className="gap-0 overflow-hidden rounded-lg border-border bg-card p-0 shadow-elevated">
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow text-muted-foreground">Simulado completo</p>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                Guarda Municipal de Imperatriz - MA
              </h2>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                Treine por matéria. Revise com estratégia.
              </p>
              <ul className="mt-6 space-y-2">
                {VALUE_BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 text-sm text-foreground md:text-base"
                  >
                    <Check
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-border bg-secondary/60 px-6 py-6 md:items-center">
              <span className="numeral text-6xl font-bold leading-none text-accent md:text-7xl">
                {TOTAL_QUESTIONS}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Questões
              </span>
            </div>
          </div>
          <div className="border-t border-border bg-background/40 p-6 sm:p-8">
            <p className="eyebrow mb-5 text-muted-foreground">
              Distribuição por matéria
            </p>
            <SubjectGrid ocidPrefix="product" />
          </div>
        </Card>
      </section>

      {/* ICON STRIP */}
      <section
        data-ocid="icon_strip.section"
        className="border-y border-border bg-card/40"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {ICON_STRIP.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.label}
                data-ocid={`icon_strip.item.${index + 1}`}
                className="flex items-center gap-3"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-medium text-foreground md:text-base">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* PAIN / BENEFIT */}
      <section
        data-ocid="pain.section"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24"
      >
        <SectionHeading
          eyebrow="Por que treinar"
          title="Não basta estudar. É importante treinar questões"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {PAIN_CARDS.map((card, index) => {
            const Icon = ICONS[card.icon];
            return (
              <Card
                key={card.title}
                data-ocid={`pain.card.${index + 1}`}
                className="gap-4 rounded-lg border-border bg-card p-6 shadow-elevated shadow-inset-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/50"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* WHAT'S IN THE PDF */}
      <section
        data-ocid="pdf.section"
        className="border-y border-border bg-card/40"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="O que vem no PDF"
            title="Quatro áreas em um só caderno"
            description="Um único arquivo em PDF, organizado por matéria, com gabarito ao final de cada bloco para você revisar com clareza."
          />
          <div className="mt-10">
            <SubjectGrid ocidPrefix="pdf" />
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section
        data-ocid="howto.section"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24"
      >
        <SectionHeading
          eyebrow="Como usar"
          title="Quatro passos para treinar com método"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOW_TO_STEPS.map((step, index) => (
            <li
              key={step.title}
              data-ocid={`howto.step.${index + 1}`}
              className="rounded-lg border border-border bg-card p-6 shadow-elevated shadow-inset-soft"
            >
              <span className="numeral flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* OFFER */}
      <section
        data-ocid="offer.section"
        className="border-y border-border bg-card/40"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            eyebrow="Oferta digital"
            title="Tudo o que está incluído"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <ul className="grid gap-3 sm:grid-cols-2">
              {INCLUDED_ITEMS.map((item, index) => (
                <li
                  key={item}
                  data-ocid={`offer.item.${index + 1}`}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Card
              data-ocid="offer.price_card"
              className="gap-5 rounded-lg border-primary/40 bg-card p-6 shadow-elevated-lg"
            >
              <div>
                <p className="eyebrow text-muted-foreground">
                  Acesso ao simulado
                </p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="numeral text-lg text-muted-foreground line-through">
                    {PRICE_FROM}
                  </span>
                  <span className="numeral text-4xl font-bold text-foreground md:text-5xl">
                    {PRICE}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pagamento único. Acesso imediato ao PDF após a confirmação.
                </p>
              </div>
              <PurchaseButton
                ocid="offer.primary_button"
                label="QUERO COMPRAR AGORA"
                className="w-full"
              />
              <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Pagamento seguro via Kiwify
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        data-ocid="faq.section"
        className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24"
      >
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas e respostas"
        />
        <Accordion type="single" collapsible className="mt-8">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index + 1}`}
              data-ocid={`faq.item.${index + 1}`}
              className="border-border"
            >
              <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <section
        data-ocid="final_cta.section"
        className="border-t border-border bg-gradient-subtle"
      >
        <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Transforme parte do seu tempo de estudo em prática direcionada
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {TOTAL_QUESTIONS} questões objetivas em PDF, divididas por matéria,
            com gabarito ao final de cada bloco.
          </p>
          <div className="mt-8 flex justify-center">
            <PurchaseButton ocid="final_cta.primary_button" />
          </div>
        </div>
      </section>
    </>
  );
}
