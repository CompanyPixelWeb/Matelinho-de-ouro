import { ShieldCheck, Clock, Wallet, Sparkles, MapPin, MessageCircle } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "Sem pintura e sem massa",
    description:
      "A técnica do martelinho de ouro preserva a pintura original de fábrica do seu carro, mantendo o valor de revenda.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 90 dias",
    description: "Todos os serviços de funilaria, polimento e reparo têm garantia de 90 dias por escrito.",
  },
  {
    icon: Clock,
    title: "Reparo rápido",
    description: "A maioria dos amassados é resolvida em poucas horas, sem você ficar dias sem o carro.",
  },
  {
    icon: Wallet,
    title: "Preço justo e orçamento grátis",
    description: "Avaliação sem compromisso pelo WhatsApp. Você sabe quanto vai pagar antes de fechar.",
  },
  {
    icon: MapPin,
    title: "Atende Prudente e região",
    description: "Atendemos Presidente Prudente, Álvares Machado, Pirapozinho, Regente Feijó e cidades vizinhas.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    description: "Tire dúvidas, envie fotos do dano e agende tudo de forma prática, sem precisar sair de casa.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            Por que escolher nosso Martelinho de Ouro?
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Mais de 100 carros recuperados em Presidente Prudente e região nos últimos 12 meses, com técnica,
            garantia e atendimento honesto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-[#C99B3B]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#C99B3B]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{reason.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
