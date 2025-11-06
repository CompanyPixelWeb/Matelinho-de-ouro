import type { Metadata } from "next"
import AboutPageClient from "./page.client"

export const metadata: Metadata = {
  title: "Sobre — Martelinho de Ouro | Nossa História",
  description:
    "Conheça a história do Martelinho de Ouro. Mais de 10 anos de experiência em funilaria e pintura automotiva.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
