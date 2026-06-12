import type { Metadata } from "next"
import ServicesPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Serviços de Funilaria e Martelinho de Ouro",
  description:
    "Remoção de amassados sem pintura, funilaria, pintura, polimento, retoque e reparos estruturais em Presidente Prudente e região. Orçamento grátis pelo WhatsApp e garantia de 90 dias.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços de Funilaria e Martelinho de Ouro em Presidente Prudente",
    description:
      "Remoção de amassados sem pintura, funilaria, pintura, polimento e retoque em Presidente Prudente e região. Garantia de 90 dias.",
    url: "/servicos",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
