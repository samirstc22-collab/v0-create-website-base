import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConteudosHero } from "@/components/conteudos/conteudos-hero"
import { ConteudosGrid } from "@/components/conteudos/conteudos-grid"

export const metadata = {
  title: "Conteudos | Samir Tannuri - ST Farma",
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
