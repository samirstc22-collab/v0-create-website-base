import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MissoesHero } from "@/components/missoes/missoes-hero"
import { MissoesGallery } from "@/components/missoes/missoes-gallery"
import { MissoesTraining } from "@/components/missoes/missoes-training"
import { MissoesClube } from "@/components/missoes/missoes-clube"
import { MissoesCTA } from "@/components/missoes/missoes-cta"

export const metadata = {
  title: "Missoes Internacionais | Imersoes Tecnicas | ST Farma",
  description:
    "Imersoes tecnicas em tres continentes e treinamentos internacionais. Bolivia presencial, Argentina, Honduras, Paraguay e Portugal online. Formacao de elite para farmacias magistrais.",
}

export default function MissoesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <MissoesHero />
      <MissoesGallery />
      <MissoesTraining />
      <MissoesClube />
      <MissoesCTA />
      <Footer />
    </main>
  )
}
