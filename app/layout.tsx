import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Martelinho de Ouro em Presidente Prudente | Remoção de Amassados Sem Pintura",
    template: "%s | Martelinho de Ouro Presidente Prudente",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Pixelweb",
  keywords: [
    "martelinho de ouro presidente prudente",
    "desamassamento sem pintura presidente prudente",
    "remoção de amassados presidente prudente",
    "funilaria presidente prudente",
    "martelinho de ouro prudente",
    "polimento automotivo presidente prudente",
    "funilaria e pintura presidente prudente",
    "reparo de granizo presidente prudente",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Martelinho de Ouro em Presidente Prudente",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Martelinho de Ouro em Presidente Prudente",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: { google: "COLE_AQUI_O_CODIGO_DO_SEARCH_CONSOLE" }, // configurar ao conectar o Search Console
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
