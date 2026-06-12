import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { posts } from "@/lib/blog"

export const metadata: Metadata = {
  title: { absolute: "Blog | Martelinho de Ouro Presidente Prudente" },
  description:
    "Dicas e respostas sobre martelinho de ouro, funilaria, polimento e reparo de granizo em Presidente Prudente. Quanto custa, como funciona e quando vale a pena.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog do Martelinho de Ouro em Presidente Prudente",
    description: "Dicas sobre martelinho de ouro, funilaria, polimento e reparo de granizo.",
    url: "/blog",
  },
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" })

export default function BlogPage() {
  const ordered = [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#F6F7F9] to-white">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
              Blog do Martelinho de Ouro
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto text-pretty">
              Tire suas dúvidas sobre martelinho de ouro, funilaria, polimento e reparo de granizo em Presidente
              Prudente.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ordered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#C99B3B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-2">
                      <span>{dateFormatter.format(new Date(post.datePublished))}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingMinutes} min
                      </span>
                    </div>
                    <h2 className="font-bold text-lg text-[#111827] mb-2 group-hover:text-[#C99B3B] transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#6B7280] mb-4 flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[#C99B3B] font-semibold text-sm">
                      Ler artigo
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
