/**
 * Pares antes/depois REAIS (fotos já existentes em /public).
 * Reutilizados nas landing pages, na página de casos e onde houver galeria.
 */

export type ShowcaseItem = {
  id: string
  title: string
  service: string
  city: string
  before: string
  after: string
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "byd-amassado",
    title: "Remoção de amassado em BYD",
    service: "Martelinho de ouro (sem pintura)",
    city: "Presidente Prudente",
    before: "/byd-amassado.jpg",
    after: "/byd-arrumado.jpg",
  },
  {
    id: "capo",
    title: "Reparo de capô amassado",
    service: "Funilaria e pintura",
    city: "Presidente Prudente",
    before: "/Capo-amassado.jpg",
    after: "/Capo-arrumado.jpg",
  },
  {
    id: "porta-malas",
    title: "Amassado no porta-malas",
    service: "Martelinho de ouro (sem pintura)",
    city: "Presidente Prudente",
    before: "/porta-malas-amassado.jpg",
    after: "/porta-malas.jpg",
  },
  {
    id: "lateral",
    title: "Funilaria de lateral amassada",
    service: "Funilaria e pintura",
    city: "Presidente Prudente",
    before: "/amassado-lateral.jpg",
    after: "/amssado-lateral-pronto.jpg",
  },
  {
    id: "porta-malas-pequeno",
    title: "Pequeno amassado no porta-malas",
    service: "Martelinho de ouro (sem pintura)",
    city: "Presidente Prudente",
    before: "/pequeno-amassado-portamala.jpg",
    after: "/pequeno-amassado-portamala-pronto.jpg",
  },
  {
    id: "parachoque",
    title: "Reparo de para-choque",
    service: "Funilaria e troca de peça",
    city: "Presidente Prudente",
    before: "/parachoque.jpg",
    after: "/parachoque-pronto.jpg",
  },
  {
    id: "polimento",
    title: "Polimento de pintura arranhada",
    service: "Polimento automotivo",
    city: "Presidente Prudente",
    before: "/Polimento-arranhado.jpg",
    after: "/Polimento.jpg",
  },
]

export function getShowcase(ids: string[]): ShowcaseItem[] {
  return ids.map((id) => showcaseItems.find((item) => item.id === id)).filter(Boolean) as ShowcaseItem[]
}
