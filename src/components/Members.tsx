import { MEMBERS_DATA } from "@/data/btsData";

export default function Members() {
  return (
    <section id="integrantes" className="py-24 relative overflow-hidden bg-[#090416]">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-purple-400 bg-purple-950/60 px-4 py-1.5 rounded-full border border-purple-500/30">
            Sete Cores Únicas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Os Sete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-100">Integrantes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80 leading-relaxed">
            Cada membro traz uma bagagem única de talentos, personalidades e visões de mundo. Juntos, formam uma química artística inigualável.
          </p>
        </div>

        {/* Grade de Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERS_DATA.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl bg-gradient-to-b from-[#140b28] to-[#0c0618] border border-purple-500/25 p-7 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-950/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Card: Avatar Artístico & Identificação */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Avatar Tipográfico e Geométrico com Cores de Assinatura */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.signatureColor} p-1 shadow-lg shadow-purple-950/60 flex items-center justify-center transform group-hover:scale-105 transition-transform`}
                  >
                    <div className="w-full h-full bg-[#0a0515]/90 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-xs font-black text-white/90">
                        {member.stageName}
                      </span>
                      <span className="text-[10px] text-purple-300/80 font-medium">
                        {member.hangul}
                      </span>
                    </div>
                  </div>

                  {/* Tag de destaque */}
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-200 border border-purple-500/30">
                      {member.tag}
                    </span>
                    <p className="text-[11px] text-purple-400/70 mt-1">
                      {member.birthDate}
                    </p>
                  </div>
                </div>

                {/* Nome e Função */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {member.stageName}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-medium text-purple-300">
                      {member.fullName}
                    </span>
                    <span className="text-purple-500">•</span>
                    <span className="text-xs text-purple-400/80">
                      {member.birthPlace}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-fuchsia-400 mt-1 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Biografia Resumida */}
                <p className="text-sm text-purple-100/80 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Destaques e Obras */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    Destaques & Conquistas:
                  </p>
                  <ul className="space-y-1.5">
                    {member.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-purple-200/75 flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Frase Marcante do Integrante */}
              <div className="pt-4 border-t border-purple-500/20 mt-2">
                <p className="text-xs italic text-purple-300/90 leading-relaxed">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
