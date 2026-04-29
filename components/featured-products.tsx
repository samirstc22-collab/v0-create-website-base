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
  Zap,
  Award,
  Users,
  Clock,
  Video,
  Download,
} from "lucide-react"

// Cursos especiais em destaque
const featuredCourses = [
  {
    id: 1,
    title: "Como Formular Anestesicos na Farmacia Magistral",
    subtitle: "Curso ao Vivo + Formulario Completo",
    description: "Domine a arte de formular anestesicos topicos com seguranca e eficacia. Inclui acesso ao curso ao vivo e formulario exclusivo com todas as formulas.",
    price: 497,
    originalPrice: 697,
    badge: "BEST SELLER",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    includes: ["Curso ao vivo interativo", "Formulario completo", "Certificado", "Suporte por 30 dias"],
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    coverClass: "bg-gradient-to-br from-[#1a4d5c] via-[#0d3a4a] to-[#0a2530]",
    href: "/cursos/anestesicos",
    icon: Zap,
  },
  {
    id: 2,
    title: "Farmacotecnica dos Principais Peelings do Mercado",
    subtitle: "Curso Completo + Formulario 300 Paginas",
    description: "O curso mais completo sobre peelings quimicos. Aprenda a formular com racional cientifico e receba o formulario definitivo com mais de 300 paginas.",
    price: 697,
    originalPrice: 997,
    badge: "MAIS VENDIDO",
    badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
    includes: ["Aulas gravadas + ao vivo", "Formulario 300+ paginas", "Certificado", "Grupo exclusivo"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    coverClass: "bg-gradient-to-br from-[#5c3d3d] via-[#3d2525] to-[#1a0f0f]",
    href: "/cursos/peelings",
    icon: Award,
  },
  {
    id: 3,
    title: "Protocolos Avancados para Tecnologias Laser e LED",
    subtitle: "Exclusivo para Dermatologistas",
    description: "Potencialize os resultados dos seus procedimentos com formulacoes magistrais que complementam laser, LED e outras tecnologias dermatologicas.",
    price: 897,
    originalPrice: 1297,
    badge: "EXCLUSIVO",
    badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
    includes: ["Protocolos clinicos validados", "Formulacoes pre/pos-procedimento", "Cases clinicos", "Mentoria em grupo"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    coverClass: "bg-gradient-to-br from-[#4a2d5c] via-[#2d1a3d] to-[#150e20]",
    href: "/cursos/laser-led",
    icon: Sparkles,
  },
]

// Formularios em destaque
const featuredFormularios = [
  {
    id: 1,
    title: "Formulario de Dermatologia Estetica",
    pages: "180+ paginas",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#B8783D] via-[#8a5729] to-[#5c3a1f]",
  },
  {
    id: 2,
    title: "Formulario de Tricologia Avancada",
    pages: "150+ paginas",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#2d5c4d] via-[#1a3d2d] to-[#0a1a14]",
  },
  {
    id: 3,
    title: "Formulario de Clareadores",
    pages: "200+ paginas",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#7a5c3d] via-[#3d2d1a] to-[#1a0f05]",
  },
  {
    id: 4,
    title: "Formulario de Peelings Quimicos",
    pages: "300+ paginas",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#5c3d3d] via-[#3d1f1f] to-[#1a0a0a]",
  },
]

// E-books
const featuredEbooks = [
  {
    id: 1,
    title: "GHK-Cu: O Peptideo da Regeneracao",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#1a4d5c] via-[#0b2d3f] to-[#050e1b]",
  },
  {
    id: 2,
    title: "Guia Completo de Veiculos",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#5c4d3d] via-[#2d2418] to-[#0f0a05]",
  },
  {
    id: 3,
    title: "Bases Dermatologicas Premium",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    coverClass: "bg-gradient-to-br from-[#4a3d5c] via-[#241d38] to-[#0e0a1a]",
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
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8783D]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0db5c8]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8783D]/10 border border-[#B8783D]/20 text-[#B8783D] text-xs font-bold uppercase tracking-[2px] mb-6">
            <Sparkles className="w-4 h-4" />
            Destaques Exclusivos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0C2340] tracking-tight mb-4">
            Acelere seu <em className="text-[#B8783D]">conhecimento</em>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cursos, formularios e materiais tecnicos desenvolvidos por quem vive a formulacao magistral na pratica.
          </p>
        </div>

        {/* Cursos em destaque - Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B8783D]/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-[#B8783D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C2340]">Cursos em Destaque</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#B8783D] hover:bg-[#B8783D]/5 transition-colors disabled:opacity-40"
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#B8783D] hover:bg-[#B8783D]/5 transition-colors disabled:opacity-40"
                disabled={!canScrollNext}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
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
                  <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B8783D]/20 transition-all duration-300">
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full ${course.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider shadow-lg`}>
                      {course.badge}
                    </div>

                    {/* Image */}
                    <div className={`relative h-48 ${course.coverClass}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <course.icon className="w-20 h-20 text-white/20" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Play className="w-4 h-4" />
                          <span>Acesso imediato</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-semibold text-[#B8783D] uppercase tracking-wider mb-2">
                        {course.subtitle}
                      </div>
                      <h4 className="text-lg font-bold text-[#0C2340] mb-3 line-clamp-2 group-hover:text-[#B8783D] transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Includes */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.includes.slice(0, 2).map((item, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                            <Star className="w-3 h-3 text-amber-400" />
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-sm text-gray-400 line-through">
                            R$ {course.originalPrice.toLocaleString("pt-BR")}
                          </div>
                          <div className="text-2xl font-bold text-[#0C2340]">
                            R$ <span className="text-[#B8783D]">{course.price}</span>
                          </div>
                        </div>
                        <Link
                          href={course.href}
                          className="inline-flex items-center gap-2 bg-[#0C2340] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#B8783D] transition-colors"
                        >
                          Quero agora
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredCourses.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === i ? "w-6 bg-[#B8783D]" : "bg-gray-300"
                }`}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
        </div>

        {/* Formularios - Grid com vitrine */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0db5c8]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0db5c8]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340]">Formularios Tecnicos</h3>
                <p className="text-sm text-gray-500">R$ 299 a R$ 399</p>
              </div>
            </div>
            <Link
              href="/formularios"
              className="text-[#B8783D] font-semibold text-sm hover:underline flex items-center gap-1"
            >
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredFormularios.map((form) => (
              <Link
                key={form.id}
                href="/formularios"
                className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#B8783D]/20 transition-all duration-300"
              >
                <div className={`relative h-32 ${form.coverClass}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-white/30" />
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-gray-700">
                    {form.pages}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-[#0C2340] mb-2 line-clamp-2 group-hover:text-[#B8783D] transition-colors">
                    {form.title}
                  </h4>
                  <div className="flex items-end gap-2">
                    <span className="text-xs text-gray-400 line-through">R$ {form.originalPrice}</span>
                    <span className="text-lg font-bold text-[#B8783D]">R$ {form.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* E-books - Grid compacto */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340]">E-books de Formulas</h3>
                <p className="text-sm text-gray-500">A partir de R$ 89,90</p>
              </div>
            </div>
            <Link
              href="/ebooks"
              className="text-[#B8783D] font-semibold text-sm hover:underline flex items-center gap-1"
            >
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {featuredEbooks.map((ebook) => (
              <Link
                key={ebook.id}
                href="/ebooks"
                className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#B8783D]/20 transition-all duration-300"
              >
                <div className={`relative h-24 ${ebook.coverClass}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white/30" />
                  </div>
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white px-1.5 py-0.5 rounded text-[9px] font-bold">
                    PDF
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-semibold text-[#0C2340] mb-2 line-clamp-2 group-hover:text-[#B8783D] transition-colors">
                    {ebook.title}
                  </h4>
                  <span className="text-sm font-bold text-[#B8783D]">
                    R$ {ebook.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </Link>
            ))}
            {/* Card "Ver mais" */}
            <Link
              href="/ebooks"
              className="group flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#B8783D]/40 hover:bg-[#B8783D]/5 transition-all duration-300 min-h-[180px]"
            >
              <Download className="w-8 h-8 text-gray-400 group-hover:text-[#B8783D] transition-colors mb-2" />
              <span className="text-sm font-semibold text-gray-500 group-hover:text-[#B8783D] transition-colors">
                Ver mais
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
