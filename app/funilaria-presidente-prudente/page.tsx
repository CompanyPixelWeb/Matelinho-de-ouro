import type { Metadata } from "next"
import { LocalLandingPage, type LandingData } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: { absolute: "Funilaria em Presidente Prudente | Funilaria e Pintura Automotiva" },
  description:
    "Funilaria e pintura em Presidente Prudente com igualação de cor computadorizada. Reparos estruturais, troca de peças e pintura idêntica à original. Orçamento grátis no WhatsApp.",
  alternates: { canonical: "/funilaria-presidente-prudente" },
  openGraph: {
    title: "Funilaria em Presidente Prudente",
    description: "Funilaria e pintura automotiva profissional em Presidente Prudente, com garantia de 90 dias.",
    url: "/funilaria-presidente-prudente",
  },
}

const data: LandingData = {
  slug: "funilaria-presidente-prudente",
  breadcrumbLabel: "Funilaria",
  serviceSchemaName: "Funilaria e pintura automotiva",
  h1: "Funilaria em Presidente Prudente",
  subtitle:
    "Funilaria e pintura profissional com igualação de cor computadorizada. Recuperamos batidas, riscos profundos e danos estruturais com acabamento idêntico ao original.",
  intro: [
    {
      heading: "Funilaria e pintura com acabamento original",
      paragraphs: [
        "Quando o dano vai além de um amassado simples — com a pintura trincada, peças deformadas ou impacto estrutural — a solução é a funilaria com pintura. Na nossa oficina em Presidente Prudente, fazemos o reparo completo: do reparo da lataria à pintura final, com igualação de cor por computador para que o resultado fique idêntico à pintura de fábrica.",
        "Usamos tinta automotiva de alta qualidade e processo de preparação completo (lixamento, primer, pintura e polimento final), garantindo um acabamento sem diferença de tonalidade e durável.",
      ],
    },
    {
      heading: "Quando você precisa de funilaria",
      paragraphs: [
        "A funilaria com pintura é indicada para batidas com a pintura comprometida, riscos profundos que atingem o metal, para-choques e para-lamas danificados, portas amassadas com trincos na tinta e qualquer dano em que a repintura seja inevitável. Também fazemos troca de peças (para-choques, para-lamas, portas) com pintura e acabamento para igualar ao restante do veículo.",
        "Quando o dano permite, sempre oferecemos a alternativa do martelinho de ouro (sem pintura), que é mais rápida e econômica. A escolha é transparente e feita junto com você.",
      ],
    },
    {
      heading: "Funilaria para Presidente Prudente e região",
      paragraphs: [
        "Atendemos motoristas de Presidente Prudente e das cidades vizinhas — Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia — que buscam funilaria de qualidade sem precisar deslocar o carro até a capital.",
        "Trabalhamos com as principais seguradoras e oferecemos avaliação gratuita. Todo serviço sai com garantia de 90 dias por escrito.",
      ],
    },
  ],
  benefits: [
    { title: "Igualação de cor", description: "Cor calculada por computador para acabamento idêntico ao original." },
    { title: "Reparo estrutural", description: "Recuperação de danos maiores com segurança e alinhamento." },
    { title: "Troca de peças", description: "Para-choques, para-lamas e portas, com pintura final." },
    { title: "Trabalha com seguro", description: "Atendemos as principais seguradoras do mercado." },
    { title: "Pintura durável", description: "Tinta automotiva de alta qualidade e proteção final." },
    { title: "Garantia de 90 dias", description: "Serviço garantido por escrito." },
  ],
  process: [
    { title: "Avaliação do dano", description: "Analisamos a lataria, a pintura e a estrutura do veículo." },
    { title: "Orçamento transparente", description: "Você sabe o que será feito e quanto vai custar antes de começar." },
    { title: "Reparo e pintura", description: "Funilaria, igualação de cor e pintura com acabamento original." },
    { title: "Polimento e entrega", description: "Finalização, proteção e entrega com garantia de 90 dias." },
  ],
  showcaseIds: ["capo", "lateral", "parachoque", "byd-amassado", "porta-malas"],
  faqs: [
    {
      question: "A pintura fica igual à original?",
      answer:
        "Sim. Usamos igualação de cor computadorizada para que a pintura nova fique idêntica à cor de fábrica do veículo.",
    },
    {
      question: "Quanto tempo demora uma funilaria?",
      answer: "Serviços de funilaria com pintura levam, em média, de 3 a 5 dias úteis, dependendo da extensão do dano.",
    },
    {
      question: "Vocês trabalham com seguro?",
      answer: "Sim, atendemos as principais seguradoras e ajudamos com a documentação do sinistro.",
    },
    {
      question: "Qual a garantia do serviço?",
      answer: "Oferecemos garantia de 90 dias para todos os serviços de funilaria e pintura.",
    },
  ],
  whatsappMessage: "Olá! Gostaria de um orçamento de funilaria e pintura em Presidente Prudente.",
}

export default function Page() {
  return <LocalLandingPage data={data} />
}
