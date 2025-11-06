import type { Metadata } from "next"
import ServicesPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Serviços — Martelinho de Ouro | Funilaria Profissional",
  description:
    "Conheça nossos serviços: remoção de amassados, polimento, pintura, funilaria e muito mais. Qualidade profissional com garantia.",
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
