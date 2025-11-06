"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, X } from "lucide-react"

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: `${file.name} excede 5MB`,
          variant: "destructive",
        })
        return false
      }
      return true
    })

    if (formData.fotos.length + validFiles.length > 3) {
      toast({
        title: "Limite de fotos",
        description: "Máximo de 3 fotos permitidas",
        variant: "destructive",
      })
      return
    }

    setFormData({ ...formData, fotos: [...formData.fotos, ...validFiles] })
  }

  const removePhoto = (index: number) => {
    setFormData({
      ...formData,
      fotos: formData.fotos.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.nome || !formData.telefone || !formData.modelo || !formData.servico) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const message = `Olá, sou ${formData.nome}. Preciso de ${formData.servico}. Modelo: ${formData.modelo}. Descrição: ${formData.descricao || "Não informada"}. Telefone: ${formData.telefone}.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    if (formData.fotos.length > 0) {
      toast({
        title: "Chat aberto",
        description: "Finalize o envio no WhatsApp e anexe as fotos manualmente.",
        duration: 5000,
      })
    } else {
      toast({
        title: "Chat aberto",
        description: "Finalize o envio no WhatsApp.",
        duration: 5000,
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
              Solicite seu orçamento
            </h2>
            <p className="text-lg text-[#6B7280] text-pretty">
              Preencha o formulário e entraremos em contato via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
            {/* Nome Completo */}
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
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B]"
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
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B]"
                maxLength={15}
                required
              />
            </div>

            {/* Modelo do Carro */}
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
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B]"
                required
              />
            </div>

            {/* Serviço Desejado */}
            <div className="space-y-2">
              <Label htmlFor="servico" className="text-[#111827] font-medium">
                Serviço desejado *
              </Label>
              <Select value={formData.servico} onValueChange={(value) => setFormData({ ...formData, servico: value })}>
                <SelectTrigger className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B]">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Amassado">Remoção de amassado</SelectItem>
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
                className="border-[#E1E5EA] focus:border-[#C99B3B] focus:ring-[#C99B3B] min-h-[100px]"
                maxLength={300}
              />
              <p className="text-xs text-[#6B7280]">{formData.descricao.length}/300 caracteres</p>
            </div>

            {/* Fotos */}
            <div className="space-y-2">
              <Label className="text-[#111827] font-medium">Fotos (opcional, até 3 fotos)</Label>
              <div className="space-y-4">
                {formData.fotos.length < 3 && (
                  <label className="flex items-center justify-center gap-2 border-2 border-dashed border-[#E1E5EA] rounded-lg p-6 cursor-pointer hover:border-[#C99B3B] transition-colors">
                    <Upload className="w-5 h-5 text-[#6B7280]" />
                    <span className="text-[#6B7280]">Clique para adicionar fotos</span>
                    <input type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
                  </label>
                )}

                {formData.fotos.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {formData.fotos.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file) || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 bg-[#E53935] text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-[#6B7280]">
                Máximo 5MB por foto. As fotos devem ser anexadas manualmente no WhatsApp.
              </p>
            </div>

            {/* Submit Button */}
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
