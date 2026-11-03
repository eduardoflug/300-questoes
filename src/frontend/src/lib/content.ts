/**
 * Static sales-page content for the Simulado GM Imperatriz.
 * All copy is Portuguese (BR). No backend data is involved.
 */

/** Kiwify checkout URL. Replace with the live product checkout link. */
export const CHECKOUT_URL = "https://pay.kiwify.com.br/simulado-gm-imperatriz";

export const PRICE = "R$ 19,90";
export const PRICE_FROM = "R$ 39,90";
export const TOTAL_QUESTIONS = 300;

export interface Subject {
  name: string;
  count: number;
  /** Tailwind text color class for the count numeral. */
  tone: "primary" | "accent" | "chart-3" | "destructive";
}

export const SUBJECTS: Subject[] = [
  { name: "Língua Portuguesa", count: 60, tone: "primary" },
  { name: "Raciocínio Lógico", count: 50, tone: "accent" },
  { name: "Informática", count: 50, tone: "chart-3" },
  { name: "Conhecimentos Específicos", count: 140, tone: "destructive" },
];

export const VALUE_BULLETS = [
  "300 questões objetivas",
  "4 áreas em um único PDF",
  "Gabarito ao final de cada bloco",
];

export const ICON_STRIP = [
  { icon: "devices", label: "Estude no dispositivo que preferir" },
  { icon: "file", label: "Acesso digital em PDF" },
  { icon: "wallet", label: "Prático e acessível para estudar" },
] as const;

export const PAIN_CARDS = [
  {
    icon: "compass",
    title: "Estudar sem direção",
    body: "Ler muito conteúdo sem treinar questões deixa o estudo lento e sem foco no que realmente cai na prova.",
  },
  {
    icon: "clock",
    title: "Pouco tempo para revisar",
    body: "Com blocos por matéria e gabarito ao final, você revisa rápido e identifica exatamente onde errou.",
  },
  {
    icon: "target",
    title: "Não saber o que priorizar",
    body: "Conhecimentos Específicos concentram 140 questões. Treinar por área mostra onde investir mais energia.",
  },
] as const;

export const HOW_TO_STEPS = [
  {
    title: "Escolha a matéria",
    body: "Comece pela área que você tem mais dificuldade ou siga a ordem do edital.",
  },
  {
    title: "Marque suas respostas",
    body: "Resolva as questões objetivas no seu ritmo, anotando cada alternativa escolhida.",
  },
  {
    title: "Confira o gabarito",
    body: "Ao final de cada bloco, compare suas respostas e veja o que acertou.",
  },
  {
    title: "Revise e tente novamente",
    body: "Volte às questões erradas, revise o conteúdo e refaça o bloco para fixar.",
  },
] as const;

export const INCLUDED_ITEMS = [
  "300 questões objetivas em PDF",
  "60 questões de Língua Portuguesa",
  "50 questões de Raciocínio Lógico",
  "50 questões de Informática",
  "140 questões de Conhecimentos Específicos",
  "Gabarito ao final de cada bloco",
  "Acesso imediato após a compra",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Como recebo o material?",
    answer:
      "Após a confirmação do pagamento, você recebe o acesso ao arquivo em PDF por e-mail. O material é digital e pode ser aberto no celular, tablet ou computador.",
  },
  {
    question: "Preciso estudar pelo celular?",
    answer:
      "Não. Você escolhe o dispositivo que preferir. O PDF funciona bem em celular, tablet e computador, e também pode ser impresso para estudar no papel.",
  },
  {
    question: "É a prova oficial?",
    answer:
      "Não. Este é um material independente de estudos, sem vínculo com a Prefeitura de Imperatriz-MA ou com a banca organizadora. As questões servem para treino e revisão.",
  },
  {
    question: "As questões garantem que vou acertar na prova?",
    answer:
      "Não. O simulado é uma ferramenta de treino e não garante aprovação. O resultado depende do seu estudo, dedicação e desempenho na prova oficial.",
  },
  {
    question: "Como funciona o pagamento, reembolso e suporte?",
    answer:
      "O pagamento é processado com segurança pela Kiwify, com opções de cartão e Pix. Em caso de dúvidas sobre a compra, reembolso ou acesso, o suporte é feito pelo contato informado no checkout.",
  },
] as const;
