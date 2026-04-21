export function TrustMarquee() {
  const items = [
    "Farmacêutico USF",
    "Bolsista CNPq · UNICAMP",
    "Publicação Peer-Reviewed DOI",
    "In-Cosmetics Global Paris 2025",
    "1° Peeling Azelaico Pasta Anidra",
    "Criador Técnica Fenol FREE",
    "Missões Paris · Amsterdam · Japão",
    "Speaker 7+ Congressos",
    "Co-Organizador 1° Simpósio de Peelings",
  ]

  // Duplicate for seamless marquee
  const allItems = [...items, ...items]

  return (
    <div className="bg-off-white border-t border-b border-border py-[18px] overflow-hidden">
      <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3.5">
            <div className="w-[5px] h-[5px] rounded-full bg-copper shrink-0" />
            <span className="text-[11.5px] text-muted tracking-[1px] uppercase font-semibold">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
