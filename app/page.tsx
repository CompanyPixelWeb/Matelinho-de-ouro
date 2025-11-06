import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from "@/components/how-it-works"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LocalBusinessSchema, ReviewSchema } from "@/components/structured-data"

const reviews = [
  { name: "Carlos Silva", rating: 5, text: "Excelente serviço! Meu carro ficou perfeito.", date: "2024-12-01" },
  {
    name: "Maria Santos",
    rating: 5,
    text: "Recomendo muito! Tiraram um amassado que achei impossível.",
    date: "2024-11-15",
  },
  { name: "João Oliveira", rating: 5, text: "Melhor funilaria da região.", date: "2024-11-10" },
]

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <ReviewSchema reviews={reviews} />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <BeforeAfterGallery />
        <Testimonials />
        <HowItWorks />
        <ContactForm />
        <Footer />
        <Toaster />
      </main>
    </>
  )
}
