import { siteConfig, absoluteUrl } from "@/lib/site-config"

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

/**
 * Dado estruturado principal do negócio (lido pelo Google para o pacote local / mapa).
 * NAP, geo e horário vêm de lib/site-config.ts — fonte única da verdade.
 * Sem aggregateRating: só adicionar quando houver avaliações REAIS sincronizadas.
 */
export function LocalBusinessSchema() {
  const { address, geo } = siteConfig
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: siteConfig.cities.map((city) => ({ "@type": "City", name: city })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "15:00",
      },
    ],
    sameAs: [siteConfig.googleMapsUrl, siteConfig.instagram].filter(Boolean),
  }

  return <JsonLd data={schema} />
}

export function ServiceSchema({ service }: { service: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service,
    provider: {
      "@type": "AutoBodyShop",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: siteConfig.cities.map((city) => ({ "@type": "City", name: city })),
  }

  return <JsonLd data={schema} />
}

/** FAQPage — usar com perguntas/respostas REAIS exibidas na página. */
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; path: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }

  return <JsonLd data={schema} />
}

/**
 * Avaliações — SOMENTE com depoimentos REAIS de clientes (ex.: do Google Meu Negócio).
 * Não usar com dados fictícios: viola as diretrizes do Google e pode gerar penalidade.
 */
export function ReviewSchema({
  reviews,
}: {
  reviews: Array<{ name: string; rating: number; text: string; date: string }>
}) {
  const schema = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "AutoBodyShop",
      name: siteConfig.name,
    },
    author: { "@type": "Person", name: review.name },
    reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: "5" },
    reviewBody: review.text,
    datePublished: review.date,
  }))

  return <JsonLd data={schema} />
}
