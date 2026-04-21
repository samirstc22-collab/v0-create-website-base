import { Metadata } from "next"
import { AIHero } from "@/components/formulator-ai/ai-hero"
import { AIFeatures } from "@/components/formulator-ai/ai-features"
import { AIDemo } from "@/components/formulator-ai/ai-demo"
import { AIPricing } from "@/components/formulator-ai/ai-pricing"
import { AICTA } from "@/components/formulator-ai/ai-cta"

export const metadata: Metadata = {
  title: "Formulator AI Lab Pro — Inteligência Formulatória | Clube de Fórmulas",
  description:
    "A primeira IA de formulação cosmética do Brasil. Treinada com +4.000 fórmulas validadas, literatura peer-reviewed e 24 anos de bancada real. Crie fórmulas melhores, mais rápido.",
  openGraph: {
    title: "Formulator AI Lab Pro — Inteligência Formulatória",
    description: "A primeira IA de formulação cosmética do Brasil. +4.000 fórmulas validadas.",
    type: "website",
  },
}

export default function FormulatorAIPage() {
  return (
    <main className="bg-[#050a12]">
      <AIHero />
      <AIFeatures />
      <AIDemo />
      <AIPricing />
      <AICTA />
    </main>
  )
}
