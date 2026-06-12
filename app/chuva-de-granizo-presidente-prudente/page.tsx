import type { Metadata } from "next"
import { LocalLandingPage, type LandingData } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: { absolute: "Reparo de Granizo em Presidente Prudente | Recuperação Sem Pintura" },
  description:
    "Carro com amassados de granizo em Presidente Prudente? Recuperamos a lataria sem repintura, preservando a pintura original. Atende seguro. Orçamento grátis no WhatsApp.",
  alternates: { canonical: "/chuva-de-granizo-presidente-prudente" },
  openGraph: {
    title: "Reparo de Granizo em Presidente Prudente",
    description: "Recuperação de carros atingidos por granizo sem repintura, em Presidente Prudente e região.",
    url: "/chuva-de-granizo-presidente-prudente",
  },
}

const data: LandingData = {
  slug: "chuva-de-granizo-presidente-prudente",
  breadcrumbLabel: "Reparo de Granizo",
  serviceSchemaName: "Reparo de amassados de granizo sem pintura",
  h1: "Reparo de Granizo em Presidente Prudente",
  subtitle:
    "Seu carro ficou cheio de amassados depois do temporal? Recuperamos a lataria com a técnica do martelinho de ouro, sem repintura e preservando a pintura original.",
  intro: [
    {
      heading: "Granizo no Oeste Paulista: o que fazer com o carro",
      paragraphs: [
        "Os temporais de granizo são comuns na região de Presidente Prudente e costumam deixar o carro com dezenas de pequenos amassados espalhados pelo teto, capô, porta-malas e laterais. A boa notícia é que, na maioria dos casos, esses amassados podem ser removidos sem repintar o veículo.",
        "Usamos a técnica do martelinho de ouro (reparo sem pintura) para trabalhar amassado por amassado, devolvendo a lataria ao formato original. Isso preserva a pintura de fábrica, mantém o valor de revenda e costuma sair bem mais barato que uma funilaria completa.",
      ],
    },
    {
      heading: "Reparo de granizo sem repintura",
      paragraphs: [
        "Cada amassado de granizo é avaliado individualmente. Como a pintura geralmente continua intacta após o granizo, o reparo sem pintura é o mais indicado: mais rápido, mais econômico e sem risco de diferença de tonalidade que a repintura pode causar.",
        "Em danos pontuais com a pintura comprometida, fazemos o reparo combinado (martelinho onde possível e pintura apenas onde necessário). Avaliamos tudo com transparência antes de começar.",
      ],
    },
    {
      heading: "Atende seguro e toda a região",
      paragraphs: [
        "Danos de granizo costumam ser cobertos pelo seguro do veículo. Trabalhamos com as principais seguradoras e ajudamos você no processo do sinistro. Atendemos Presidente Prudente e cidades vizinhas — Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia.",
        "Se o seu carro foi atingido por granizo, envie fotos pelo WhatsApp para uma avaliação gratuita. Todo serviço sai com garantia de 90 dias.",
      ],
    },
  ],
  benefits: [
    { title: "Sem repintura", description: "Remove os amassados preservando a pintura original do carro." },
    { title: "Mais barato que funilaria", description: "Reparo sem tinta reduz bastante o custo total." },
    { title: "Atende seguro", description: "Trabalhamos com as principais seguradoras no caso de granizo." },
    { title: "Preserva o valor", description: "Pintura de fábrica mantida = melhor revenda." },
    { title: "Avaliação grátis", description: "Mande fotos pelo WhatsApp e receba uma estimativa." },
    { title: "Garantia de 90 dias", description: "Serviço garantido por escrito." },
  ],
  process: [
    { title: "Fotos pelo WhatsApp", description: "Você envia fotos dos amassados de granizo." },
    { title: "Avaliação", description: "Mapeamos os amassados e definimos o reparo ideal." },
    { title: "Seguro (se houver)", description: "Ajudamos com o processo do sinistro junto à seguradora." },
    { title: "Reparo sem pintura", description: "Removemos amassado por amassado, com garantia de 90 dias." },
  ],
  showcaseIds: ["capo", "porta-malas", "byd-amassado", "lateral", "porta-malas-pequeno"],
  faqs: [
    {
      question: "Amassado de granizo dá para tirar sem pintar?",
      answer:
        "Sim, na maioria dos casos. Como o granizo geralmente não trinca a pintura, a técnica do martelinho de ouro remove os amassados sem repintura.",
    },
    {
      question: "O seguro cobre reparo de granizo?",
      answer:
        "Na maioria das apólices com cobertura compreensiva, sim. Trabalhamos com as principais seguradoras e ajudamos no processo do sinistro.",
    },
    {
      question: "Quanto custa o reparo de granizo?",
      answer:
        "Depende da quantidade de amassados. Por ser sem pintura, costuma ser bem mais barato que uma funilaria completa. Envie fotos pelo WhatsApp para um orçamento.",
    },
    {
      question: "Quanto tempo demora?",
      answer: "Varia conforme a quantidade de amassados. Após a avaliação, informamos um prazo exato antes de começar.",
    },
  ],
  whatsappMessage: "Olá! Meu carro foi atingido por granizo em Presidente Prudente e gostaria de um orçamento.",
}

export default function Page() {
  return <LocalLandingPage data={data} />
}
