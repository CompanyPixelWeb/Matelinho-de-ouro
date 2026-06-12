import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChoose } from "@/components/why-choose"
import { ServicesOverview } from "@/components/services-overview"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { HowItWorks } from "@/components/how-it-works"
import { RegionSection } from "@/components/region-section"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LocalBusinessSchema } from "@/components/structured-data"
import { homeFaqs } from "@/lib/faqs"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <WhyChoose />
        <ServicesOverview />
        <BeforeAfterGallery />
        <HowItWorks />
        <RegionSection />
        <Testimonials />
        <FaqSection faqs={homeFaqs} />
        <ContactForm />
        <Footer />
        <Toaster />
      </main>
    </>
  )
}
