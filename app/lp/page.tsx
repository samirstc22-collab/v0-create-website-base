import { Metadata } from "next"
import { LPHero } from "@/components/lp/lp-hero"
import { LPMissions } from "@/components/lp/lp-missions"
import { LPIndustrial } from "@/components/lp/lp-industrial"
import { LPMagistral } from "@/components/lp/lp-magistral"
import { LPFormulatorAI } from "@/components/lp/lp-formulator-ai"
import { LPContact } from "@/components/lp/lp-contact"
import { LPFooter } from "@/components/lp/lp-footer"

export const metadata: Metadata = {
  title: "Prof. Samir Tannuri — Consultoria P&D e Formulator AI Lab Pro",
  description:
    "Ciência que vira fórmula. Fórmula que vira resultado. Consultoria P&D Industrial e Magistral, cursos e o lançamento do Formulator AI Lab Pro — infraestrutura inteligente de formulação.",
  openGraph: {
    title: "Prof. Samir Tannuri — Consultoria P&D e Formulator AI Lab Pro",
    description:
      "P&D cosmético de alta performance para indústrias, marcas e farmácias magistrais. Conheça o Formulator AI Lab Pro.",
    type: "website",
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#08080c]">
      <LPHero />
      <LPMissions />
      <LPIndustrial />
      <LPMagistral />
      <LPFormulatorAI />
      <LPContact />
      <LPFooter />
    </main>
  )
}
