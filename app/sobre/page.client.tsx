"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield } from "lucide-react"
import { BreadcrumbSchema } from "@/components/structured-data"

const WHATSAPP_NUMBER = "5511999999999"

const team = [
  {
    name: "Roberto Silva",
    role: "Chefe de Funilaria",
    photo: "/placeholder.svg?key=team1",
    description: "15 anos de experiência em reparos estruturais e funilaria.",
  },
  {
    name: "Carlos Mendes",
    role: "Técnico Especialista",
    photo: "/placeholder.svg?key=team2",
    description: "Especialista em martelinho de ouro e polimento automotivo.",
  },
  {
    name: "Ana Paula",
    role: "Atendimento ao Cliente",
    photo: "/placeholder.svg?key=team3",
    description: "Responsável pelo atendimento e relacionamento com clientes.",
  },
]

const stats = [
  { icon: Users, value: "100+", label: "Carros recuperados/ano" },
  { icon: Clock, value: "10+", label: "Anos de experiência" },
  { icon: Award, value: "98%", label: "Clientes satisfeitos" },
  { icon: Shield, value: "90", label: "Dias de garantia" },
]

function openWhatsApp() {
  const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação.")
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer")
}

export default function AboutPageClient() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.seudominio.com" },
          { name: "Sobre", url: "https://www.seudominio.com/sobre" },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#F6F7F9] to-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
                Sobre o Martelinho de Ouro
              </h1>
              <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed text-pretty">
                Há mais de 10 anos transformando carros danificados em veículos como novos. Nossa missão é oferecer
                serviços de funilaria e pintura com excelência, rapidez e garantia de qualidade.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C99B3B]/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-[#C99B3B]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F6F7F9]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">Nossa História</h2>
                <div className="space-y-4 text-[#6B7280] leading-relaxed">
                  <p>
                    O Martelinho de Ouro nasceu da paixão por automóveis e do compromisso em oferecer serviços de
                    qualidade excepcional. Fundada em 2014, nossa oficina começou como um pequeno espaço dedicado à
                    técnica de martelinho de ouro.
                  </p>
                  <p>
                    Com o passar dos anos, expandimos nossos serviços para incluir funilaria completa, pintura
                    automotiva, polimento e reparos estruturais. Hoje, somos referência na região em qualidade e
                    atendimento.
                  </p>
                  <p>
                    Nossa equipe é formada por profissionais altamente qualificados, com anos de experiência e
                    treinamento contínuo nas mais modernas técnicas do setor automotivo.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?key=workshop"
                  alt="Oficina Martelinho de Ouro"
                  className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#C99B3B] text-white text-lg px-4 py-2">Desde 2014</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Nossa Equipe</h2>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                Profissionais dedicados e experientes prontos para cuidar do seu veículo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[#111827] mb-1">{member.name}</h3>
                  <p className="text-[#C99B3B] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-[#6B7280]">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F6F7F9]">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">Certificações e Qualidade</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Badge variant="outline" className="text-lg px-6 py-3 border-[#C99B3B] text-[#C99B3B]">
                ISO 9001
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 border-[#C99B3B] text-[#C99B3B]">
                Certificado Técnico
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 border-[#C99B3B] text-[#C99B3B]">
                Garantia 90 dias
              </Badge>
            </div>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Trabalhamos com equipamentos de última geração e produtos de alta qualidade para garantir os melhores
              resultados.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#0B3D91] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Agende uma avaliação</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
              Venha conhecer nossa oficina e equipe. Avaliação gratuita e orçamento sem compromisso.
            </p>
            <Button
              onClick={openWhatsApp}
              className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-6 text-lg font-semibold"
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
