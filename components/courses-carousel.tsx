"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, ArrowLeft, GraduationCap, Users, Clock, Star, ChevronRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Formulacao de Regeneradores Cutaneos",
    description: "Domine os ativos e protocolos para cicatrizacao, antiaging e reparacao tecidual.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    price: "R$ 997",
    originalPrice: "R$ 1.497",
    rating: 4.9,
    students: 342,
    duration: "12h de conteudo",
    tag: "Mais vendido",
    href: "/cursos/regeneradores",
    color: "#1a4d5c",
  },
  {
    id: 2,
    title: "Melasma: Do Mecanismo ao Protocolo",
    description: "Abordagem cientifica completa para tratamento e prevencao de hiperpigmentacao.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    price: "R$ 897",
    originalPrice: "R$ 1.297",
    rating: 4.8,
    students: 289,
    duration: "10h de conteudo",
    tag: "Novo",
    href: "/cursos/melasma",
    color: "#6b2737",
  },
  {
    id: 3,
    title: "Peptideos Bioativos na Dermatologia",
    description: "Mecanismos de acao, formulacoes estaveis e protocolos clinicos com peptideos.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80",
    price: "R$ 1.197",
    originalPrice: "R$ 1.797",
    rating: 4.9,
    students: 256,
    duration: "15h de conteudo",
    tag: "Premium",
    href: "/cursos/peptideos",
    color: "#1e4a6b",
  },
  {
    id: 4,
    title: "Veiculos e Sistemas de Liberacao",
    description: "Lipossomas, nanoemulsoes e sistemas de delivery que potencializam resultados.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    price: "R$ 797",
    originalPrice: "R$ 1.097",
    rating: 4.7,
    students: 198,
    duration: "8h de conteudo",
    tag: "Essencial",
    href: "/cursos/veiculos",
    color: "#5c4d3d",
  },
  {
    id: 5,
    title: "Peelings Quimicos: Teoria e Pratica",
    description: "Formulacao, indicacoes e protocolos seguros para procedimentos com acidos.",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    price: "R$ 697",
    originalPrice: "R$ 997",
    rating: 4.8,
    students: 312,
    duration: "9h de conteudo",
    tag: "Popular",
    href: "/cursos/peelings",
    color: "#5c3d3d",
  },
]

export function CoursesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#faf6ef] to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#B8783D]" />
              <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#B8783D]">
                Educacao de alto nivel
              </span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] leading-[1.1] tracking-[-0.02em]">
              Veja meus <em className="italic text-[#B8783D]">cursos</em>
            </h2>
            <p className="mt-4 text-[17px] text-[#4b5563] max-w-[520px] leading-relaxed">
              Conhecimento pratico derivado de 6 anos coordenando P&D. Aprenda tecnicas que funcionam na bancada real.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full border-2 border-[#0C2340]/20 flex items-center justify-center text-[#0C2340] hover:border-[#B8783D] hover:text-[#B8783D] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Curso anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full bg-[#B8783D] flex items-center justify-center text-white hover:bg-[#a66a32] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Proximo curso"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
              >
                <Link href={course.href} className="group block h-full">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(184,120,61,0.15)] transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(180deg, transparent 40%, ${course.color}ee 100%)`,
                        }}
                      />
                      {/* Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-[#B8783D] text-white text-[11px] font-bold uppercase tracking-wider">
                          {course.tag}
                        </span>
                      </div>
                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-[14px]">{course.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-[20px] text-[#0C2340] leading-tight mb-2 group-hover:text-[#B8783D] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-[14px] text-[#6b7280] leading-relaxed mb-4 flex-1">
                        {course.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-[12px] text-[#9ca3af] mb-5">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          <span>{course.students} alunos</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-[13px] text-[#9ca3af] line-through">
                            {course.originalPrice}
                          </span>
                          <div className="text-[24px] font-bold text-[#0C2340]">{course.price}</div>
                        </div>
                        <div className="flex items-center gap-1 text-[#B8783D] font-semibold text-[14px] group-hover:gap-2 transition-all">
                          Ver curso
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-[#B8783D] w-6" : "bg-[#d1d5db]"
              }`}
              aria-label={`Ir para curso ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/cursos"
            className="inline-flex items-center gap-2 text-[#0C2340] font-semibold text-[16px] hover:text-[#B8783D] transition-colors"
          >
            Ver todos os cursos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
