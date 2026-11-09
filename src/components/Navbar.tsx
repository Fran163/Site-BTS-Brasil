"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre o BTS", href: "#sobre" },
    { label: "Os 7 Integrantes", href: "#integrantes" },
    { label: "Músicas", href: "#musicas" },
    { label: "Universo ARMY", href: "#army" },
    { label: "Links Oficiais", href: "#links" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#090514]/85 border-b border-purple-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Título */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-violet-500 to-fuchsia-400 p-[2px] shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d071f] rounded-[10px] flex items-center justify-center">
                <span className="text-sm font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-200">
                  BTS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                BTS Brasil
              </span>
              <span className="text-xs text-purple-400/80 font-medium tracking-wider">
                Fanbase & Tributo ARMY
              </span>
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-purple-200/80 hover:text-white hover:bg-purple-950/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#links"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-900/50 hover:from-purple-500 hover:to-fuchsia-500 transition-all transform hover:-translate-y-0.5"
            >
              <span>💜</span>
              <span>Ouvir Agora</span>
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Abrir ou fechar menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Aberto Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0d071f]/95 border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-purple-100 hover:bg-purple-900/40 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#links"
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg"
          >
            <span>💜</span>
            <span>Acessar Músicas e Links Oficiais</span>
          </a>
        </div>
      )}
    </header>
  );
}
