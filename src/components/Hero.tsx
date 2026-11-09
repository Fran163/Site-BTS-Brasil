import { MILESTONES } from "@/data/btsData";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Luzes de fundo atmosféricas (efeito glow roxo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-700/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-fuchsia-600/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge Informativa de Projeto de Fãs */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Projeto de Fãs Brasileiro • Não Oficial</span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300 font-semibold">보라해 (Borahae)</span>
          </div>

          {/* Símbolo Artístico BTS - Emblema Vetorial */}
          <div className="mb-6 flex items-center justify-center">
            <div className="relative p-3 rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent border border-purple-400/20 backdrop-blur-sm shadow-xl shadow-purple-950/60">
              <svg
                width="64"
                height="64"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-300 drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]"
              >
                {/* Portas estilizadas do BTS (juventude abrindo portas para o futuro) */}
                <path d="M18 16 L44 26 L44 74 L18 84 Z" fill="url(#hero-bts-grad)" />
                <path d="M82 16 L56 26 L56 74 L82 84 Z" fill="url(#hero-bts-grad)" />
                <defs>
                  <linearGradient id="hero-bts-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6b21a8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Sete Vozes. Uma Família.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-200">
              Um Movimento Global.
            </span>
          </h1>

          {/* Subtítulo Inspirador */}
          <p className="text-lg sm:text-xl text-purple-200/90 leading-relaxed font-normal max-w-2xl mb-10">
            Bem-vindo à nossa página de tributo ao <strong className="text-white font-semibold">BTS (Bangtan Sonyeondan)</strong>. 
            Uma celebração da música que acolhe, inspira autoaceitação e une milhões de corações ao redor do planeta através do amor e da arte.
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#integrantes"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-950/60 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 border border-purple-400/30"
            >
              <span>Conhecer os 7 Integrantes</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="#musicas"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-purple-200 bg-purple-950/50 hover:bg-purple-900/60 hover:text-white border border-purple-500/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explorar Álbuns & Solos</span>
              <span className="text-lg">🎵</span>
            </a>
          </div>

          {/* Grade de Estatísticas / Marcos */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-purple-500/20">
            {MILESTONES.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-purple-900/20 to-purple-950/40 border border-purple-500/20 backdrop-blur-sm flex flex-col items-center text-center hover:border-purple-400/40 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
                  {item.value}
                </span>
                <span className="text-sm font-semibold text-white mt-1">
                  {item.label}
                </span>
                <span className="text-xs text-purple-300/70 mt-1 leading-snug">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
