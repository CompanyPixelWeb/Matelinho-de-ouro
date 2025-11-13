"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const WHATSAPP_NUMBER = "5518991246746"


interface FormData {
  nome: string
  telefone: string
  modelo: string
  servico: string
  descricao: string
  fotos: File[]
}

export function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    modelo: "",
    servico: "",
    descricao: "",
    fotos: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhoneChange = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    let formatted = numbers

    if (numbers.length > 0) {
      formatted = `(${numbers.slice(0, 2)}`
    }
    if (numbers.length > 2) {
      formatted += `) ${numbers.slice(2, 7)}`
    }
    if (numbers.length > 7) {
      formatted += `-${numbers.slice(7, 11)}`
    }

    setFormData({ ...formData, telefone: formatted })
  } 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nome || !formData.telefone || !formData.modelo || !formData.servico) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    const message = `Olá, sou ${formData.nome}.
    Telefone: ${formData.telefone}
    Modelo: ${formData.modelo}
    Serviço desejado: ${formData.servico}
    Descrição: ${formData.descricao || "Não informada."}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    toast({
      title: "Chat aberto no WhatsApp",
      description:
        formData.fotos.length > 0
          ? "Finalize o envio no WhatsApp e anexe as fotos manualmente."
          : "Finalize o envio no WhatsApp.",
      duration: 5000,
    })

    setIsSubmitting(false)
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
              Solicite seu orçamento
            </h2>
            <p className="text-lg text-[#6B7280]">
              Preencha o formulário e entraremos em contato via WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6"
          >
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-[#111827] font-medium">
                Nome completo *
              </Label>
              <Input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Seu nome completo"
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] text-black/70 focus:text-black"
                required
              />
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-[#111827] font-medium">
                Telefone *
              </Label>
              <Input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="(11) 99999-9999"
                maxLength={15}
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] text-black/70 focus:text-black"
                required
              />
            </div>

            {/* Modelo */}
            <div className="space-y-2">
              <Label htmlFor="modelo" className="text-[#111827] font-medium">
                Modelo do carro *
              </Label>
              <Input
                id="modelo"
                type="text"
                value={formData.modelo}
                onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                placeholder="Ex: Honda Civic 2020"
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] text-black/70 focus:text-black"
                required
              />
            </div>

            {/* Serviço */}
            <div className="space-y-2">
              <Label htmlFor="servico" className="text-[#111827] font-medium">
                Serviço desejado *
              </Label>
              <Select
                value={formData.servico || undefined}
                onValueChange={(value) => setFormData({ ...formData, servico: value })}
              >
                <SelectTrigger className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] w-full [&>span]:text-[#111827] data-[placeholder]:[&>span]:text-[#6B7280]">
                  <SelectValue placeholder="Serviços" />
                </SelectTrigger>
                <SelectContent className="bg-white text-[#111827] shadow-lg rounded-lg">
                  <SelectItem value="Remoção de amassado">Remoção de amassado</SelectItem>
                  <SelectItem value="Polimento">Polimento</SelectItem>
                  <SelectItem value="Pintura parcial">Pintura parcial</SelectItem>
                  <SelectItem value="Troca de peça">Troca de peça</SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>


            {/* Descrição */}
            <div className="space-y-2">
              <Label htmlFor="descricao" className="text-[#111827] font-medium">
                Descrição do problema
              </Label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                placeholder="Descreva o problema ou serviço necessário..."
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] min-h-[100px] text-black/70 focus:text-black"
                maxLength={300}
              />
              <p className="text-xs text-[#6B7280]">
                {formData.descricao.length}/300 caracteres
              </p>
            </div>

            {/* Botão */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
            >
              {isSubmitting ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
