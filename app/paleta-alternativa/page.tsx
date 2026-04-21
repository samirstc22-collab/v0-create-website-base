import { V2Navbar } from "@/components/v2/v2-navbar"
import { V2Hero } from "@/components/v2/v2-hero"
import { V2Authority } from "@/components/v2/v2-authority"
import { V2Method } from "@/components/v2/v2-method"
import { V2Science } from "@/components/v2/v2-science"
import { V2Contact } from "@/components/v2/v2-contact"
import { V2Footer } from "@/components/v2/v2-footer"

export const metadata = {
  title: "Paleta Esmeralda & Marfim · Clube de Fórmulas",
  description:
    "Versão alternativa de identidade visual — paleta editorial em verde-esmeralda, marfim, dourado brunido e terracota. Proposta botânica e apotecária para o Clube de Fórmulas.",
}

export default function PaletaAlternativaPage() {
  return (
    <main className="bg-[#f5f1e8]">
      <V2Navbar />
      <V2Hero />
      <V2Authority />
      <V2Method />
      <V2Science />
      <V2Contact />
      <V2Footer />
    </main>
  )
}
