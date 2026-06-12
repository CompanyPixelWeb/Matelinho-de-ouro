import Image from "next/image"
import type { ShowcaseItem } from "@/lib/showcase"

/** Card antes/depois (server component) usando fotos reais e next/image. */
export function BeforeAfterPair({ item }: { item: ShowcaseItem }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="grid grid-cols-2 gap-1">
        <div className="relative aspect-[4/3]">
          <Image
            src={item.before}
            alt={`${item.title} antes do reparo — Martelinho de Ouro em ${item.city}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
            Antes
          </span>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src={item.after}
            alt={`${item.title} depois do reparo — Martelinho de Ouro em ${item.city}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-[#C99B3B] text-white px-2 py-1 rounded text-xs font-medium">
            Depois
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#111827]">{item.title}</h3>
        <p className="text-sm text-[#6B7280]">
          {item.service} · {item.city}
        </p>
      </div>
    </div>
  )
}
