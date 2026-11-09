import { ARMY_PILLARS } from "@/data/btsData";

export default function Army() {
  return (
    <section id="army" className="py-24 relative overflow-hidden bg-[#090416]">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-fuchsia-400 bg-fuchsia-950/60 px-4 py-1.5 rounded-full border border-fuchsia-500/30">
            A Maior Família Global
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            O Universo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-100">A.R.M.Y</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80 leading-relaxed">
            Mais do que admiradores de música pop, o ARMY construiu um ecossistema mundial de solidariedade, apoio emocional mútuo e celebração da diversidade.
          </p>
        </div>

        {/* Banner Borahae (I Purple You) */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#210c42] via-[#1a0a36] to-[#120726] border border-purple-500/30 backdrop-blur-md relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/40 text-purple-300 text-xs font-semibold mb-4 border border-purple-400/30">
              <span>💜</span>
              <span>보라해 • I Purple You</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              &quot;Roxo é a última cor do arco-íris: significa que vou amar e confiar em você por muito tempo.&quot;
            </h3>
            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
              Palavras pronunciadas por Kim Taehyung (V) durante o fanmeeting do BTS em 2016. Desde então, a cor roxa se tornou a assinatura visual e o código de afeto incondicional compartilhado entre os sete membros e fãs em todos os continentes.
            </p>
          </div>
        </div>

        {/* 4 Pilares da Comunidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ARMY_PILLARS.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#140a28] to-[#0d061c] border border-purple-500/20 hover:border-purple-400/40 transition-colors shadow-lg"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-900/40 border border-purple-500/30 mb-4">
                {pillar.badge}
              </span>
              <h4 className="text-xl font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-sm text-purple-200/80 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Cartão Especial: Conexão Especial com o Brasil */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/25 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              🇧🇷 B-ARMY & Os Shows no Brasil
            </span>
            <h4 className="text-2xl font-bold text-white mt-2 mb-3">
              Uma Paixão Inesquecível nos Palcos Brasileiros
            </h4>
            <p className="text-sm text-purple-200/80 leading-relaxed">
              O público brasileiro tem um lugar cativo no coração do BTS. As passagens do grupo pelo país — com estádios lotados no Allianz Parque cantando todas as letras em coreano a plenos pulmões — geraram momentos históricos onde os membros declararam abertamente sua admiração pela energia calorosa e contagiante do Brasil.
            </p>
          </div>
          <div className="shrink-0 p-6 rounded-2xl bg-purple-900/30 border border-purple-500/30 text-center">
            <span className="text-4xl block mb-2">🇧🇷 💜 🇰🇷</span>
            <span className="text-xs font-bold text-purple-200 tracking-wider uppercase">
              Brasil & BTS
            </span>
            <p className="text-[11px] text-purple-300/70 mt-1">
              Energia pura e respeito mútuo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
