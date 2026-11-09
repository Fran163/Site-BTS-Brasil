import { ALBUMS_DATA, OFFICIAL_CHANNELS } from "@/data/btsData";

export default function Music() {
  return (
    <section id="musicas" className="py-24 relative overflow-hidden bg-[#070312]">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-purple-400 bg-purple-950/60 px-4 py-1.5 rounded-full border border-purple-500/30">
            Discografia & Músicas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Álbuns que Marcaram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-100">
              Gerações
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80 leading-relaxed">
            Navegue pelas eras mais marcantes da discografia do BTS e acesse os links oficiais para ouvir em streaming com qualidade original.
          </p>
        </div>

        {/* Grade de Álbuns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ALBUMS_DATA.map((album) => (
            <div
              key={album.id}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#140b28] to-[#0c0618] border border-purple-500/25 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-950/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Topo do Card com Ilustração de Vinil/Mídia */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-800 to-fuchsia-600 flex items-center justify-center shadow-md shadow-purple-950/60 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider block">
                      {album.type}
                    </span>
                    <span className="text-xs text-purple-300/80 font-medium">
                      Lançamento: {album.year}
                    </span>
                  </div>
                </div>

                {/* Título & Era */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                  {album.title}
                </h3>
                <p className="text-xs font-semibold text-purple-300 mb-4">
                  Era: <span className="text-purple-100">{album.era}</span>
                </p>

                {/* Descrição */}
                <p className="text-sm text-purple-200/80 leading-relaxed mb-6">
                  {album.description}
                </p>

                {/* Faixas em Destaque */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-2">
                    Faixas Recomendadas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {album.highlightTracks.map((track, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-950/60 text-purple-200 border border-purple-500/20"
                      >
                        🎵 {track}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link Oficial de Reprodução */}
              <a
                href={album.streamingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 transition-colors border border-purple-400/20 shadow-md"
              >
                <span>Ouvir Álbum Oficial</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Seção de Canais Oficiais de Streaming */}
        <div id="links" className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#140a2a] via-[#0d061c] to-[#0a0416] border border-purple-500/30">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-900/40 px-3 py-1 rounded-md border border-purple-500/30">
              Acesso Seguro e Oficial
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Onde Ouvir & Apoiar o BTS Legalmente
            </h3>
            <p className="text-sm sm:text-base text-purple-200/80 mt-2">
              Apoie os artistas consumindo sua arte através de canais e plataformas oficiais verificadas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICIAL_CHANNELS.map((channel, cIdx) => (
              <a
                key={cIdx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-fuchsia-400">
                      {channel.category}
                    </span>
                    <svg className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {channel.name}
                  </h4>
                  <p className="text-xs text-purple-200/70 mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-500/20 text-xs font-semibold text-purple-300 flex items-center gap-1.5">
                  <span>Acessar Canal Oficial</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
