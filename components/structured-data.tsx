export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Martelinho de Ouro",
    description: "Funilaria profissional e rápida. Remoção de amassados, polimento e pintura automotiva.",
    telephone: "+5511999999999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 123",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "00000-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-23.5505",
      longitude: "-46.6333",
    },
    url: "https://www.seudominio.com",
    openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-13:00",
    priceRange: "$$",
    image: "https://www.seudominio.com/og-image.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "100",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({ service }: { service: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service,
    provider: {
      "@type": "AutoRepair",
      name: "Martelinho de Ouro",
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Funilaria",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ReviewSchema({
  reviews,
}: { reviews: Array<{ name: string; rating: number; text: string; date: string }> }) {
  const schema = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "AutoRepair",
      name: "Martelinho de Ouro",
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
    },
    reviewBody: review.text,
    datePublished: review.date,
  }))

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
