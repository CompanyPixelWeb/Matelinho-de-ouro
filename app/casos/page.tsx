import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { cases } from "@/lib/cases"

export const metadata: Metadata = {
  title: { absolute: "Casos Reais de Antes e Depois | Martelinho de Ouro Presidente Prudente" },
  description:
    "Veja casos reais de antes e depois de funilaria, martelinho de ouro e polimento em Presidente Prudente. Resultados de verdade, feitos na nossa oficina.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos Reais de Antes e Depois em Presidente Prudente",
    description: "Trabalhos reais de funilaria, martelinho de ouro e polimento feitos na nossa oficina.",
    url: "/casos",
  },
}

export default function CasesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", path: "/" },
          { name: "Casos", path: "/casos" },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#F6F7F9] to-white">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
              Casos Reais de Antes e Depois
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto text-pretty">
              Trabalhos de verdade feitos na nossa oficina em Presidente Prudente. Veja a transformação de cada carro,
              do amassado ao acabamento final.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/casos/${c.slug}`}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
                >
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={c.before}
                        alt={`${c.title} antes do reparo — Martelinho de Ouro em ${c.city}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        Antes
                      </span>
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={c.after}
                        alt={`${c.title} depois do reparo — Martelinho de Ouro em ${c.city}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-[#C99B3B] text-white px-2 py-1 rounded text-xs font-medium">
                        Depois
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-lg text-[#111827] mb-1 group-hover:text-[#C99B3B] transition-colors">
                      {c.title}
                    </h2>
                    <p className="text-sm text-[#6B7280] flex items-center gap-1 mb-3">
                      <MapPin className="w-4 h-4 text-[#C99B3B]" />
                      {c.neighborhood}, {c.city}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#C99B3B] font-semibold text-sm">
                      Ver caso completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
