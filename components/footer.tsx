import Link from "next/link"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"


const WHATSAPP_NUMBER = "5518991246746" 

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L25 15H15L20 5Z" fill="#C99B3B" />
                <circle cx="20" cy="25" r="10" fill="#C99B3B" />
                <path d="M15 25L20 20L25 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-lg text-[#C99B3B]" style={{ fontFamily: "var(--font-heading)" }}>
                Martelinho de Ouro
              </span>
            </div>
            <p className="text-[#E1E5EA] text-sm leading-relaxed">
              Funilaria profissional e rápida. Recuperamos a aparência do seu carro com qualidade e garantia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contato
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E1E5EA] hover:text-[#C99B3B] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+55 (18) 99124-6746</span>
              </a>   
              
              <div className="flex items-start gap-2 text-[#E1E5EA] hover:text-[#C99B3B] transition-colors">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a 
                  href={'https://share.google/xEwktvGW3u7MiRYiI'}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  >
                    R. Ângelo Calabreta, 299 
                    <br />
                    Vila Aristarcho, Pres. Prudente - SP
                    <br />
                    CEP 19013-320
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Links Rápidos
            </h3>
            <div className="space-y-2 text-sm">
              <Link href="#servicos" className="block text-[#E1E5EA] hover:text-[#C99B3B] transition-colors">
                Serviços
              </Link>
              <Link href="#antes-depois" className="block text-[#E1E5EA] hover:text-[#C99B3B] transition-colors">
                Antes/Depois
              </Link>
              <Link href="#depoimentos" className="block text-[#E1E5EA] hover:text-[#C99B3B] transition-colors">
                Depoimentos
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Horário de Funcionamento
            </h3>
            <div className="space-y-2 text-sm text-[#E1E5EA]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Atendimento WhatsApp</span>
              </div>
              <p className="ml-6">24 horas</p>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Funilária - Segunda a Sexta</span>
              </div> 
              <p className="ml-6">07:00 - 19:00</p>
              <div className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4" />
                <span>Funilária - Sábado</span>
              </div>
              <p className="ml-6">07:00 - 15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E1E5EA]/20 pt-8 text-center text-sm text-[#E1E5EA]">
          <p>© {currentYear} Martelinho de Ouro — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
