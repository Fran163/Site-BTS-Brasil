import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import Music from "@/components/Music";
import Army from "@/components/Army";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070312] text-white">
      {/* Barra de Navegação Fixa */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col">
        {/* 1. Seção Inicial Marcante (Hero) */}
        <Hero />

        {/* 2. Apresentação do BTS e Filosofia */}
        <About />

        {/* 3. Os Sete Integrantes */}
        <Members />

        {/* 4. Discografia & Músicas Oficiais */}
        <Music />

        {/* 5. O Universo e Comunidade ARMY */}
        <Army />
      </main>

      {/* Rodapé com Aviso Legal e Créditos */}
      <Footer />
    </div>
  );
}
