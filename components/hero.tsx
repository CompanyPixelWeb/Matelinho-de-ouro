"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const WHATSAPP_NUMBER = "5518991246746"

const beforeAfterImages = [
  {
    id: 1,
    service: "Amassados",
    location: "Presidente Prudente, SP",
    before: "/porta-malas-amassado.jpg",
    after: "/porta-malas.jpg",
  },
  {
    id: 2,
    service: "Polimento completo",
    location: "Presidente Prudente, SP",
    before: "/Capo-amassado.jpg",
    after: "/Capo-arrumado.jpg",
  },
  {
    id: 3,
    service: "Amassados",
    location: "Presidente Prudente, SP",
    before: "/byd-amassado.jpg",
    after: "/byd-arrumado.jpg",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useIsMobile();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-[#F6F7F9] to-white relative overflow-hidden">
      {/* Subtle diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C99B3B 0, #C99B3B 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight text-balance">
              Martelinho de Ouro — Recuperamos a aparência do seu carro como novo
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed text-pretty">
              Funilaria, polimento e reparos rápidos com qualidade profissional e garantia. Agende pelo WhatsApp agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => openWhatsApp("Olá! Gostaria de agendar um serviço.")}
                className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
              >
                Agendar pelo WhatsApp
              </Button>
              <Button
                onClick={() => scrollToSection("antes-depois")}
                variant="outline"
                className="border-2 border-[#C99B3B] text-[#C99B3B] hover:bg-[#C99B3B] hover:text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all"
              >
                Ver Antes & Depois
              </Button>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-[4/3]">
                  <img
                    src={beforeAfterImages[currentSlide].before || "/placeholder.svg"}
                    alt={`${beforeAfterImages[currentSlide].service} - Antes`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    Antes
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  <img
                    src={beforeAfterImages[currentSlide].after || "/placeholder.svg"}
                    alt={`${beforeAfterImages[currentSlide].service} - Depois`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-[#C99B3B] text-white px-3 py-1 rounded-lg text-sm font-medium">
                    Depois
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-[#111827]">{beforeAfterImages[currentSlide].service}</p>
                <p className="text-sm text-[#6B7280]">{beforeAfterImages[currentSlide].location}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#111827]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-[#111827]" />
              </button>

              {isMobile ? (
                <div className="absolute bottom-5 right-4 bg-[#0B3D91] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Garantia 90 dias
                </div>
              ) : (
                <div className="absolute top-4 right-4 bg-[#0B3D91] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Garantia 90 dias
                </div>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-[#C99B3B] w-8" : "bg-[#E1E5EA]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E1E5EA]">
          <p className="text-center text-[#6B7280] font-medium">+100 carros recuperados nos últimos 12 meses</p>
        </div>
      </div>
    </section>
  )
}
