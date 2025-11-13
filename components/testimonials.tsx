"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  city: string
  rating: number
  text: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    city: "Presidente Prudente, SP",
    rating: 5,
    text: "Excelente serviço! Meu carro ficou perfeito, parece novo. Atendimento rápido e profissional.",
    photo: "/Carlos Silva.jpg",
  },
  {
    id: 2,
    name: "Maria Santos",
    city: "Martinópolis, SP",
    rating: 5,
    text: "Recomendo muito! Tiraram um amassado que eu achava impossível. Ficou impecável.",
    photo: "/MariaSantos.jpg",
  },
  {
    id: 3,
    name: "João Oliveira",
    city: "Presidente Prudente, SP",
    rating: 5,
    text: "Melhor funilaria da região. Preço justo e qualidade excepcional. Voltarei sempre!",
    photo: "/happy-man.jpg",
  },
  {
    id: 4,
    name: "Ana Costa",
    city: "Regente, SP",
    rating: 5,
    text: "Atendimento pelo WhatsApp foi super prático. Serviço entregue antes do prazo e com garantia.",
    photo: "/smiling-woman.png",
  },
  {
    id: 5,
    name: "Pedro Almeida",
    city: "Presidente Prudente, SP",
    rating: 5,
    text: "Profissionais competentes e honestos. Explicaram todo o processo e o resultado superou expectativas.",
    photo: "/PedroAlmeida.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Depoimentos reais de clientes satisfeitos com nossos serviços.
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-[#111827]">{testimonial.name}</h3>
                    <p className="text-sm text-[#6B7280]">{testimonial.city}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C99B3B] text-[#C99B3B]" />
                  ))}
                </div>
                <p className="text-[#111827] leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white hover:bg-[#C99B3B] transition-all shadow-md group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#C99B3B] group-hover:text-white transition-colors" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#C99B3B] w-8" : "bg-[#E1E5EA]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white hover:bg-[#C99B3B] transition-all shadow-md group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#C99B3B] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
