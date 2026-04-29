import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IAHero } from "@/components/ia/ia-hero"
import { IADemo } from "@/components/ia/ia-demo"
import { IAFeatures } from "@/components/ia/ia-features"
import { IACta } from "@/components/ia/ia-cta"

export const metadata = {
  title: "IA Formulador | Assistente Inteligente de Formulacao | ST Farma",
  description:
    "Conheca o IA Formulador: seu assistente inteligente para formulacao magistral. Pergunte sobre ativos, veiculos, incompatibilidades e muito mais.",
}

export default function IAPage() {
  return (
    <main>
      <Navbar />
      <IAHero />
      <IADemo />
      <IAFeatures />
      <IACta />
      <Footer />
    </main>
  )
}
