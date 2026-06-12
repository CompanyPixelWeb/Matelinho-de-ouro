import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { siteConfig, absoluteUrl, whatsappLink } from "@/lib/site-config"
import { posts, getPost } from "@/lib/blog"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: { absolute: `${post.metaTitle} | Martelinho de Ouro Presidente Prudente` },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [{ url: post.cover, alt: post.title }],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  }
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" })

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.description,
    image: absoluteUrl(post.cover),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/opengraph-image") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
  }

  const cta = whatsappLink("Olá! Li o artigo no site e gostaria de um orçamento.")
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <article className="py-12 md:py-16 bg-white">
          <div className="container-custom max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#C99B3B] transition-colors text-sm font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>

            <span className="inline-block bg-[#C99B3B]/10 text-[#C99B3B] px-3 py-1 rounded-full text-xs font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#6B7280] mb-8">
              <span>{dateFormatter.format(new Date(post.datePublished))}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingMinutes} min de leitura
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-8 text-[#374151] leading-relaxed text-base md:text-lg">
              {post.content.map((block) => (
                <div key={block.heading} className="space-y-3">
                  <h2 className="text-2xl font-bold text-[#111827]">{block.heading}</h2>
                  {block.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA inline */}
            <div className="mt-10 bg-[#F6F7F9] rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-[#111827] mb-4">
                Precisa de um orçamento em Presidente Prudente?
              </p>
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Relacionados */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-[#111827] mb-4">Leia também</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block bg-white border border-[#E1E5EA] rounded-lg p-4 hover:border-[#C99B3B] transition-colors"
                    >
                      <span className="text-xs text-[#C99B3B] font-semibold">{r.category}</span>
                      <p className="font-semibold text-[#111827] mt-1">{r.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
