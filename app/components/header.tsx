import { Link, NavLink } from "react-router-dom";

import { ScrollProgress } from "./ui/scroll-progress";
import { useHeader } from "../hooks/use-header";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

const menuItems: MenuItem[] = [
  { label: "Preços", href: "/pricing", description: "Planos e preços competitivos" },
  { label: "Segurança", href: "/security", description: "Sua segurança em primeiro lugar" },
  { label: "Comparar", href: "/compare", description: "Compare com outras soluções" },
  { label: "Sobre Nós", href: "/about", description: "Conheça nossa história e missão" },
];

export function Header() {
  const {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useHeader();

  return (
    <>
      <ScrollProgress />
      <header
        className={`z-40 sticky top-0 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="logo.png"
                alt="ESH Logo"
                className="relative w-10 h-auto transition-transform duration-300 group-hover:scale-110"
                width="40"
                height="40"
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <NavLink
                  to={item.href}
                  className={({ isActive }) => `
                    relative px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-300
                    ${isActive
                      ? 'text-white bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50 border-transparent'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}

            {/* Blog */}
            <a
              href="https://elevensoft.dev/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-colors duration-300 group border border-transparent"
            >
              <span className="text-sm font-medium">Blog</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/quiz"
              className="px-6 py-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-colors duration-300 text-sm font-medium border border-transparent"
            >
              Quiz
            </Link>
            <Link
              to="/pricing"
              className="relative px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold transition-colors duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Comece Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:scale-110 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative group"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/50 px-6 py-4">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `
                    px-4 py-3 rounded-lg transition-colors duration-300 border
                    ${isActive
                      ? 'text-white bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50 border-transparent'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.label}</span>
                    {item.description && (
                      <span className="text-xs text-neutral-500">{item.description}</span>
                    )}
                  </div>
                </NavLink>
              ))}

              <a
                href="https://elevensoft.dev/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-colors duration-300 border border-transparent"
              >
                <span className="font-medium">Blog</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <div className="pt-4 border-t border-neutral-800/50 mt-4">
                <Link
                  to="/quiz"
                  className="block px-4 py-3 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-colors duration-300 font-medium mb-2 border border-transparent"
                  onClick={closeMobileMenu}
                >
                  Quiz
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold transition-colors duration-300 text-center"
                  onClick={closeMobileMenu}
                >
                  Comece Agora
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

