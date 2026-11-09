export default function Footer() {
  return (
    <footer className="bg-[#05020c] border-t border-purple-500/20 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-500/15">
          {/* Logo e Identificação */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 to-fuchsia-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0515] rounded-[6px] flex items-center justify-center">
                  <span className="text-xs font-black text-purple-300">BTS</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                BTS Brasil Fanbase
              </span>
            </div>
            <p className="text-xs text-purple-300/70 mt-2 max-w-sm">
              Espaço independente mantido por fãs para divulgar a arte, história e valores positivos do BTS.
            </p>
          </div>

          {/* Links Rápidos de Navegação */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-purple-300/80">
            <a href="#inicio" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre o BTS
            </a>
            <a href="#integrantes" className="hover:text-white transition-colors">
              Os 7 Integrantes
            </a>
            <a href="#musicas" className="hover:text-white transition-colors">
              Discografia
            </a>
            <a href="#army" className="hover:text-white transition-colors">
              Universo ARMY
            </a>
            <a href="#links" className="hover:text-white transition-colors">
              Canais Oficiais
            </a>
          </div>

          {/* Botão de Retorno ao Topo */}
          <a
            href="#inicio"
            className="p-3 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
            aria-label="Voltar ao início da página"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

        {/* Aviso Legal Obrigatório (Projeto Não Oficial) */}
        <div className="pt-8 text-center md:text-left space-y-3">
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-300/80 leading-relaxed">
            <strong className="text-purple-200">Aviso Legal & Direitos Autorais:</strong> Este é um site de homenagem feito por fãs sem fins lucrativos, criado estritamente para propósitos de estudo em programação web e apreciação cultural. Todas as músicas, nomes, marcas registradas e imagens pertencem aos seus respectivos proprietários: <strong className="text-white">BIGHIT MUSIC / HYBE Corporation</strong>. Este projeto não possui afiliação, patrocínio ou chancela oficial dos artistas ou de sua gravadora.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-purple-400/60 pt-4">
            <p>© 2026 BTS Brasil Fan Tribute. Desenvolvido com carinho e código limpo.</p>
            <p className="mt-1 sm:mt-0 flex items-center gap-1.5">
              <span>Feito com</span>
              <span className="text-purple-400">💜</span>
              <span>pela comunidade ARMY</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
