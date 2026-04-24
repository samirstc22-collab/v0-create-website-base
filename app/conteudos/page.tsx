import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConteudosHero } from "@/components/conteudos/conteudos-hero"
import { ConteudosGrid } from "@/components/conteudos/conteudos-grid"

export const metadata = {
  title: "Conteudos | Prof. Samir Tannuri - Clube de Formulas",
  description: "Laminas tecnicas, artigos cientificos e conteudos de autoridade sobre peptideos, peelings, nanotecnologia e protocolos clinicos.",
}

export default function ConteudosPage() {
  return (
    <main>
      <Navbar />
      <ConteudosHero />
      <ConteudosGrid />
      <Footer />
    </main>
  )
}
