export default function About() {
  const cards = [
    {
      title: "O Significado de Bangtan",
      subtitle: "À prova de balas",
      description:
        "O nome 'Bangtan Sonyeondan' (방탄소년단) significa literalmente 'Escoteiros à Prova de Balas'. A ideia central é bloquear os preconceitos, críticas destrutivas e expectativas opressivas lançadas contra a juventude contemporânea.",
      icon: "🛡️",
    },
    {
      title: "Música com Propósito Real",
      subtitle: "Saúde mental & Vivências",
      description:
        "Desde o início, o BTS escreve e produz suas próprias canções abordando temas raramente explorados no pop tradicional: ansiedade, a pressão acadêmica, a solidão e a jornada de aceitar as próprias falhas.",
      icon: "📝",
    },
    {
      title: "Campanha LOVE MYSELF & ONU",
      subtitle: "Parceria com a UNICEF",
      description:
        "Em parceria com a UNICEF, o grupo liderou a campanha mundial #ENDviolence, arrecadando milhões de dólares para proteger crianças e jovens. Em 2018, RM realizou um discurso memorável na Assembleia Geral da ONU.",
      icon: "🕊️",
    },
    {
      title: "Além do Idioma",
      subtitle: "Cultura e conexão",
      description:
        "Cantando predominantemente em coreano, o BTS provou que a música é uma linguagem universal que conecta diferentes nações. Milhões de fãs ao redor do mundo aprenderam a língua coreana e a cultura asiática através do grupo.",
      icon: "🌏",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#070312]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-purple-400 bg-purple-950/60 px-4 py-1.5 rounded-full border border-purple-500/30">
            História & Filosofia
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Quem é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-100">BTS</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80 leading-relaxed">
            Formado na Coreia do Sul em 13 de junho de 2013 pela Big Hit Entertainment, o BTS transcendeu o universo da música para se tornar um dos fenômenos culturais e humanitários mais influentes do século XXI.
          </p>
        </div>

        {/* Destaque Conceitual "Love Yourself" */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-900/40 via-purple-950/60 to-indigo-950/40 border border-purple-500/30 backdrop-blur-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest">
              Mensagem Central
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              &quot;Amor próprio não é vaidade: é o ponto de partida para amar o mundo.&quot;
            </h3>
            <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
              A era <strong className="text-white">Love Yourself</strong> marcou a virada global do BTS. Mais do que vender milhões de ingressos e alcançar o primeiro lugar na Billboard, o septeto construiu um diálogo seguro com quem se sentia invisível, lembrando que cada cicatriz faz parte da nossa própria constelação.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-purple-300">
              <span className="px-3 py-1.5 rounded-lg bg-purple-900/50 border border-purple-500/30">
                #SpeakYourself
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-purple-900/50 border border-purple-500/30">
                #LoveMyself
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-purple-900/50 border border-purple-500/30">
                #UNICEF
              </span>
            </div>
          </div>
        </div>

        {/* Grade de 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#120a24] to-[#0c0618] border border-purple-500/20 hover:border-purple-400/40 hover:bg-[#160d2e] transition-all duration-300 shadow-lg shadow-purple-950/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/30">
                    {card.icon}
                  </span>
                  <span className="text-xs font-bold text-purple-400/80 tracking-widest uppercase">
                    Pilar 0{index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{card.title}</h4>
                <p className="text-xs font-semibold text-fuchsia-400 mb-3">{card.subtitle}</p>
                <p className="text-sm text-purple-200/80 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
