"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQSchema } from "@/components/structured-data"
import type { Faq } from "@/lib/faqs"

export function FaqSection({
  faqs,
  title = "Dúvidas Frequentes",
  subtitle = "Tudo o que você precisa saber antes de trazer seu carro.",
}: {
  faqs: Faq[]
  title?: string
  subtitle?: string
}) {
  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <FAQSchema faqs={faqs} />
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">{title}</h2>
          <p className="text-lg text-[#6B7280] text-pretty">{subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F6F7F9] rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left font-semibold text-[#111827] hover:text-[#C99B3B] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
