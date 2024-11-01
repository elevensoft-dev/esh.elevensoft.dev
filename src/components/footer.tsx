import { Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://elevensoft.dev"
                  className="hover:text-white"
                  target="_blank"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="https://elevensoft.dev/blog"
                  className="hover:text-white"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://elevensoft.dev/support"
                  className="hover:text-white"
                  target="_blank"
                >
                  Central de ajuda
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Conectar</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/elevensoft.dev"
                target="_blank"
              >
                <Instagram className="h-6 w-6 hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/eleven-soft-105a4229b"
                target="_blank"
              >
                <Linkedin className="h-6 w-6 hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://elevensoft.dev/support"
                className="hover:text-white"
                target="_blank"
              >
                <Mail className="h-6 w-6 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center flex items-center justify-center gap-x-3">
          <span className="text-white text-sm opacity-50">Um produto </span>
          <a href="https://elevensoft.dev" target="_blank">
            <img
              src="assets/logo-light.png"
              alt="logo"
              className="z-20 text-white"
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
