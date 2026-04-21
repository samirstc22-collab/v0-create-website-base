"use client"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-[110px] px-8 bg-off-white">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Contato
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Preencha o formulário ou fale direto pelo WhatsApp. Retorno em até 24 horas úteis.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3.5 px-[18px] rounded-[10px] border border-border bg-white text-dark text-[14px] font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_3px_rgba(192,133,74,0.1)]"
              placeholder="Nome"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3.5 px-[18px] rounded-[10px] border border-border bg-white text-dark text-[14px] font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_3px_rgba(192,133,74,0.1)]"
              placeholder="E-mail"
            />
          </div>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full mt-3.5 py-3.5 px-[18px] rounded-[10px] border border-border bg-white text-dark text-[14px] font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_3px_rgba(192,133,74,0.1)]"
          >
            <option value="">Interesse principal</option>
            <option value="consult-magistral">Consultoria Magistral Completa</option>
            <option value="pd-industrial">P&D Industrial — Indústrias e Marcas</option>
            <option value="diagnostico">Diagnóstico Técnico</option>
            <option value="missao">Missões Internacionais</option>
            <option value="ebook">eBooks, Formulários e Cursos</option>
            <option value="palestra">Convite para Palestra</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-3.5 py-3.5 px-[18px] rounded-[10px] border border-border bg-white text-dark text-[14px] font-sans outline-none transition-all resize-y focus:border-copper focus:shadow-[0_0_0_3px_rgba(192,133,74,0.1)]"
            placeholder="Descreva seu projeto ou dúvida"
            rows={4}
          />
          <div className="flex gap-3.5 mt-5 flex-wrap">
            <button className="flex-1 min-w-[200px] bg-gradient-to-br from-copper to-copper-deep border-none rounded-[10px] py-[15px] px-6 text-white font-bold text-[15px] shadow-[0_4px_20px_rgba(192,133,74,0.25)] hover:translate-y-[-1px] hover:shadow-[0_6px_28px_rgba(192,133,74,0.35)] transition-all tracking-[0.3px]">
              Enviar Mensagem
            </button>
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] bg-[#25D366] border-none rounded-[10px] py-[15px] px-6 text-white font-bold text-[15px] flex items-center justify-center gap-2.5 hover:translate-y-[-1px] transition-all shadow-[0_4px_20px_rgba(37,211,102,0.25)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
