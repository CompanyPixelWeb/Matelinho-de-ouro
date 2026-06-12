import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const runtime = "edge"
export const alt = "Martelinho de Ouro em Presidente Prudente — Remoção de amassados sem pintura"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111827",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(201,155,59,0.35), transparent 55%), radial-gradient(circle at 0% 100%, rgba(11,61,145,0.45), transparent 50%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Topo: marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#C99B3B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "46px",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: "#C99B3B" }}>
            Martelinho de Ouro
          </div>
        </div>

        {/* Centro: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: "76px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05 }}>
            Remoção de amassados
          </div>
          <div style={{ display: "flex", fontSize: "76px", fontWeight: 800, color: "#C99B3B", lineHeight: 1.05 }}>
            sem pintura
          </div>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 500, color: "#E1E5EA", marginTop: "8px" }}>
            em Presidente Prudente e região
          </div>
        </div>

        {/* Rodapé: contato */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#E53935",
              color: "#FFFFFF",
              fontSize: "34px",
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: "14px",
            }}
          >
            {siteConfig.phoneDisplay}
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#0B3D91",
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "999px",
            }}
          >
            Garantia 90 dias
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
