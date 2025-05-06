import { useEffect, useState } from "react";
import { Link } from "react-router";

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header
      className={`z-30 sticky left-0 top-0 px-5 flex w-full flex-col border-b border-border border-neutral-800 ${
isScrolled ? 'bg-neutral-950 pt-2' : 'bg-transparent'
} transition-colors duration-300 border-b border-neutral-800`}
    >
      <div className="flex h-16 bg-surface-primary dark:bg-dark-surface-primary">
        <div className="items-center md:container md:mx-auto flex justify-between w-full">
          <h1 className="hidden md:block text-xl md:text-3xl font-semibold text-white">
            <span className="text-orange-400">E</span>
            SH
          </h1>
          <img src="favicon.png" alt="Logo Eleven, letra E" className="md:hidden w-14" />
          <div className="md:flex items-center gap-10 text-neutral-400 hidden">
            <a href="#prices">Preços</a>
            <a href="https://elevensoft.dev/blog" target="_blank">Blog</a>
          </div>
          <div className="flex items-center gap-2">
          <a
            href="https://wa.me/message/X2DMDA457ASDN1"
            target="_blank"
            className="rounded-full bg-orange-400 text-white text-sm px-4 py-2 font-light"
          >
            Começar hoje
          </a>
          </div>
        </div>
      </div>
    </header>
  )
}
