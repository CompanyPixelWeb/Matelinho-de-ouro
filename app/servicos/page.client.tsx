"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, DollarSign, CheckCircle } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema } from "@/components/structured-data"

const WHATSAPP_NUMBER = "5518991246746"

const services = [
  {
    id: "funilaria",
    title: "Funilaria e Pintura",
    description: "Reparos estruturais completos com pintura de alta qualidade.",
    process: [
      "Avaliação detalhada dos danos estruturais",
      "Reparação ou substituição de peças danificadas",
      "Preparação da superfície com lixamento e primer",
      "Aplicação de pintura automotiva de alta qualidade",
      "Polimento final e proteção",
    ],
    duration: "3-5 dias",
    priceRange: "A partir de R$ 800",
    faqs: [
      {
        question: "A pintura fica igual à original?",
        answer:
          "Sim, utilizamos tecnologia de igualação de cor computadorizada para garantir que a pintura fique idêntica à original do veículo.",
      },
      {
        question: "Qual a garantia do serviço?",
        answer: "Oferecemos garantia de 90 dias para todos os serviços de funilaria e pintura.",
      },
      {
        question: "Preciso deixar o carro?",
        answer: "Sim, para serviços de funilaria completa é necessário deixar o veículo por 3 a 5 dias úteis.",
      },
    ],
  },
  {
    id: "polimento",
    title: "Polimento Automotivo",
    description: "Restauração do brilho original da pintura, removendo riscos e manchas.",
    process: [
      "Lavagem completa e descontaminação da pintura",
      "Correção de riscos e imperfeições com polimento técnico",
      "Aplicação de cera de proteção premium",
      "Finalização com selante para durabilidade",
    ],
    duration: "1-2 dias",
    priceRange: "A partir de R$ 400",
    faqs: [
      {
        question: "O polimento remove todos os riscos?",
        answer:
          "O polimento remove riscos superficiais e médios. Riscos profundos que atingem o primer podem requerer retoque de pintura.",
      },
      {
        question: "Com que frequência devo polir meu carro?",
        answer:
          "Recomendamos polimento profissional a cada 6-12 meses, dependendo das condições de uso e armazenamento.",
      },
      {
        question: "O polimento danifica a pintura?",
        answer:
          "Não, quando feito por profissionais qualificados com produtos adequados, o polimento é seguro e benéfico para a pintura.",
      },
    ],
  },
  {
    id: "amassados",
    title: "Remoção de Amassados",
    description: "Técnica especializada de martelinho de ouro sem necessidade de pintura.",
    process: [
      "Análise do tipo e localização do amassado",
      "Acesso à parte interna do painel",
      "Aplicação da técnica de martelinho de ouro",
      "Verificação e ajustes finais",
    ],
    duration: "2-4 horas",
    priceRange: "A partir de R$ 200",
    faqs: [
      {
        question: "Todos os amassados podem ser removidos sem pintura?",
        answer:
          "A maioria dos amassados pode ser reparada com martelinho de ouro, exceto quando há dano na pintura ou o metal está muito esticado.",
      },
      {
        question: "O reparo fica perfeito?",
        answer:
          "Sim, quando aplicável, a técnica de martelinho de ouro restaura o painel ao estado original sem necessidade de pintura.",
      },
      {
        question: "Quanto tempo leva?",
        answer: "Dependendo do tamanho e localização, o reparo pode levar de 2 a 4 horas.",
      },
    ],
  },
  {
    id: "retoque",
    title: "Retoque de Pintura",
    description: "Correção localizada de riscos, lascas e pequenos danos na pintura.",
    process: [
      "Limpeza e preparação da área afetada",
      "Aplicação de primer se necessário",
      "Retoque com tinta igualada à cor original",
      "Polimento e acabamento",
    ],
    duration: "1 dia",
    priceRange: "A partir de R$ 150",
    faqs: [
      {
        question: "O retoque fica visível?",
        answer: "Não, utilizamos técnicas profissionais e igualação de cor para que o retoque fique imperceptível.",
      },
      {
        question: "Posso fazer retoque em qualquer cor?",
        answer: "Sim, temos capacidade de igualar qualquer cor de fábrica ou personalizada.",
      },
      {
        question: "Quanto tempo dura o retoque?",
        answer: "Com os cuidados adequados, o retoque tem a mesma durabilidade da pintura original.",
      },
    ],
  },
  {
    id: "estrutural",
    title: "Reparos Estruturais",
    description: "Correção de danos estruturais do chassi e carroceria.",
    process: [
      "Inspeção completa da estrutura do veículo",
      "Medição e alinhamento estrutural",
      "Reparação ou substituição de componentes",
      "Verificação final de segurança",
    ],
    duration: "5-10 dias",
    priceRange: "Sob consulta",
    faqs: [
      {
        question: "Como sei se meu carro tem dano estrutural?",
        answer:
          "Sinais incluem portas desalinhadas, desgaste irregular de pneus, ou se o veículo não anda em linha reta. Fazemos avaliação gratuita.",
      },
      {
        question: "É seguro reparar danos estruturais?",
        answer:
          "Sim, com equipamentos adequados e técnicos qualificados, o reparo estrutural restaura a segurança original do veículo.",
      },
      {
        question: "Vocês trabalham com seguradoras?",
        answer: "Sim, trabalhamos com as principais seguradoras do mercado.",
      },
    ],
  },
  {
    id: "troca-pecas",
    title: "Troca de Peças",
    description: "Substituição de para-choques, para-lamas, portas e outras peças.",
    process: [
      "Orçamento e aquisição da peça original ou compatível",
      "Remoção da peça danificada",
      "Instalação e ajuste da nova peça",
      "Pintura e acabamento se necessário",
    ],
    duration: "2-4 dias",
    priceRange: "Sob consulta",
    faqs: [
      {
        question: "Vocês usam peças originais?",
        answer:
          "Trabalhamos com peças originais e também com alternativas de qualidade certificada, conforme preferência do cliente.",
      },
      {
        question: "A peça nova vem pintada?",
        answer:
          "Geralmente as peças vêm sem pintura. Realizamos a pintura e acabamento para igualar ao restante do veículo.",
      },
      {
        question: "Quanto tempo para conseguir a peça?",
        answer: "Peças comuns: 1-2 dias. Peças específicas ou importadas podem levar até 15 dias.",
      },
    ],
  },
]

function openWhatsApp(service: string) {
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço: ${service}`)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer")
}

export default function ServicesPageClient() {
  return (
    <>
      <ServiceSchema service="Funilaria e Pintura Automotiva" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.seudominio.com" },
          { name: "Serviços", url: "https://www.seudominio.com/servicos" },
        ]}
      />
      <Header />
      <main className="min-h-screen pt-24 md:pt-32">
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#F6F7F9] to-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 text-balance">
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto text-pretty">
              Soluções completas em funilaria e pintura automotiva com qualidade profissional e garantia de 90 dias.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${index !== 0 ? "pt-16 border-t border-[#E1E5EA]" : ""}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">{service.title}</h2>
                    <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-[#111827]">
                        <Clock className="w-5 h-5 text-[#C99B3B]" />
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#111827]">
                        <DollarSign className="w-5 h-5 text-[#C99B3B]" />
                        <span className="font-medium">{service.priceRange}</span>
                      </div>
                      <Badge className="bg-[#C99B3B]/10 text-[#C99B3B] hover:bg-[#C99B3B]/20">Garantia 90 dias</Badge>
                    </div>

                    <div className="bg-[#F6F7F9] rounded-xl p-6 mb-6">
                      <h3 className="font-bold text-lg text-[#111827] mb-4">Processo:</h3>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#C99B3B] flex-shrink-0 mt-0.5" />
                            <span className="text-[#111827]">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp(service.title)}
                      className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-6 text-lg font-semibold"
                    >
                      Solicitar Orçamento
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-bold text-2xl text-[#111827] mb-6">Perguntas Frequentes</h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {service.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-[#F6F7F9] rounded-lg px-6 border-none">
                          <AccordionTrigger className="text-left font-semibold text-[#111827] hover:text-[#C99B3B] hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-[#6B7280] leading-relaxed">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#0B3D91] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Pronto para restaurar seu carro?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
              Entre em contato agora e receba um orçamento gratuito pelo WhatsApp.
            </p>
            <Button
              onClick={() => openWhatsApp("Orçamento geral")}
              className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-6 text-lg font-semibold"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
