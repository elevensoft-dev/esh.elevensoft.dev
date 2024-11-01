import { Eye } from "lucide-react";

function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-x-1 block">
            <img
              src="/assets/logo-light.png"
              alt="logo"
              width={100}
              height={30}
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-600">
              Sobre
            </a>
            <a
              href="https://elevensoft.dev/blog"
              target="_blank"
              className="text-gray-600 hover:text-orange-600"
            >
              Blog
            </a>
          </nav>
          <div>
            <a
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
