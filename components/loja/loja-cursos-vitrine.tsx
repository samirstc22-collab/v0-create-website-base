"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Play, Star, Video, Award, Sparkles, ShoppingBag } from "lucide-react"

const cursos = [
  {
    id: 1,
    title: "Como Formular Anestesicos na Farmacia Magistral",
    subtitle: "Curso Ao Vivo + Formulario Completo",
    description: "Domine a formulacao de anestesicos topicos com seguranca e eficacia. Acesse o curso ao vivo e ganhe o formulario completo.",
    price: 497,
    originalPrice: 697,
    badge: "BEST SELLER",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4727-G0PVdfQPCEkOzNyGOL4Rovyvn71ljB.jpg",
    rating: 4.9,
    students: 247,
    includes: [
      "Curso ao vivo interativo",
      "Formulario completo",
      "Certificado",
      "Suporte 30 dias",
    ],
  },
  {
    id: 2,
    title: "Farmacotecnica dos Principais Peelings do Mercado",
    subtitle: "Curso Completo + Formulario 300 Paginas",
    description: "O curso mais completo sobre peelings quimicos. Assista ao curso e ganhe um formulario com mais de 300 paginas.",
    price: 697,
    originalPrice: 997,
    badge: "MAIS VENDIDO",
    badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709143998205-H1eDfKMSub31LhCMxixc3pPiskEqZd.jpeg",
    rating: 5.0,
    students: 412,
    includes: [
      "Aulas gravadas + ao vivo",
      "Formulario 300+ paginas",
      "Certificado",
      "Grupo exclusivo",
    ],
  },
  {
    id: 3,
    title: "Protocolos Avancados para Tecnologias Laser e LED",
    subtitle: "Exclusivo para Dermatologistas",
    description: "Potencialize seus procedimentos com formulacoes magistrais que complementam laser, LED e tecnologias dermatologicas.",
    price: 897,
    originalPrice: 1297,
    badge: "EXCLUSIVO",
    badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg",
    rating: 4.9,
    students: 156,
    includes: [
      "Protocolos clinicos validados",
      "Formulas pre/pos-procedimento",
      "Cases clinicos",
      "Mentoria mensal",
    ],
  },
]

const ebooks = [
  {
    id: 1,
    title: "GHK-Cu: O Peptideo da Regeneracao",
    pages: "120 paginas",
    price: 89.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5440-kapz3lau48NJq7I5ohRPe2zmObl0xj.jpeg",
  },
  {
    id: 2,
    title: "Guia Completo de Veiculos Magistrais",
    pages: "85 paginas",
    price: 89.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4776-aJ6dpVlmUSYdprPFJb7N1Svq97LBCG.png",
  },
  {
    id: 3,
    title: "Bases Dermatologicas Premium",
    pages: "95 paginas",
    price: 89.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5200-KALUyFn9kvI3uzuAYUiOyo0qtqTMgm.jpeg",
  },
  {
    id: 4,
    title: "Acidos Cosmeticos Avancados",
    pages: "110 paginas",
    price: 89.9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4778-R8YSSSROeHasGd91VvoHUUudskA1v9.jpeg",
  },
]

export function LojaCursosVitrine() {
  return (
    <section className="bg-gradient-to-b from-white via-[#fafaf7] to-white py-20 lg:py-28 border-b border-[#0C2340]/10">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header da secao Cursos */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8783D]/10 border border-[#B8783D]/30 text-[#B8783D] text-[11px] font-bold uppercase tracking-[2.5px] mb-6">
            <Video className="w-4 h-4" />
            Cursos Premium
          </div>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] text-[#0C2340] tracking-[-1.5px] leading-[1.05] mb-5">
            Os <em className="italic text-[#B8783D]">cursos definitivos</em> de quem vive o laboratorio
          </h2>
          <p className="text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cursos ao vivo + formularios exclusivos + certificado. Aluno aprende e ja sai com material tecnico para aplicar na farmacia.
          </p>
        </div>

        {/* Grid de cursos premium */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {cursos.map((curso) => (
            <article
              key={curso.id}
              className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(184,120,61,0.18)] hover:border-[#B8783D]/30 hover:translate-y-[-4px] transition-all duration-500 flex flex-col"
            >
              {/* Badge */}
              <div
                className={`absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full ${curso.badgeColor} text-white text-[10px] font-bold uppercase tracking-[1.5px] shadow-lg`}
              >
                {curso.badge}
              </div>

              {/* Capa real do curso */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={curso.image}
                  alt={curso.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Rating + Acesso */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-[12px] font-bold text-gray-800">{curso.rating}</span>
                    <span className="text-[11px] text-gray-500">({curso.students})</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                    <Play className="w-3.5 h-3.5" fill="white" />
                    <span className="text-[11px] font-semibold">Acesso imediato</span>
                  </div>
                </div>
              </div>

              {/* Conteudo */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[10px] font-bold text-[#B8783D] uppercase tracking-[2px] mb-2.5">
                  {curso.subtitle}
                </div>
                <h3 className="text-[19px] font-bold text-[#0C2340] mb-3 leading-[1.25] group-hover:text-[#B8783D] transition-colors min-h-[48px]">
                  {curso.title}
                </h3>
                <p className="text-[14px] text-gray-600 mb-5 leading-relaxed line-clamp-2">
                  {curso.description}
                </p>

                <ul className="space-y-2 mb-5 pb-5 border-b border-gray-100">
                  {curso.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B8783D] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <div className="text-[12px] text-gray-400 line-through">
                    De R$ {curso.originalPrice.toLocaleString("pt-BR")}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[12px] text-gray-500">por</span>
                    <span className="text-[28px] font-bold text-[#B8783D] leading-none">
                      R$ {curso.price}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    ou 12x de R$ {(curso.price / 12).toFixed(2).replace(".", ",")}
                  </div>
                </div>

                <a
                  href="https://pay.hotmart.com/A105091762I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-auto flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0C2340] to-[#1a3a5f] hover:from-[#B8783D] hover:to-[#d4a574] text-white px-5 py-3.5 rounded-xl font-bold text-[14px] tracking-wide transition-all shadow-lg hover:shadow-xl"
                >
                  Quero Adquirir Agora
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Header da secao E-books */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-600 text-[11px] font-bold uppercase tracking-[2.5px] mb-6">
            <Sparkles className="w-4 h-4" />
            E-books Tecnicos
          </div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] text-[#0C2340] tracking-[-1.5px] leading-[1.05] mb-4">
            E-books de <em className="italic text-violet-600">formulas e protocolos</em>
          </h2>
          <p className="text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Material tecnico-cientifico em PDF. Formato compacto, conteudo denso, formulas validadas. A partir de R$ 89,90.
          </p>
        </div>

        {/* Grid de e-books */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {ebooks.map((ebook) => (
            <article
              key={ebook.id}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.18)] hover:border-violet-300 hover:translate-y-[-3px] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/85 via-violet-900/30 to-transparent" />
                <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-lg">
                  PDF
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-200">
                    {ebook.pages}
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="text-[15px] font-bold text-[#0C2340] mb-3 leading-tight group-hover:text-violet-600 transition-colors min-h-[44px]">
                  {ebook.title}
                </h4>
                <div className="text-[22px] font-bold text-violet-600 leading-none mb-4">
                  R$ {ebook.price.toFixed(2).replace(".", ",")}
                </div>
                <a
                  href="https://pay.hotmart.com/A105091762I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-1.5 w-full bg-[#0C2340] group-hover:bg-violet-600 text-white px-3 py-2.5 rounded-lg font-bold text-[12px] transition-colors"
                >
                  Quero Adquirir Agora
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Banner para catalog completo */}
        <div className="text-center">
          <Link
            href="#catalog"
            className="inline-flex items-center gap-2 text-[#0C2340] font-bold text-[14px] tracking-wide border-b-2 border-[#B8783D] pb-1 hover:text-[#B8783D] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Ver catalogo completo de formularios e materiais tecnicos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
