import { useEffect, useState } from "react";
// CORREÇÃO 1: Importar Link e NavLink do pacote correto 'react-router-dom'
import { Link, NavLink } from "react-router-dom";


// Seu hook de scroll está perfeito, vamos mantê-lo.
export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      // Um pequeno ajuste para performance: só atualiza o estado se o valor mudar.
      const currentScrollState = window.scrollY > 20; // Diminuí um pouco para o efeito ser mais rápido
      if (currentScrollState !== isScrolled) {
        setIsScrolled(currentScrollState);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]); // Adicionado isScrolled como dependência para seguir as boas práticas do React.

  return (
    <header
      // Suas classes de estilo estão ótimas, vamos mantê-las.
      className={`z-30 sticky top-0 w-full transition-colors duration-300 border-b border-transparent ${isScrolled ? 'bg-neutral-950/80 backdrop-blur border-neutral-800' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-5">

        {/* CORREÇÃO 2: O logo agora é um Link para a homepage */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Eleven, letra E" className="w-8 h-8" />
          
        </Link>

        {/* CORREÇÃO 3: A navegação principal agora usa NavLink para rotas internas */}
        <nav className="hidden md:flex items-center gap-8 text-neutral-300 text-sm">
          <NavLink
            to="/about"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Sobre Nós
          </NavLink>
          <NavLink
            to="/#solution"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Funcionalidades
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Preços
          </NavLink>
          <NavLink
            to="/security"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Segurança
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Comparar
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) => `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}
          >
            Documentação
          </NavLink>
          {/* O link para o Blog continua sendo um <a> pois é um link externo */}
          <a href="https://elevensoft.dev/blog" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Blog
          </a>
        </nav>

        {/* CORREÇÃO 4: O CTA principal agora é um Link estilizado como botão */}
        <div className="flex items-center gap-2">
          <Link
            to="/pricing" // Leva para a página de preços
            className="rounded-full bg-orange-400 text-black text-sm px-5 py-2.5 font-semibold transition-transform hover:scale-105"
          >
            Comece Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
