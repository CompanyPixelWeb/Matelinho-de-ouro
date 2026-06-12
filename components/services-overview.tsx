import Link from "next/link"
import { ArrowRight, Hammer, PaintBucket, Sparkles, CloudHail, Brush, Replace } from "lucide-react"
import { homeServices, type HomeService } from "@/lib/services"

const iconMap: Record<HomeService["icon"], typeof Hammer> = {
  dent: Hammer,
  paint: PaintBucket,
  polish: Sparkles,
  hail: CloudHail,
  wrench: Brush,
  swap: Replace,
}

export function ServicesOverview() {
  return (
    <section id="servicos" className="scroll-mt-24 py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            Serviços Especializados em Presidente Prudente
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Do amassado simples à recuperação completa de funilaria e pintura. Escolha o serviço e veja todos os
            detalhes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-[#F6F7F9] rounded-xl p-6 hover:shadow-xl transition-all border border-transparent hover:border-[#C99B3B]/30"
              >
                <div className="w-14 h-14 bg-[#0B3D91]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#0B3D91]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#C99B3B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-[#C99B3B] font-semibold text-sm">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
