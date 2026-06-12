import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Wrench } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import { cases, getCase } from "@/lib/cases"

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCase(params.slug)
  if (!study) return {}
  return {
    title: { absolute: `${study.metaTitle} | Martelinho de Ouro` },
    description: study.description,
    alternates: { canonical: `/casos/${study.slug}` },
    openGraph: {
      title: study.metaTitle,
      description: study.description,
      url: `/casos/${study.slug}`,
      images: [{ url: study.after, alt: `${study.title} — depois do reparo` }],
    },
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug)
  if (!study) notFound()

  const cta = whatsappLink(`Olá! Vi o caso "${study.title}" e quero um resultado parecido para o meu carro.`)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", path: "/" },
          { name: "Casos", path: "/casos" },
          { name: study.title, path: `/casos/${study.slug}` },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <article className="py-12 md:py-16 bg-white">
          <div className="container-custom max-w-3xl">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#C99B3B] transition-colors text-sm font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para todos os casos
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
              {study.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-[#6B7280] mb-8">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#C99B3B]" />
                {study.neighborhood}, {study.city}
              </span>
              <span className="inline-flex items-center gap-1">
                <Wrench className="w-4 h-4 text-[#C99B3B]" />
                {study.service}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#C99B3B]" />
                {study.duration}
              </span>
            </div>

            {/* Antes e depois */}
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src={study.before}
                  alt={`${study.title} antes do reparo — Martelinho de Ouro em ${study.city}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 384px"
                  className="object-cover"
                  priority
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Antes
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={study.after}
                  alt={`${study.title} depois do reparo — Martelinho de Ouro em ${study.city}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 384px"
                  className="object-cover"
                  priority
                />
                <span className="absolute top-2 left-2 bg-[#C99B3B] text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Depois
                </span>
              </div>
            </div>

            <p className="text-lg text-[#374151] leading-relaxed mb-8">{study.summary}</p>

            <div className="space-y-8 text-[#374151] leading-relaxed text-base md:text-lg">
              {study.content.map((block) => (
                <div key={block.heading} className="space-y-3">
                  <h2 className="text-2xl font-bold text-[#111827]">{block.heading}</h2>
                  {block.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-14 bg-[#0B3D91] text-white">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Quer um resultado assim no seu carro?
            </h2>
            <p className="text-lg mb-8 text-white/90 text-pretty">
              Envie fotos do dano pelo WhatsApp e receba um orçamento gratuito. Atendemos {siteConfig.address.city} e
              região.
            </p>
            <a
              href={cta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
            >
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
