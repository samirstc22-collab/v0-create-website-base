"use client"

import { useState } from "react"

export function Hero() {
  const [email, setEmail] = useState("")

  const stats = [
    { num: "4.000+", label: "Fórmulas testadas" },
    { num: "20+", label: "Indústrias atendidas" },
    { num: "3", label: "Continentes em missão" },
    { num: "1.000+", label: "Profissionais formados" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-deep to-[#050E1B] relative overflow-hidden"
    >
      {/* Ornaments */}
      <div className="absolute top-[10%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.14),transparent_70%)] blur-[40px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(192,133,74,0.1),transparent_70%)] blur-[40px]" />

      {/* Molecular Background Pattern */}
      <svg className="absolute inset-0 opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mol" width="140" height="140" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="2" fill="#fff" />
            <circle cx="70" cy="34" r="1.5" fill="#fff" />
            <circle cx="128" cy="18" r="2" fill="#fff" />
            <circle cx="42" cy="82" r="1.5" fill="#fff" />
            <circle cx="104" cy="94" r="2" fill="#fff" />
            <circle cx="65" cy="128" r="1.5" fill="#fff" />
            <line x1="12" y1="12" x2="70" y2="34" stroke="#fff" strokeWidth="0.4" />
            <line x1="70" y1="34" x2="128" y2="18" stroke="#fff" strokeWidth="0.4" />
            <line x1="70" y1="34" x2="42" y2="82" stroke="#fff" strokeWidth="0.4" />
            <line x1="42" y1="82" x2="104" y2="94" stroke="#fff" strokeWidth="0.4" />
            <line x1="104" y1="94" x2="65" y2="128" stroke="#fff" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mol)" />
      </svg>

      <div className="max-w-[1280px] mx-auto px-8 pt-40 pb-24 w-full relative z-[2]">
        <div className="flex gap-[72px] items-center flex-wrap">
          <div className="flex-[1_1_540px] min-w-[280px]">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(10,143,158,0.12)] border border-[rgba(10,143,158,0.25)] rounded-full py-2 px-[18px] mb-8">
              <div className="w-[7px] h-[7px] rounded-full bg-teal animate-pulse-dot" />
              <span className="text-teal-light text-[11.5px] font-semibold tracking-[1.5px] uppercase">
                Pesquisador · Consultor Industrial · Speaker
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-normal text-[clamp(36px,5.8vw,68px)] leading-[1.05] text-white mb-6 tracking-[-1px]">
              Ciência que vira <span className="text-gradient-copper">fórmula.</span>
              <br />
              Fórmula que vira <span className="text-gradient-teal">resultado.</span>
            </h1>

            {/* Description */}
            <p className="text-[17px] text-white/[0.58] leading-[1.75] max-w-[520px] mb-9 font-normal">
              P&D cosmético para indústrias, marcas independentes e farmácias magistrais. Pesquisa
              CNPq–UNICAMP, publicação peer-reviewed e missões técnicas em três continentes.
            </p>

            {/* Email Form */}
            <div className="flex gap-2.5 max-w-[460px] flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-[1_1_220px] py-[15px] px-[18px] rounded-[10px] border border-white/[0.14] bg-white/[0.06] text-white text-[14px] font-sans outline-none transition-all focus:border-copper focus:bg-white/[0.08] placeholder:text-white/[0.38]"
                placeholder="Seu melhor e-mail"
              />
              <button className="bg-gradient-to-br from-copper to-copper-deep border-none rounded-[10px] py-[15px] px-7 text-white font-bold text-[14px] whitespace-nowrap shadow-[0_6px_24px_rgba(192,133,74,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(192,133,74,0.45)] transition-all tracking-[0.3px]">
                Receber Conteúdo
              </button>
            </div>

            <p className="text-[12px] text-white/[0.35] mt-3 tracking-[0.2px]">
              Protocolos exclusivos, lâminas técnicas e atualizações científicas mensais.
            </p>
          </div>

          {/* Visual Side */}
          <div className="flex-[0_1_420px] min-w-[280px] relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="absolute top-5 left-5 bg-[rgba(11,29,53,0.85)] backdrop-blur-[16px] border border-white/[0.12] rounded-full py-1.5 px-3.5 text-[11px] font-semibold text-copper-light tracking-[1px] uppercase z-[2]">
                CNPq · UNICAMP · DOI
              </div>
              <div className="w-full aspect-[4/5] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center">
                <span className="font-serif text-[120px] text-white/10">Cf</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(7,22,41,0.6)] pointer-events-none" />
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-[-28px] left-[-20px] right-[-20px] bg-[rgba(11,29,53,0.94)] backdrop-blur-[16px] rounded-[18px] p-[22px_26px] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] z-[3]">
              <div className="grid grid-cols-2 gap-[18px]">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <span className="font-serif text-[24px] text-copper-light leading-none block">
                      {stat.num}
                    </span>
                    <div className="text-[11px] text-white/[0.42] mt-1 leading-[1.3]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
