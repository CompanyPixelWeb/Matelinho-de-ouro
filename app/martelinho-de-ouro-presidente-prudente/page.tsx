import type { Metadata } from "next"
import { LocalLandingPage, type LandingData } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: { absolute: "Martelinho de Ouro em Presidente Prudente | Desamassamento Sem Pintura" },
  description:
    "Martelinho de ouro em Presidente Prudente: remoção de amassados sem pintura, sem massa e com a pintura original preservada. Orçamento grátis pelo WhatsApp e garantia de 90 dias.",
  alternates: { canonical: "/martelinho-de-ouro-presidente-prudente" },
  openGraph: {
    title: "Martelinho de Ouro em Presidente Prudente",
    description:
      "Remoção de amassados sem pintura em Presidente Prudente, preservando a pintura de fábrica. Garantia de 90 dias.",
    url: "/martelinho-de-ouro-presidente-prudente",
  },
}

const data: LandingData = {
  slug: "martelinho-de-ouro-presidente-prudente",
  breadcrumbLabel: "Martelinho de Ouro",
  serviceSchemaName: "Martelinho de ouro (remoção de amassados sem pintura)",
  h1: "Martelinho de Ouro em Presidente Prudente",
  subtitle:
    "Remoção de amassados sem pintura, sem massa e sem repintura — preservando a pintura original do seu carro. Atendemos Presidente Prudente e toda a região.",
  intro: [
    {
      heading: "O que é o martelinho de ouro?",
      paragraphs: [
        "Martelinho de ouro é o nome popular da técnica de reparo de amassados sem pintura (conhecida internacionalmente como paintless dent repair). Em vez de aplicar massa plástica e repintar a peça, o profissional trabalha o metal por dentro do painel, com ferramentas específicas, até devolver a superfície ao formato original de fábrica.",
        "O resultado é um reparo limpo, rápido e que mantém a pintura original do veículo intacta. Para quem mora em Presidente Prudente, isso significa resolver aquele amassado do estacionamento, da batida leve no trânsito ou da porta do vizinho sem perder o valor de revenda do carro.",
      ],
    },
    {
      heading: "Quando o martelinho de ouro é indicado?",
      paragraphs: [
        "A técnica funciona muito bem para amassados em que a pintura continua intacta: marcas de porta, pequenas batidas, amassados de granizo, vincos em capô, teto, portas, para-lamas e porta-malas. Como não há repintura, o reparo costuma ficar pronto em poucas horas.",
        "Quando o dano trinca a pintura, há ferrugem ou o metal foi muito esticado, indicamos a funilaria com pintura, sempre com igualação de cor computadorizada. Na avaliação gratuita pelo WhatsApp, dizemos com honestidade qual técnica é a mais indicada para o seu caso.",
      ],
    },
    {
      heading: "Martelinho de ouro em Presidente Prudente e região",
      paragraphs: [
        "Nossa oficina fica na R. Ângelo Calabreta, 299, no bairro Vila Aristarcho, em Presidente Prudente. Atendemos clientes de toda a região — Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia — que buscam um reparo de qualidade sem precisar ir até a capital.",
        "Já recuperamos mais de 100 carros nos últimos 12 meses, sempre com avaliação gratuita, prazo combinado antes de começar e garantia de 90 dias por escrito.",
      ],
    },
  ],
  benefits: [
    { title: "Preserva a pintura original", description: "Sem massa e sem repintura: a pintura de fábrica é mantida, protegendo o valor de revenda." },
    { title: "Reparo rápido", description: "A maioria dos amassados fica pronta em poucas horas, não em dias." },
    { title: "Custo menor", description: "Sem pintura, o serviço costuma sair bem mais barato que a funilaria tradicional." },
    { title: "Garantia de 90 dias", description: "Todo serviço sai com garantia por escrito." },
    { title: "Avaliação grátis", description: "Mande fotos pelo WhatsApp e receba um orçamento sem compromisso." },
    { title: "Atende toda a região", description: "Presidente Prudente e cidades vizinhas do Oeste Paulista." },
  ],
  process: [
    { title: "Envie fotos pelo WhatsApp", description: "Você manda fotos do amassado e recebe uma estimativa inicial." },
    { title: "Avaliação na oficina", description: "Confirmamos a técnica ideal e o valor exato, sem surpresas." },
    { title: "Reparo sem pintura", description: "Trabalhamos o metal por dentro até recuperar o formato original." },
    { title: "Entrega com garantia", description: "Você retira o carro pronto, com garantia de 90 dias." },
  ],
  showcaseIds: ["byd-amassado", "porta-malas", "porta-malas-pequeno", "lateral", "capo", "parachoque"],
  faqs: [
    {
      question: "Quanto custa um martelinho de ouro em Presidente Prudente?",
      answer:
        "O valor começa a partir de R$ 200 e depende do tamanho, da localização e da quantidade de amassados. O orçamento é gratuito: basta enviar fotos pelo WhatsApp.",
    },
    {
      question: "O martelinho de ouro estraga a pintura?",
      answer:
        "Não. A técnica é feita por dentro do painel, sem lixar nem repintar, justamente para preservar a pintura original de fábrica.",
    },
    {
      question: "Todo amassado pode ser reparado sem pintura?",
      answer:
        "A maioria sim, desde que a pintura esteja intacta. Quando há trincos na tinta ou o metal foi muito esticado, indicamos a funilaria com pintura.",
    },
    {
      question: "Quanto tempo demora?",
      answer: "Dependendo do tamanho e do local, o reparo costuma levar de 2 a 4 horas.",
    },
  ],
  whatsappMessage: "Olá! Gostaria de um orçamento de martelinho de ouro em Presidente Prudente.",
}

export default function Page() {
  return <LocalLandingPage data={data} />
}
