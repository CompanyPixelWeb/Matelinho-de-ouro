"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, FileSearch, Calendar, CheckCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5518991246746"

const steps = [
  {
    icon: MessageSquare,
    title: "Agende pelo WhatsApp",
    description: "Entre em contato conosco pelo WhatsApp de forma rápida e prática.",
  },
  {
    icon: FileSearch,
    title: "Avaliação gratuita",
    description: "Receba um orçamento online sem compromisso. Envie fotos e detalhes.",
  },
  {
    icon: Calendar,
    title: "Serviço agendado",
    description: "Marcamos o melhor horário para você. Registramos antes e depois.",
  },
  {
    icon: CheckCircle,
    title: "Entrega e garantia",
    description: "Seu carro pronto com garantia de 90 dias em todos os serviços.",
  },
]

export function HowItWorks() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de um orçamento grátis.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            Como funciona ? 
          </h2>

          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Processo simples e transparente do primeiro contato até a entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative bg-[#F6F7F9] rounded-xl p-6 hover:shadow-lg transition-all">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C99B3B] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 mt-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 text-[#0B3D91]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={openWhatsApp}
            className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
          >
            Quero orçamento grátis
          </Button>
        </div>
      </div>
    </section>
  )
}
