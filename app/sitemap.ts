import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site-config"
import { landingPageSlugs } from "@/lib/services"
import { cases } from "@/lib/cases"
import { posts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/servicos"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/casos"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/sobre"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ]

  const landingPages: MetadataRoute.Sitemap = landingPageSlugs.map((slug) => ({
    url: absoluteUrl(`/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: absoluteUrl(`/casos/${c.slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...landingPages, ...casePages, ...blogPages]
}
