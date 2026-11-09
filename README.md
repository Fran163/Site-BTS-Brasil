# 💜 BTS Brasil — Fanbase & Tributo ao ARMY

Uma landing page responsiva, moderna e elegante em homenagem ao grupo sul-coreano **BTS (Bangtan Sonyeondan)** e à comunidade mundial de fãs **ARMY**.

> **Aviso Legal:** Este é um projeto de fãs **não oficial**, criado para fins educacionais e apreciação cultural. Todas as marcas, nomes e músicas pertencem à BIGHIT MUSIC e HYBE Corporation.

---

## 🛠️ Ferramentas Utilizadas e Para Que Servem

Se você está começando a aprender programação agora, aqui está o papel de cada tecnologia deste projeto:

1. **Node.js**: É o motor que roda no seu computador permitindo executar comandos JavaScript fora do navegador.
2. **Next.js (com App Router)**: O *framework* principal. Ele organiza como as páginas e componentes são carregados, otimizando o desempenho e a estrutura do site.
3. **TypeScript**: Uma camada de segurança sobre o JavaScript. Ele define "tipos" para os dados (por exemplo, garantindo que um ano seja número ou texto esperado), evitando erros bobos antes do site ir ao ar.
4. **Tailwind CSS**: A ferramenta de estilização visual. Em vez de escrever regras de CSS em arquivos separados, usamos classes práticas diretamente nos elementos visuais (como `bg-[#070312]` para o fundo roxo escuro ou `text-white` para texto branco).

---

## 🚀 Como Iniciar o Projeto no Seu Computador

### 1. Iniciar o Servidor de Desenvolvimento
Abra o terminal na pasta do projeto (`c:\Fran`) e execute:
```bash
npm run dev
```

### 2. Acessar o Site
Abra o seu navegador de internet (Chrome, Edge, Firefox, etc.) e digite na barra de endereços:
```
http://localhost:3000
```

### 3. Como Parar o Servidor
No terminal onde o comando está rodando, pressione as teclas:
```
Ctrl + C
```
E confirme digitando `S` (ou `Y`) se o terminal perguntar se deseja finalizar o trabalho em lote.

---

## 📂 Onde Alterar Cada Parte do Site

Tudo no projeto foi organizado para ser fácil de encontrar e modificar:

- **Textos dos Integrantes, Álbuns e Mensagens**:
  - Arquivo: [`src/data/btsData.ts`](file:///C:/Fran/src/data/btsData.ts)
  - *Dica para iniciantes*: Quase todos os textos (biografia dos 7 membros, citações, faixas dos álbuns e links) estão centralizados neste arquivo! Você pode mudar qualquer frase lá sem mexer no visual.
- **Cores e Paleta Visual**:
  - Arquivo: [`src/app/globals.css`](file:///C:/Fran/src/app/globals.css)
  - Nele estão configuradas as variáveis de cor de fundo (`--background`) e de texto (`--foreground`), além dos estilos da barra de rolagem.
- **Estrutura das Seções**:
  - Menu superior: [`src/components/Navbar.tsx`](file:///C:/Fran/src/components/Navbar.tsx)
  - Seção inicial de impacto: [`src/components/Hero.tsx`](file:///C:/Fran/src/components/Hero.tsx)
  - Apresentação e história: [`src/components/About.tsx`](file:///C:/Fran/src/components/About.tsx)
  - Cards dos 7 membros: [`src/components/Members.tsx`](file:///C:/Fran/src/components/Members.tsx)
  - Álbuns e canais de streaming: [`src/components/Music.tsx`](file:///C:/Fran/src/components/Music.tsx)
  - Comunidade ARMY e Borahae: [`src/components/Army.tsx`](file:///C:/Fran/src/components/Army.tsx)
  - Rodapé e avisos legais: [`src/components/Footer.tsx`](file:///C:/Fran/src/components/Footer.tsx)
- **Título da Aba do Navegador**:
  - Arquivo: [`src/app/layout.tsx`](file:///C:/Fran/src/app/layout.tsx) no objeto `metadata`.

---

## 📱 Responsividade

O site foi construído para se adaptar automaticamente a:
- 📱 Celulares (menu compacto em gaveta, cards empilhados)
- 💻 Tablets (grades de 2 colunas)
- 🖥️ Computadores e monitores largos (grades de 3 e 4 colunas com efeitos visuais ampliados)
