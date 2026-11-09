export interface Member {
  id: string;
  stageName: string;
  fullName: string;
  hangul: string;
  role: string;
  birthDate: string;
  birthPlace: string;
  bio: string;
  highlights: string[];
  signatureColor: string;
  tag: string;
  quote: string;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  era: string;
  description: string;
  highlightTracks: string[];
  streamingUrl: string;
  type: string;
}

export interface OfficialLink {
  name: string;
  category: string;
  url: string;
  iconName: string;
  description: string;
}

export const MEMBERS_DATA: Member[] = [
  {
    id: "rm",
    stageName: "RM",
    fullName: "Kim Nam-joon",
    hangul: "김남준",
    role: "Líder & Rapper Principal",
    birthDate: "12 de setembro de 1994",
    birthPlace: "Ilsan, Coreia do Sul",
    bio: "Cérebro estratégico e porta-voz do grupo, RM é reconhecido por suas letras filosóficas, paixão pela arte visual e oratória marcante, tendo discursado na Assembleia Geral da ONU.",
    highlights: ["Compositor prolífico com mais de 200 músicas creditadas", "Álbuns solo aclamados: 'mono.' (2018) e 'Indigo' (2022)", "Porta-voz oficial em discursos globais pela juventude"],
    signatureColor: "from-blue-600 to-indigo-900",
    tag: "A Mente Inspiradora",
    quote: "Não importa quem você é, de onde veio, sua cor de pele ou identidade de gênero: apenas fale por si mesmo."
  },
  {
    id: "jin",
    stageName: "Jin",
    fullName: "Kim Seok-jin",
    hangul: "김석진",
    role: "Sub-Vocalista & Visual",
    birthDate: "04 de dezembro de 1992",
    birthPlace: "Gwacheon, Coreia do Sul",
    bio: "O integrante mais velho do grupo, Jin equilibra um carisma cômico e afetuoso com uma voz de tenor lírico poderosa e emocionante, além de grande dedicação aos companheiros.",
    highlights: ["Solo icônico 'Epiphany' com a mensagem de autoaceitação", "Lançamentos de destaque: 'The Astronaut' (2022) e o álbum 'Happy' (2024)", "Famoso por sua personalidade cativante e acolhedora"],
    signatureColor: "from-pink-500 to-purple-800",
    tag: "Worldwide Handsome",
    quote: "Eu sou aquele a quem eu deveria amar neste mundo: o meu próprio eu brilhante, a minha alma preciosa."
  },
  {
    id: "suga",
    stageName: "SUGA",
    fullName: "Min Yoon-gi",
    hangul: "민윤기",
    role: "Rapper Líder & Produtor",
    birthDate: "09 de março de 1993",
    birthPlace: "Daegu, Coreia do Sul",
    bio: "Produtor genial e letrista afiado, SUGA também assina projetos solo sob o alter ego Agust D. Suas músicas abordam corajosamente saúde mental, ambição e superação.",
    highlights: ["Produtor premiado para diversos artistas internacionais", "Trilogia musical solo aclamada: 'Agust D', 'D-2' e 'D-DAY'", "Turnê solo mundial com ingressos esgotados em arenas globais"],
    signatureColor: "from-amber-600 to-stone-900",
    tag: "O Poeta & Produtor",
    quote: "Mesmo que o mundo seja difícil e às vezes pareça vazio, que seus sonhos floresçam no final."
  },
  {
    id: "j-hope",
    stageName: "j-hope",
    fullName: "Jung Ho-seok",
    hangul: "정호석",
    role: "Dançarino Principal & Rapper",
    birthDate: "18 de fevereiro de 1994",
    birthPlace: "Gwangju, Coreia do Sul",
    bio: "Considerado a espinha dorsal das coreografias do BTS, j-hope irradia energia positiva constante, aliada a uma precisão impecável na dança e composições com influências de hip-hop clássico.",
    highlights: ["Primeiro artista sul-coreano a ser atração principal no festival Lollapalooza Chicago", "Álbum conceitual 'Jack In The Box' e documentário 'Hope On The Street'", "Líder de ensaios e diretor de performance do grupo"],
    signatureColor: "from-emerald-600 to-teal-950",
    tag: "A Esperança & Dança",
    quote: "Se você não trabalha duro, não há resultados. Eu quero ser a esperança que ilumina o caminho das pessoas."
  },
  {
    id: "jimin",
    stageName: "Jimin",
    fullName: "Park Ji-min",
    hangul: "박지민",
    role: "Dançarino Principal & Vocalista Líder",
    birthDate: "13 de outubro de 1995",
    birthPlace: "Busan, Coreia do Sul",
    bio: "Com formação em dança moderna e contemporânea, Jimin impressiona pela graça acrobática de seus movimentos e por um alcance vocal delicado e expressivo que marca os refrões do grupo.",
    highlights: ["Músicas solo lendárias: 'Lie', 'Serendipity' e 'Filter'", "Primeiro solista sul-coreano a alcançar o #1 na Billboard Hot 100 com 'Like Crazy'", "Reconhecido mundialmente por sua expressividade cênica única"],
    signatureColor: "from-violet-500 to-purple-950",
    tag: "Elegância & Expressão",
    quote: "Nunca desista de um sonho que você vem perseguindo por toda a sua vida."
  },
  {
    id: "v",
    stageName: "V",
    fullName: "Kim Tae-hyung",
    hangul: "김태형",
    role: "Sub-Vocalista & Dançarino",
    birthDate: "30 de dezembro de 1995",
    birthPlace: "Daegu, Coreia do Sul",
    bio: "Dono de uma voz de barítono profunda, quente e versátil, V é apaixonado por jazz, fotografia analógica e arte clássica, trazendo uma estética vintage e magnética para suas criações.",
    highlights: ["Criador da célebre frase e símbolo de carinho 'Borahae' (I Purple You)", "Álbum solo de R&B e Jazz aclamado pela crítica: 'Layover' (2023)", "Faixas marcantes como 'Singularity', 'Sweet Night' e 'Love Me Again'"],
    signatureColor: "from-purple-700 to-slate-900",
    tag: "Alma de Jazz & Criador do Borahae",
    quote: "Roxo é a última cor do arco-íris. Significa que vou amar e confiar em você por muito tempo."
  },
  {
    id: "jung-kook",
    stageName: "Jung Kook",
    fullName: "Jeon Jung-kook",
    hangul: "전정국",
    role: "Vocalista Principal & Dançarino",
    birthDate: "01 de setembro de 1997",
    birthPlace: "Busan, Coreia do Sul",
    bio: "Conhecido carinhosamente como o 'Golden Maknae' (o caçula dourado), Jung Kook é um fenômeno de versatilidade, dominando canto com fôlego impecável, dança, desenho, produção em vídeo e esportes.",
    highlights: ["Intérprete da música oficial da Copa do Mundo FIFA 2022 ('Dreamers')", "Álbum de estreia global 'GOLDEN' com recordes históricos no Spotify", "Sucessos planetários em primeiro lugar: 'Seven' e 'Standing Next to You'"],
    signatureColor: "from-fuchsia-600 to-indigo-950",
    tag: "O Maknae de Ouro",
    quote: "Viver sem paixão é como estar morto. Enquanto eu puder cantar, eu continuarei dando o meu melhor."
  }
];

export const ALBUMS_DATA: Album[] = [
  {
    id: "love-yourself-tear",
    title: "Love Yourself: 轉 'Tear'",
    year: "2018",
    era: "A Dor e a Verdade",
    type: "Álbum de Estúdio",
    description: "Um marco na discografia internacional, o álbum explora as sombras e a dor do desamor quando uma pessoa perde a si mesma ao tentar agradar o outro.",
    highlightTracks: ["FAKE LOVE", "The Truth Untold (feat. Steve Aoki)", "Anpanman", "Outro: Tear"],
    streamingUrl: "https://open.spotify.com/album/2jMy1DZz75Jy01G9N41L94"
  },
  {
    id: "map-of-the-soul-7",
    title: "Map of the Soul: 7",
    year: "2020",
    era: "7 Anos de Jornada",
    type: "Álbum de Estúdio",
    description: "Inspirado nas teorias de Carl Jung sobre a psique humana, o álbum celebra os 7 anos dos 7 membros, abraçando tanto suas luzes públicas quanto suas sombras internas.",
    highlightTracks: ["ON", "Black Swan", "Boy With Luv (feat. Halsey)", "We Are Bulletproof: the Eternal"],
    streamingUrl: "https://open.spotify.com/album/6mJZTV8lCq0ZIGhgDCQIQI"
  },
  {
    id: "be",
    title: "BE",
    year: "2020",
    era: "Conforto em Tempos Difíceis",
    type: "Álbum de Estúdio",
    description: "Criado durante o isolamento da pandemia mundial, o projeto foi totalmente produzido e direcionado visualmente pelos sete membros como uma mensagem de esperança e cura.",
    highlightTracks: ["Life Goes On", "Dynamite", "Blue & Grey", "Telepathy"],
    streamingUrl: "https://open.spotify.com/album/2qehskW9iNaRefnWqBM7gv"
  },
  {
    id: "proof",
    title: "Proof",
    year: "2022",
    era: "Antologia & Legado",
    type: "Álbum Antologia",
    description: "Uma coletânea histórica em 3 volumes que documenta o passado, presente e futuro do grupo, contendo grandes clássicos, faixas inéditas e gravações demo exclusivas.",
    highlightTracks: ["Yet To Come (The Most Beautiful Moment)", "Run BTS", "For Youth", "Born Singer"],
    streamingUrl: "https://open.spotify.com/album/6al2VzyjqW00yNFUSbgRB9"
  },
  {
    id: "wings",
    title: "WINGS",
    year: "2016",
    era: "Tentações & Amadurecimento",
    type: "Álbum de Estúdio",
    description: "Inspirado na obra 'Demian' de Hermann Hesse, consolidou a narrativa artística profunda do grupo sobre o crescimento e o conflito entre o bem e o mal.",
    highlightTracks: ["Blood Sweat & Tears", "Spring Day", "Not Today", "Boy Meets Evil"],
    streamingUrl: "https://open.spotify.com/album/17WkLCHGf4iWq08kQ980pG"
  }
];

export const OFFICIAL_CHANNELS: OfficialLink[] = [
  {
    name: "Spotify Oficial",
    category: "Música & Streaming",
    url: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
    iconName: "spotify",
    description: "Ouça a discografia completa, solos e colaborações oficiais no perfil verificado do BTS no Spotify."
  },
  {
    name: "YouTube (@BTS)",
    category: "Vídeos & Clipes",
    url: "https://www.youtube.com/@BTS",
    iconName: "youtube",
    description: "Assista a videoclipes musicais (MVs), bastidores das turnês ('BANGTAN BOMB') e transmissões ao vivo."
  },
  {
    name: "Apple Music Oficial",
    category: "Música em Alta Fidelidade",
    url: "https://music.apple.com/artist/bts/883131348",
    iconName: "apple",
    description: "Acesse álbuns remasterizados em Áudio Espacial e listas editoriais completas na Apple Music."
  },
  {
    name: "Portal BIGHIT MUSIC",
    category: "Site Oficial",
    url: "https://ibighit.com/bts/",
    iconName: "globe",
    description: "Página oficial da agência com anúncios institucionais, galeria fotográfica de lançamentos e avisos globais."
  }
];

export const MILESTONES = [
  { value: "7", label: "Integrantes Unidos", detail: "Irmandade e harmonia artística desde o início" },
  { value: "2013", label: "Ano de Estreia", detail: "Mais de uma década de história e evolução contínua" },
  { value: "+35B", label: "Streams Globais", detail: "O grupo de maior impacto internacional da história recente" },
  { value: "ONU", label: "Discurso Histórico", detail: "Voz ativa na defesa da juventude e da autoaceitação" }
];

export const ARMY_PILLARS = [
  {
    title: "O que significa A.R.M.Y?",
    description: "Significa 'Adorable Representative M.C. for Youth'. Como a armadura ('armor') protege contra as adversidades, o BTS e seus fãs são como uma fortaleza mútua de proteção e companheirismo.",
    badge: "Significado do Nome"
  },
  {
    title: "A Origem do 'Borahae' (I Purple You)",
    description: "Criada pelo integrante V (Taehyung), a expressão 'Borahae' combina a palavra roxo ('Bora') com amar ('Saranghae'). O roxo, última cor do arco-íris, representa amor duradouro e lealdade recíproca.",
    badge: "Cultura do Fandom"
  },
  {
    title: "Impacto Social e Filantropia",
    description: "Inspirada pelas doações do grupo à UNICEF e causas sociais, a comunidade ARMY mundial organiza campanhas contínuas de caridade, auxílio em emergências climáticas e incentivo à educação.",
    badge: "Solidariedade Real"
  },
  {
    title: "União Sem Fronteiras",
    description: "A música do BTS quebrou barreiras de idioma, cultura e distância. Hoje, milhões de fãs em centenas de países, incluindo o Brasil, compartilham amizades e aprendizados.",
    badge: "Comunidade Global"
  }
];
