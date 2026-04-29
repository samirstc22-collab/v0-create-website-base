"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  FileText,
  BookOpen,
  Sparkles,
  Star,
  Award,
  Video,
  Download,
  Store,
  Shield,
  CheckCircle2,
} from "lucide-react"

// Cursos especiais em destaque - com imagens reais nas capas
const featuredCourses = [
  {
    id: 1,
    title: "Como Formular Anestesicos na Farmacia Magistral",
    subtitle: "Curso Ao Vivo + Formulario Completo",
    description:
      "Domine a formulacao de anestesicos topicos com seguranca e eficacia. Aluno ganha o formulario completo + curso ao vivo.",
    price: 497,
    originalPrice: 697,
    badge: "BEST SELLER",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    includes: [
      "Curso ao vivo interativo",
      "Formulario completo de anestesicos",
      "Certificado de conclusao",
      "Suporte tecnico por 30 dias",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4727-G0PVdfQPCEkOzNyGOL4Rovyvn71ljB.jpg",
    href: "/cursos/anestesicos",
    rating: 4.9,
    students: 247,
  },
  {
    id: 2,
    title: "Farmacotecnica dos Principais Peelings do Mercado",
    subtitle: "Curso Completo + Formulario 300 Paginas",
    description:
      "O curso mais completo sobre peelings quimicos. Assista ao curso e ganhe um formulario com mais de 300 paginas.",
    price: 697,
    originalPrice: 997,
    badge: "MAIS VENDIDO",
    badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
    includes: [
      "Aulas gravadas + ao vivo",
      "Formulario com 300+ paginas",
      "Certificado de conclusao",
      "Grupo exclusivo de alunos",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709143998205-H1eDfKMSub31LhCMxixc3pPiskEqZd.jpeg",
    href: "/cursos/peelings",
    rating: 5.0,
    students: 412,
  },
  {
    id: 3,
    title: "Protocolos Avancados para Tecnologias Laser e LED",
    subtitle: "Exclusivo para Dermatologistas",
    description:
      "Potencialize seus procedimentos com formulacoes magistrais que complementam laser, LED e tecnologias dermatologicas.",
    price: 897,
    originalPrice: 1297,
    badge: "EXCLUSIVO",
    badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
    includes: [
      "Protocolos clinicos validados",
      "Formulas pre/pos-procedimento",
      "Cases clinicos documentados",
      "Mentoria mensal em grupo",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg",
    href: "/cursos/laser-led",
    rating: 4.9,
    students: 156,
  },
]

// Formularios com imagens reais
const featuredFormularios = [
  {
    id: 1,
    title: "Formulario de Dermatologia Estetica",
    pages: "180+ paginas",
    price: 299,
    originalPrice: 399,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4778-R8YSSSROeHasGd91VvoHUUudskA1v9.jpeg",
  },
  {
    id: 2,
    title: "Formulario de Tricologia Avancada",
    pages: "150+ paginas",
    price: 349,
    originalPrice: 449,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4731-F3BZhbe0KbBVRgANn0HnrQHGcheeDs.jpeg",
  },
  {
    id: 3,
    title: "Formulario de Clareadores Premium",
    pages: "200+ paginas",
    price: 399,
    originalPrice: 499,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4738-B1FIaPy8hfxTIEXePZlss4SG9jrV4K.jpeg",
  },
  {
    id: 4,
    title: "Formulario de Peelings Quimicos",
    pages: "300+ paginas",
    price: 349,
    originalPrice: 449,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4780.png-vLKnEJL8hahtIiQsfn0IrZXwnMjXav.jpeg",
  },
]

// E-books
const featuredEbooks = [
  {
    id: 1,
    title: "GHK-Cu: O Peptideo da Regeneracao",
    price: 89.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5440-kapz3lau48NJq7I5ohRPe2zmObl0xj.jpeg",
  },
  {
    id: 2,
    title: "Guia Completo de Veiculos Magistrais",
    price: 89.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4776-aJ6dpVlmUSYdprPFJb7N1Svq97LBCG.png",
  },
  {
    id: 3,
    title: "Bases Dermatologicas Premium",
    price: 89.9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5200-KALUyFn9kvI3uzuAYUiOyo0qtqTMgm.jpeg",
  },
]

export function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-[#fafaf7] to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8783D]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0db5c8]/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8783D]/10 border border-[#B8783D]/30 text-[#B8783D] text-[11px] font-bold uppercase tracking-[2.5px] mb-6">
            <Sparkles className="w-4 h-4" />
            Cursos em Destaque
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] text-[#0C2340] tracking-[-1.5px] leading-[1.05] mb-5">
            Acelere seu <em className="italic text-[#B8783D]">conhecimento</em> com quem vive o laboratorio
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-[1.6]">
            Cursos, formularios e materiais tecnicos desenvolvidos por quem ja formou +1.000 profissionais e atende +500 farmacias.
          </p>
        </div>

        {/* Cursos em destaque - Carousel premium */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#B8783D]/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-[#B8783D]" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#0C2340] tracking-tight">
                  Cursos Premium
                </h3>
                <p className="text-[13px] text-gray-500">Acesso vitalicio + certificado</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#B8783D] hover:bg-[#B8783D] hover:text-white transition-all disabled:opacity-40"
                disabled={!canScrollPrev}
                aria-label="Curso anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#B8783D] hover:bg-[#B8783D] hover:text-white transition-all disabled:opacity-40"
                disabled={!canScrollNext}
                aria-label="Proximo curso"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(184,120,61,0.18)] hover:border-[#B8783D]/30 hover:translate-y-[-4px] transition-all duration-500">
                    {/* Badge */}
                    <div
                      className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full ${course.badgeColor} text-white text-[10px] font-bold uppercase tracking-[1.5px] shadow-lg`}
                    >
                      {course.badge}
                    </div>

                    {/* Capa real do curso */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Rating + Students */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-[12px] font-bold text-gray-800">{course.rating}</span>
                          <span className="text-[11px] text-gray-500">({course.students})</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                          <Play className="w-3.5 h-3.5" fill="white" />
                          <span className="text-[11px] font-semibold">Acesso imediato</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-[10px] font-bold text-[#B8783D] uppercase tracking-[2px] mb-2.5">
                        {course.subtitle}
                      </div>
                      <h4 className="text-[19px] font-bold text-[#0C2340] mb-3 leading-[1.25] line-clamp-2 group-hover:text-[#B8783D] transition-colors min-h-[48px]">
                        {course.title}
                      </h4>
                      <p className="text-[14px] text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Includes */}
                      <ul className="space-y-2 mb-5 pb-5 border-b border-gray-100">
                        {course.includes.slice(0, 3).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#B8783D] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div className="flex items-end justify-between mb-5">
                        <div>
                          <div className="text-[12px] text-gray-400 line-through">
                            De R$ {course.originalPrice.toLocaleString("pt-BR")}
                          </div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[12px] text-gray-500">por</span>
                            <span className="text-[28px] font-bold text-[#B8783D] leading-none">
                              R$ {course.price}
                            </span>
                          </div>
                          <div className="text-[11px] text-gray-500 mt-1">
                            ou 12x de R$ {(course.price / 12).toFixed(2).replace(".", ",")}
                          </div>
                        </div>
                      </div>

                      {/* CTA destacado */}
                      <Link
                        href={course.href}
                        className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#0C2340] to-[#1a3a5f] hover:from-[#B8783D] hover:to-[#d4a574] text-white px-5 py-3.5 rounded-xl font-bold text-[14px] tracking-wide transition-all shadow-lg hover:shadow-xl"
                      >
                        Quero Adquirir Agora
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredCourses.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === i ? "w-8 bg-[#B8783D]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para curso ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Formularios - Grid com vitrine */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0db5c8]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#0db5c8]" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#0C2340] tracking-tight">
                  Formularios Tecnicos
                </h3>
                <p className="text-[13px] text-gray-500">R$ 299 a R$ 399 · PDFs com formulas exclusivas</p>
              </div>
            </div>
            <Link
              href="/loja"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#B8783D] font-bold text-[13px] hover:gap-2.5 transition-all"
            >
              Ver loja completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {featuredFormularios.map((form) => (
              <Link
                key={form.id}
                href="/loja"
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(184,120,61,0.15)] hover:border-[#B8783D]/30 hover:translate-y-[-3px] transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={form.image}
                    alt={form.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#B8783D] text-white px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-lg">
                    PDF
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#d4a574] mb-1">
                      {form.pages}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[14px] font-bold text-[#0C2340] mb-3 line-clamp-2 leading-tight group-hover:text-[#B8783D] transition-colors min-h-[36px]">
                    {form.title}
                  </h4>
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <div className="text-[10px] text-gray-400 line-through">R$ {form.originalPrice}</div>
                      <div className="text-[20px] font-bold text-[#B8783D] leading-none">R$ {form.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 w-full bg-[#0C2340] group-hover:bg-[#B8783D] text-white px-3 py-2 rounded-lg font-bold text-[12px] transition-colors">
                    Quero adquirir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* E-books */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#0C2340] tracking-tight">
                  E-books de Formulas
                </h3>
                <p className="text-[13px] text-gray-500">A partir de R$ 89,90 · Download imediato</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {featuredEbooks.map((ebook) => (
              <Link
                key={ebook.id}
                href="/loja"
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] hover:border-violet-300 hover:translate-y-[-3px] transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
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
                </div>
                <div className="p-4">
                  <h4 className="text-[14px] font-bold text-[#0C2340] mb-3 line-clamp-2 leading-tight group-hover:text-violet-600 transition-colors min-h-[36px]">
                    {ebook.title}
                  </h4>
                  <div className="text-[20px] font-bold text-violet-600 leading-none mb-3">
                    R$ {ebook.price.toFixed(2).replace(".", ",")}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 w-full bg-[#0C2340] group-hover:bg-violet-600 text-white px-3 py-2 rounded-lg font-bold text-[12px] transition-colors">
                    Quero adquirir
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
            {/* Card "Ver loja" */}
            <Link
              href="/loja"
              className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#0C2340] to-[#1a3a5f] text-white rounded-2xl border-2 border-[#B8783D]/40 hover:border-[#B8783D] transition-all duration-300 min-h-[280px] p-6 hover:shadow-[0_15px_40px_rgba(184,120,61,0.25)] hover:translate-y-[-3px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#B8783D] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white text-[18px] font-bold mb-2 text-center">
                Ver Loja Completa
              </h4>
              <p className="text-white/70 text-[12px] text-center mb-4 leading-relaxed">
                Cursos, formularios e e-books em um so lugar
              </p>
              <div className="inline-flex items-center gap-1.5 text-[#d4a574] font-bold text-[13px]">
                Acessar agora
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Banner CTA Loja completa */}
        <div className="relative bg-gradient-to-br from-[#0C2340] via-[#1a3a5f] to-[#050a14] rounded-3xl overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(184,120,61,0.3), transparent 60%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4a574]/15 border border-[#d4a574]/30 text-[#d4a574] text-[10px] font-bold uppercase tracking-[2px] mb-4">
                <Shield className="w-3.5 h-3.5" />
                Loja Oficial Samir Tannuri
              </div>
              <h3 className="font-serif text-white text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.5px] mb-4">
                Todos os <em className="italic text-[#d4a574]">cursos, formularios e e-books</em> em um so lugar
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                Acesse a loja completa e escolha entre dezenas de materiais tecnicos exclusivos para acelerar seu conhecimento em formulacao magistral.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/loja"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#B8783D] to-[#d4a574] text-white px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide hover:shadow-[0_0_40px_rgba(184,120,61,0.6)] transition-all shadow-lg hover:translate-y-[-2px]"
                >
                  <Store className="w-5 h-5" />
                  Acessar Loja Completa
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3">
              {[
                { icon: Video, label: "Cursos", count: "12+" },
                { icon: FileText, label: "Formularios", count: "20+" },
                { icon: BookOpen, label: "E-books", count: "15+" },
                { icon: Award, label: "Anos", count: "6+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-[#d4a574] mx-auto mb-2" />
                  <div className="text-white text-[24px] font-bold leading-none mb-1">
                    {stat.count}
                  </div>
                  <div className="text-white/60 text-[10px] uppercase tracking-[1.5px] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
