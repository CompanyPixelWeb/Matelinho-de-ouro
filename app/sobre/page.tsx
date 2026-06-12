import type { Metadata } from "next"
import AboutPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça o Martelinho de Ouro em Presidente Prudente: mais de 10 anos recuperando carros com funilaria, pintura, polimento e remoção de amassados sem pintura. Atendemos toda a região.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o Martelinho de Ouro em Presidente Prudente",
    description:
      "Mais de 10 anos de experiência em funilaria, pintura e martelinho de ouro em Presidente Prudente e região.",
    url: "/sobre",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
