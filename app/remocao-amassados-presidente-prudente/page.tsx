import type { Metadata } from "next"
import { LocalLandingPage, type LandingData } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: { absolute: "Remoção de Amassados em Presidente Prudente | Sem Pintura" },
  description:
    "Remoção de amassados em Presidente Prudente sem pintura e sem massa. Marcas de porta, batidas leves e amassados de granizo com acabamento profissional. Orçamento grátis no WhatsApp.",
  alternates: { canonical: "/remocao-amassados-presidente-prudente" },
  openGraph: {
    title: "Remoção de Amassados em Presidente Prudente",
    description: "Desamassamento sem pintura em Presidente Prudente, preservando a pintura original. Garantia de 90 dias.",
    url: "/remocao-amassados-presidente-prudente",
  },
}

const data: LandingData = {
  slug: "remocao-amassados-presidente-prudente",
  breadcrumbLabel: "Remoção de Amassados",
  serviceSchemaName: "Remoção de amassados sem pintura",
  h1: "Remoção de Amassados em Presidente Prudente",
  subtitle:
    "Tirou um amassado no estacionamento ou no trânsito? Recuperamos a lataria do seu carro sem pintura e sem massa, com acabamento profissional e garantia.",
  intro: [
    {
      heading: "Desamassamento sem pintura: a melhor opção para amassados leves",
      paragraphs: [
        "A remoção de amassados sem pintura usa a técnica do martelinho de ouro para devolver a peça ao formato original sem repintar o veículo. É a solução ideal para marcas de porta, batidas leves, amassados de granizo e pequenos vincos em capô, teto, portas, para-lamas e porta-malas.",
        "Como não há lixamento nem repintura, o reparo é mais rápido e mais barato que a funilaria tradicional — e, principalmente, mantém a pintura de fábrica, o que protege o valor de revenda do seu carro em Presidente Prudente.",
      ],
    },
    {
      heading: "Tipos de amassado que reparamos",
      paragraphs: [
        "Atendemos desde o amassado pequeno de porta até danos maiores causados por granizo. Os casos mais comuns na nossa oficina são: marcas de porta de estacionamento, amassados de para-choque, vincos em laterais e portas, amassados no porta-malas e no capô, além de múltiplos amassados de granizo após temporais.",
        "Cada caso é avaliado individualmente. Em alguns danos com a pintura comprometida, a melhor saída é a funilaria com pintura — e nós explicamos isso com transparência antes de qualquer serviço.",
      ],
    },
    {
      heading: "Atendimento em Presidente Prudente e cidades vizinhas",
      paragraphs: [
        "Estamos na Vila Aristarcho, em Presidente Prudente, e recebemos clientes de Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia. O atendimento começa pelo WhatsApp: você envia fotos do amassado e já recebe uma estimativa.",
        "Depois é só agendar o melhor horário. A maioria dos reparos é concluída no mesmo dia, e todos saem com garantia de 90 dias.",
      ],
    },
  ],
  benefits: [
    { title: "Sem repintura", description: "Mantém a pintura original e o valor do carro." },
    { title: "Pronto no mesmo dia", description: "A maioria dos amassados leves é resolvida em poucas horas." },
    { title: "Mais barato", description: "Sem massa e sem tinta, o custo cai bastante." },
    { title: "Acabamento profissional", description: "A peça volta ao formato de fábrica, sem marcas." },
    { title: "Trabalha com seguro", description: "Atendemos as principais seguradoras." },
    { title: "Garantia de 90 dias", description: "Serviço garantido por escrito." },
  ],
  process: [
    { title: "Foto pelo WhatsApp", description: "Envie a foto do amassado e receba uma estimativa rápida." },
    { title: "Avaliação", description: "Confirmamos se o reparo é sem pintura e o valor final." },
    { title: "Reparo", description: "Removemos o amassado preservando a pintura." },
    { title: "Entrega garantida", description: "Carro pronto com garantia de 90 dias." },
  ],
  showcaseIds: ["porta-malas", "porta-malas-pequeno", "byd-amassado", "lateral", "parachoque", "capo"],
  faqs: [
    {
      question: "Quanto custa para tirar um amassado em Presidente Prudente?",
      answer:
        "A partir de R$ 200, variando conforme tamanho, local e quantidade de amassados. Envie fotos pelo WhatsApp para um orçamento gratuito.",
    },
    {
      question: "Dá para tirar amassado sem pintar?",
      answer:
        "Sim, na maioria dos casos em que a pintura está intacta. A técnica do martelinho de ouro recupera a peça sem massa e sem repintura.",
    },
    {
      question: "Quanto tempo leva o reparo?",
      answer: "Amassados leves costumam ficar prontos no mesmo dia, em 2 a 4 horas.",
    },
    {
      question: "Vocês atendem pelo seguro?",
      answer: "Sim, trabalhamos com as principais seguradoras e ajudamos no processo.",
    },
  ],
  whatsappMessage: "Olá! Gostaria de um orçamento para remoção de amassado em Presidente Prudente.",
}

export default function Page() {
  return <LocalLandingPage data={data} />
}
