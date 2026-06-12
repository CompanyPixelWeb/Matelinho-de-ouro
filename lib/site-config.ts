/**
 * FONTE ÚNICA DA VERDADE do site (NAP, URL, geo, horário, serviços, cidades).
 *
 * ⚠️ Quando o domínio próprio for comprado (ex.: martelinhodeouroprudente.com.br),
 *    troque APENAS a constante `url` abaixo. Canonical, sitemap, robots, Open Graph
 *    e Schema (JSON-LD) se atualizam automaticamente porque todos leem daqui.
 */

export const siteConfig = {
  name: "Martelinho de Ouro Presidente Prudente",
  shortName: "Martelinho de Ouro",

  // 🔁 Trocar para o domínio próprio quando existir.
  url: "https://matelinho-de-ouro.vercel.app",

  description:
    "Especialistas em martelinho de ouro em Presidente Prudente. Remoção de amassados sem pintura, funilaria, polimento e recuperação automotiva com atendimento rápido pelo WhatsApp.",

  // Contato
  whatsapp: "5518991246746",
  phone: "+5518991246746",
  phoneDisplay: "+55 (18) 99124-6746",
  email: "contato@martelinhodeouro.com.br",
  instagram: "https://instagram.com/",
  // Link de compartilhamento do Google Maps / Perfil da Empresa
  googleMapsUrl: "https://share.google/xEwktvGW3u7MiRYiI",

  // Endereço real (NAP) — deve ser IDÊNTICO em todo lugar (site, Schema, Google Meu Negócio, diretórios)
  address: {
    street: "R. Ângelo Calabreta, 299",
    neighborhood: "Vila Aristarcho",
    city: "Presidente Prudente",
    region: "SP",
    regionName: "São Paulo",
    postalCode: "19013-320",
    country: "BR",
  },

  // Coordenadas — Presidente Prudente / Vila Aristarcho.
  // (Para precisão máxima no Schema, refine no Google Maps: clique no ponto exato da oficina.)
  geo: {
    latitude: "-22.1256",
    longitude: "-51.3889",
  },

  // Horário de funcionamento (PADRONIZADO — usar este em todo o site e no Schema)
  hours: {
    weekdays: "Segunda a Sexta: 07h00 – 19h00",
    saturday: "Sábado: 07h00 – 15h00",
    sunday: "Domingo: Fechado",
    whatsapp: "Atendimento WhatsApp: 24 horas",
    // Formato Schema.org
    schema: ["Mo-Fr 07:00-19:00", "Sa 07:00-15:00"],
  },

  priceRange: "$$",

  // Cidades atendidas (Presidente Prudente e região) — usadas em conteúdo, schema e SEO local
  cities: [
    "Presidente Prudente",
    "Álvares Machado",
    "Pirapozinho",
    "Regente Feijó",
    "Martinópolis",
    "Presidente Bernardes",
    "Santo Anastácio",
    "Rancharia",
  ],
} as const

/** URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${clean === "/" ? "" : clean}`
}

/** Abre o WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}
