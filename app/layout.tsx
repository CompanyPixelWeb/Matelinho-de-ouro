import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Martelinho de Ouro — Funilaria Profissional | Agende pelo WhatsApp",
  description:
    "Funilaria profissional. Remoção de amassados, polimento e pintura. Agende pelo WhatsApp e receba orçamento rápido.",
  generator: "Pixelweb",
  keywords: [
    "funilaria",
    "martelinho de ouro",
    "polimento automotivo",
    "pintura automotiva",
    "remoção de amassados",
    "funilaria São Paulo",
  ],
  authors: [{ name: "Martelinho de Ouro" }],
  openGraph: {
    title: "Martelinho de Ouro — Funilaria Profissional",
    description:
      "Funilaria profissional. Remoção de amassados, polimento e pintura. Agende pelo WhatsApp e receba orçamento rápido.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.seudominio.com",
    siteName: "Martelinho de Ouro",
    images: [
      {
        url: "favicon.svg",
        width: 1200,
        height: 630,
        alt: "Martelinho de Ouro - Funilaria Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martelinho de Ouro — Funilaria Profissional",
    description: "Funilaria profissional. Remoção de amassados, polimento e pintura.",
    images: ["favicon.svg"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="favicon.svg" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
