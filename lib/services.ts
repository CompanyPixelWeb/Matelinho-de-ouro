/**
 * Serviços e landing pages locais — reutilizados na home, no menu, nas landing pages e no sitemap.
 */

export type HomeService = {
  title: string
  description: string
  href: string
  icon: "dent" | "paint" | "polish" | "hail" | "wrench" | "swap"
}

export const homeServices: HomeService[] = [
  {
    title: "Remoção de Amassados (Martelinho de Ouro)",
    description:
      "Técnica de desamassamento sem pintura que recupera o painel original do carro, sem massa e sem repintura.",
    href: "/remocao-amassados-presidente-prudente",
    icon: "dent",
  },
  {
    title: "Funilaria e Pintura",
    description:
      "Reparos estruturais completos com pintura automotiva igualada por computador à cor original do veículo.",
    href: "/funilaria-presidente-prudente",
    icon: "paint",
  },
  {
    title: "Polimento Automotivo",
    description:
      "Polimento técnico, cristalização e vitrificação que removem riscos e devolvem o brilho de fábrica à pintura.",
    href: "/polimento-automotivo-presidente-prudente",
    icon: "polish",
  },
  {
    title: "Reparo de Granizo",
    description:
      "Recuperação de carros atingidos por chuva de granizo, com remoção de múltiplos amassados sem repintar o veículo.",
    href: "/chuva-de-granizo-presidente-prudente",
    icon: "hail",
  },
  {
    title: "Retoque de Pintura",
    description:
      "Correção localizada de riscos, lascas e pequenos danos, com igualação de cor para acabamento imperceptível.",
    href: "/servicos#retoque",
    icon: "wrench",
  },
  {
    title: "Troca de Peças",
    description:
      "Substituição de para-choques, para-lamas, portas e outras peças, com pintura e acabamento final.",
    href: "/servicos#troca-pecas",
    icon: "swap",
  },
]

/** Slugs das landing pages locais — fonte para o sitemap. */
export const landingPageSlugs = [
  "martelinho-de-ouro-presidente-prudente",
  "remocao-amassados-presidente-prudente",
  "funilaria-presidente-prudente",
  "polimento-automotivo-presidente-prudente",
  "chuva-de-granizo-presidente-prudente",
] as const
