import { CheckCircle, MapPin, ShieldCheck, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { BeforeAfterPair } from "@/components/before-after-pair"
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/structured-data"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import { getShowcase } from "@/lib/showcase"
import type { Faq } from "@/lib/faqs"

export type LandingData = {
  slug: string
  breadcrumbLabel: string
  serviceSchemaName: string
  h1: string
  subtitle: string
  intro: { heading: string; paragraphs: string[] }[]
  benefits: { title: string; description: string }[]
  process?: { title: string; description: string }[]
  showcaseIds: string[]
  faqs: Faq[]
  whatsappMessage: string
}

export function LocalLandingPage({ data }: { data: LandingData }) {
  const showcase = getShowcase(data.showcaseIds)
  const cta = whatsappLink(data.whatsappMessage)

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema service={data.serviceSchemaName} />
      <BreadcrumbSchema
        items={[
          { name: "Início", path: "/" },
          { name: data.breadcrumbLabel, path: `/${data.slug}` },
        ]}
      />

      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#F6F7F9] to-white">
          <div className="container-custom max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 bg-[#C99B3B]/10 text-[#C99B3B] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Presidente Prudente e região
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">{data.h1}</h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto text-pretty mb-8">{data.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
              >
                Pedir orçamento no WhatsApp
              </a>
              <span className="inline-flex items-center justify-center gap-2 text-[#6B7280] font-medium">
                <ShieldCheck className="w-5 h-5 text-[#C99B3B]" />
                Garantia de 90 dias
              </span>
            </div>
          </div>
        </section>

        {/* Conteúdo (H2 + parágrafos) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom max-w-3xl space-y-10 text-[#374151] leading-relaxed text-base md:text-lg">
            {data.intro.map((block) => (
              <div key={block.heading} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">{block.heading}</h2>
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-12 md:py-16 bg-[#F6F7F9]">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-8 text-center text-balance">
              Vantagens de escolher o Martelinho de Ouro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-7 h-7 text-[#C99B3B] mb-3" />
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{b.title}</h3>
                  <p className="text-[#6B7280]">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        {data.process && data.process.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container-custom max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-8 text-center text-balance">
                Como funciona o serviço
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.process.map((step, i) => (
                  <div key={step.title} className="flex gap-4 bg-[#F6F7F9] rounded-xl p-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#C99B3B] text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827] mb-1">{step.title}</h3>
                      <p className="text-[#6B7280]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Galeria antes/depois real */}
        {showcase.length > 0 && (
          <section className="py-12 md:py-16 bg-[#F6F7F9]">
            <div className="container-custom">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3 text-balance">
                  Resultados reais em Presidente Prudente
                </h2>
                <p className="text-[#6B7280] max-w-2xl mx-auto">
                  Trabalhos feitos na nossa oficina. Veja o antes e depois.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {showcase.map((item) => (
                  <BeforeAfterPair key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FaqSection faqs={data.faqs} />

        {/* CTA final */}
        <section className="py-16 bg-[#0B3D91] text-white">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Faça seu orçamento agora</h2>
            <p className="text-lg mb-3 text-white/90 text-pretty">
              Envie fotos do dano pelo WhatsApp e receba uma estimativa gratuita e sem compromisso.
            </p>
            <p className="inline-flex items-center justify-center gap-2 text-white/80 text-sm mb-8">
              <Clock className="w-4 h-4" />
              {siteConfig.hours.weekdays} · {siteConfig.hours.saturday}
            </p>
            <div>
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
