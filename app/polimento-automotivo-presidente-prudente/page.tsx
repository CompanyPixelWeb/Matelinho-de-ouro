import type { Metadata } from "next"
import { LocalLandingPage, type LandingData } from "@/components/local-landing-page"

export const metadata: Metadata = {
  title: { absolute: "Polimento Automotivo em Presidente Prudente | Cristalização e Brilho" },
  description:
    "Polimento automotivo em Presidente Prudente: remoção de riscos, restauração do brilho, cristalização e vitrificação. Acabamento espelhado com proteção. Orçamento grátis no WhatsApp.",
  alternates: { canonical: "/polimento-automotivo-presidente-prudente" },
  openGraph: {
    title: "Polimento Automotivo em Presidente Prudente",
    description: "Polimento técnico, cristalização e vitrificação em Presidente Prudente. Brilho de fábrica com proteção.",
    url: "/polimento-automotivo-presidente-prudente",
  },
}

const data: LandingData = {
  slug: "polimento-automotivo-presidente-prudente",
  breadcrumbLabel: "Polimento Automotivo",
  serviceSchemaName: "Polimento automotivo",
  h1: "Polimento Automotivo em Presidente Prudente",
  subtitle:
    "Devolvemos o brilho de fábrica à pintura do seu carro. Polimento técnico que remove riscos, manchas e marcas do tempo, com proteção que dura.",
  intro: [
    {
      heading: "Polimento que recupera o brilho original",
      paragraphs: [
        "Com o tempo, sol, lavagens e poeira deixam a pintura opaca, riscada e com marcas de swirl. O polimento automotivo profissional corrige essas imperfeições, removendo a camada microscópica danificada e devolvendo o brilho original — em muitos casos, deixando o carro com aparência de novo.",
        "Na nossa oficina em Presidente Prudente, o polimento é feito por etapas: lavagem e descontaminação, correção dos riscos com politriz e produtos técnicos, e finalização com proteção. O resultado é uma pintura espelhada e protegida.",
      ],
    },
    {
      heading: "Cristalização, vitrificação e proteção",
      paragraphs: [
        "Além do polimento de correção, oferecemos proteções que prolongam o resultado: cristalização e vitrificação criam uma camada protetora que repele água e sujeira, facilita a lavagem e mantém o brilho por mais tempo. É o acabamento ideal para quem quer manter o carro sempre apresentável.",
        "O polimento também é o passo final de muitos serviços de funilaria e retoque, garantindo que a peça reparada fique uniforme com o restante do veículo.",
      ],
    },
    {
      heading: "Polimento para Presidente Prudente e região",
      paragraphs: [
        "Atendemos clientes de Presidente Prudente e das cidades vizinhas — Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia. Avaliamos o estado da pintura e indicamos o nível de polimento ideal para o seu carro.",
        "O orçamento é gratuito: envie fotos pelo WhatsApp. E, como todo serviço da casa, o polimento tem garantia de 90 dias.",
      ],
    },
  ],
  benefits: [
    { title: "Remove riscos e swirl", description: "Corrige riscos superficiais e médios e marcas de lavagem." },
    { title: "Brilho de fábrica", description: "Recupera o aspecto espelhado da pintura." },
    { title: "Proteção que dura", description: "Cristalização e vitrificação prolongam o resultado." },
    { title: "Facilita a lavagem", description: "A camada protetora repele água e sujeira." },
    { title: "Valoriza o carro", description: "Aparência conservada na hora de vender." },
    { title: "Garantia de 90 dias", description: "Serviço garantido por escrito." },
  ],
  process: [
    { title: "Lavagem e descontaminação", description: "Preparação completa da pintura antes do polimento." },
    { title: "Correção", description: "Remoção de riscos e imperfeições com politriz e produtos técnicos." },
    { title: "Proteção", description: "Aplicação de cristalização ou vitrificação para durabilidade." },
    { title: "Entrega", description: "Pintura espelhada e protegida, com garantia de 90 dias." },
  ],
  showcaseIds: ["polimento", "capo", "lateral"],
  faqs: [
    {
      question: "O polimento remove todos os riscos?",
      answer:
        "O polimento remove riscos superficiais e médios. Riscos profundos que atingem o primer podem exigir retoque de pintura antes do polimento.",
    },
    {
      question: "Com que frequência devo polir o carro?",
      answer:
        "Em geral, um polimento profissional a cada 6 a 12 meses mantém a pintura protegida, dependendo do uso e de onde o carro fica guardado.",
    },
    {
      question: "Qual a diferença entre cristalização e vitrificação?",
      answer:
        "Ambas são proteções aplicadas após o polimento. A vitrificação cria uma camada mais resistente e duradoura; a cristalização é uma proteção de manutenção. Indicamos a melhor opção para o seu caso.",
    },
    {
      question: "O polimento danifica a pintura?",
      answer: "Não, quando feito por profissionais com produtos adequados. Ele remove apenas a camada danificada e protege a pintura.",
    },
  ],
  whatsappMessage: "Olá! Gostaria de um orçamento de polimento automotivo em Presidente Prudente.",
}

export default function Page() {
  return <LocalLandingPage data={data} />
}
