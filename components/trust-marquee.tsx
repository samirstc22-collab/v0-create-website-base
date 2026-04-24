export function TrustMarquee() {
  const items = [
    "6 anos coordenando P&D no maior grupo magistral",
    "500+ farmacias atendidas tecnicamente",
    "1.000+ formuladores treinados",
    "Delegado In-Cosmetics Global Paris 2025",
    "Missoes Paris | Amsterdam | Japao",
    "Paper Peer-Reviewed com DOI indexado",
    "Criador Tecnica Fenol FREE",
    "1o Peeling Azelaico em Pasta Anidra do Mundo",
    "Co-Organizador 1o Simposio de Peelings do Brasil",
    "8/10 modulos ICosmetologia ministrados",
  ]

  const allItems = [...items, ...items]

  return (
    <div className="bg-navy-deep border-t border-b border-white/5 py-5 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
            <span className="text-xs text-white/45 tracking-[2px] uppercase font-semibold">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
