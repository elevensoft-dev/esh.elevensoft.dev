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
isScrolled ? 'bg-neutral-950' : 'bg-transparent'
} transition-colors duration-300 border-b border-neutral-800`}
    >
      <div className="flex h-16 bg-surface-primary dark:bg-dark-surface-primary">
        <div className="items-center container mx-auto flex justify-between w-full">
          <h1 className="text-3xl font-semibold">
            <span className="text-orange-400">E</span>
            SH
          </h1>
          <div className="flex items-center gap-10">
            <p>Features</p>
            <Link to="/">Preços</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Changelog</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="rounded-full bg-orange-400 text-white text-sm px-4 py-2 font-light">Começar hoje</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
