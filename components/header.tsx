"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const WHATSAPP_NUMBER = "5518991246746" 

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi o seu site, eu gostaria de saber mais sobre os serviços.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "h-14 shadow-lg" : "h-16 md:h-18"
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`}
          >
            <path d="M20 5L25 15H15L20 5Z" fill="#C99B3B" />
            <circle cx="20" cy="25" r="10" fill="#C99B3B" />
            <path d="M15 25L20 20L25 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-lg md:text-xl text-[#C99B3B]" style={{ fontFamily: "var(--font-heading)" }}>
            Martelinho de Ouro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicos" className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors">
            Serviços
          </Link>
          <Link
            href="#antes-depois"
            className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
          >
            Antes/Depois
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
          >
            Depoimentos
          </Link>
          <Link href="#sobre" className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Contact & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#C99B3B] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className={isScrolled ? "hidden lg:inline" : ""}>+55 (18) 99124-6746</span>
          </button>
          <Button
            onClick={openWhatsApp}
            className="bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-4 py-2 shadow-md transition-all hover:-translate-y-0.5"
          >
            Fale no WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#111827]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E1E5EA] shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-4">
            <Link
              href="#servicos"
              className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#antes-depois"
              className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Antes/Depois
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium text-[#111827] hover:text-[#C99B3B] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
