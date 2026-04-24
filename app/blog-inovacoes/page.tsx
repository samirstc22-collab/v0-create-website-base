import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-portfolio/blog-hero"
import { BlogAzelaicResults } from "@/components/blog-portfolio/blog-azelaic-results"
import { BlogNiacinamideB12 } from "@/components/blog-portfolio/blog-niacinamide-b12"
import { BlogCta } from "@/components/blog-portfolio/blog-cta"

export const metadata = {
  title: "Inovacoes em Dermatologia | Prof. Samir Tannuri",
  description:
    "Resultados clinicos comprovados: Peeling Azelaico em Pasta com 30,5% de melhora em pigmentacao e Serum NiacinaMax 25% + B12 — a primeira formulacao do mundo com niacinamida 25% estabilizada.",
  openGraph: {
    title: "Inovacoes em Dermatologia | Prof. Samir Tannuri",
    description:
      "Evidencias Visia de melhora clinica significativa. Formulacoes exclusivas desenvolvidas com rigor cientifico.",
  },
}

export default function BlogInovacoesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <BlogHero />
      <BlogAzelaicResults />
      <BlogNiacinamideB12 />
      <BlogCta />
      <Footer />
    </main>
  )
}
