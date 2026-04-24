import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MissoesHero } from "@/components/missoes/missoes-hero"
import { MissoesGallery } from "@/components/missoes/missoes-gallery"
import { MissoesClube } from "@/components/missoes/missoes-clube"
import { MissoesCTA } from "@/components/missoes/missoes-cta"

export const metadata = {
  title: "Missoes Internacionais | Imersoes Tecnicas | ST Farma",
  description:
    "Imersoes tecnicas em tres continentes: Paris, Amsterdam e Japao. Acesso privilegiado a industrias de ingredientes, laboratorios de ponta e tendencias globais de cosmeticos.",
}

export default function MissoesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <MissoesHero />
      <MissoesGallery />
      <MissoesClube />
      <MissoesCTA />
      <Footer />
    </main>
  )
}
