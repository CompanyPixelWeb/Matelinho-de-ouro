"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const WHATSAPP_NUMBER = "5518991246746"

interface GalleryItem {
  id: string
  service: string
  date: string
  duration: string
  before: string
  after: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "proj-001",
    service: "Remoção de amassado - Porta-malas",
    date: "Dez/2024",
    duration: "2 semanas",
    before: "/byd-amassado.jpg",
    after: "/byd-arrumado.jpg",
  },
  {
    id: "proj-002",
    service: "Polimento e pintura - Porta",
    date: "Jan/2025",
    duration: "3 dias",
    before: "/amassado-lateral.jpg",
    after: "/polimento.jpg",
  },
  {
    id: "proj-003",
    service: "Remoção de amassado",
    date: "Fev/2025",
    duration: "1 semana",
    before: "/porta-malas-amassado.jpg",
    after: "/porta-malas.jpg",
  },
  {
    id: "proj-004",
    service: "Funilaria lateral",
    date: "Ago/2025",
    duration: "2 semanas",
    before: "/amassado-lateral.jpg",
    after: "/amssado-lateral-pronto.jpg",
  },
  {
    id: "proj-005",
    service: "Retoque de pintura",
    date: "Set/2025",
    duration: "3 dias",
    before: "/pequeno-amassado-portamala.jpg",
    after: "/pequeno-amassado-portamala-pronto.jpg",
  },
  {
    id: "proj-006",
    service: "Reparação estrutural",
    date: "Out/2025",
    duration: "1 Semana",
    before: "/parachoque.jpg",
    after: "/parachoque-pronto.jpg",
  },
]

export function BeforeAfterGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)

  const openWhatsApp = (item: GalleryItem) => {
    const message = `Olá! Vi o projeto ${item.id} (${item.service}) e quero esse resultado para meu carro.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="antes-depois" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            Antes & Depois
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Veja a transformação dos nossos serviços. Qualidade profissional com garantia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedItem(item)}>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#E1E5EA]">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.service} - Antes`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      Antes
                    </div>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.service} - Depois`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#C99B3B] text-white px-2 py-1 rounded text-xs font-medium">
                      Depois
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-[#111827] mb-2">{item.service}</h3>
                  <div className="flex items-center justify-between text-sm text-[#6B7280]">
                    <span>{item.date}</span>
                    <Badge variant="secondary" className="bg-[#0B3D91] text-white hover:bg-[#0B3D91]">
                      {item.duration}
                    </Badge>
                  </div>
                  <Badge className="mt-2 bg-[#C99B3B]/10 text-[#C99B3B] hover:bg-[#C99B3B]/20">Garantia 90 dias</Badge>
                </div>
                <div className="absolute inset-0 bg-[#C99B3B]/0 group-hover:bg-[#C99B3B]/10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-[#111827] px-4 py-2 rounded-lg">
                    Ver detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Interactive Comparison Slider */}
     <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
      <DialogContent className="max-w-4xl bg-white/90">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#111827]">
            {selectedItem?.service}
          </DialogTitle>
        </DialogHeader>

        {selectedItem && (
          <div className="space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={selectedItem.after || "/placeholder.svg"}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={selectedItem.before || "/placeholder.svg"}
                  alt="Depois"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (!parent) return;

                  const rect = parent.getBoundingClientRect();

                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const x = moveEvent.clientX - rect.left;
                    const percentage = (x / rect.width) * 100;
                    setSliderPosition(Math.max(0, Math.min(100, percentage)));
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                  };

                  document.addEventListener("mousemove", handleMouseMove);
                  document.addEventListener("mouseup", handleMouseUp);
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-[#C99B3B] rounded" />
                    <div className="w-1 h-4 bg-[#C99B3B] rounded" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Antes
              </div>
              <div className="absolute top-4 right-4 bg-[#C99B3B] text-white px-3 py-1 rounded-lg text-sm font-medium">
                Depois
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-[#6B7280]">Data:</span>{" "}
                <span className="font-medium text-[#111827]">{selectedItem.date}</span>
              </div>
              <div>
                <span className="text-[#6B7280]">Tempo de serviço:</span>{" "}
                <span className="font-medium text-[#111827]">{selectedItem.duration}</span>
              </div>
              <Badge className="bg-[#C99B3B]/10 text-[#C99B3B] hover:bg-[#C99B3B]/20">
                Garantia 90 dias
              </Badge>
            </div>

            <Button
              onClick={() => openWhatsApp(selectedItem)}
              className="w-full bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl py-6 text-lg font-semibold"
            >
              Quero esse resultado
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
    </section>
  )
}
