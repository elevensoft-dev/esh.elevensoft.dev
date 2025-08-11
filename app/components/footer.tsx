import React from 'react';
import { 
  InstagramLogoIcon, 
  LinkedInLogoIcon, 
  EnvelopeOpenIcon,
  HomeIcon,
  MarginIcon,
  ArrowTopRightIcon,
  HeartIcon
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      {/* Seção Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1: Sobre a Empresa */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo Eleven, letra E" className="w-8 h-8" />
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              A plataforma definitiva para controle, auditoria e segurança de acesso a servidores. 
              Construída no Brasil, para empresas brasileiras que levam segurança a sério.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/elevensoft.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/eleven-soft-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Produtos e Soluções */}
          <div>
            <h4 className="text-white font-semibold mb-6">Produtos</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/#solution"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  ESH Platform
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/security"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Segurança
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/compare"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Comparativo
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Documentação
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa e Contato */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Sobre Nós
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Preços
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:ola@elevensoft.dev"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Trabalhe Conosco
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://elevensoft.dev/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  Blog
                  <ArrowTopRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção de Contato Destaque */}
      <div className="border-t border-neutral-800 bg-neutral-950/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* WhatsApp - Destaque Principal */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-3">Fale Conosco Agora</h4>
              <p className="text-neutral-400 mb-4">
                Tire suas dúvidas e comece sua implementação hoje mesmo
              </p>
              <a
                href="https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Informações de Contato */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-3">Informações de Contato</h4>
              <div className="space-y-2 text-neutral-400">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        <EnvelopeOpenIcon className="w-4 h-4 text-orange-400" />
                  <a href="mailto:ola@elevensoft.dev" className="hover:text-orange-400 transition-colors">
                    ola@elevensoft.dev
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <MarginIcon className="w-4 h-4 text-orange-400" />
                  <span>+55 (48) 98816-8221</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <HomeIcon className="w-4 h-4 text-orange-400" />
                  <span>Palhoça, SC - Brasil</span>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-3">Horário de Atendimento</h4>
              <div className="text-neutral-400 space-y-1">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p className="text-orange-400 font-medium">Suporte 24/7 para clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright e Links Legais */}
      <div className="border-t border-neutral-800 bg-neutral-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span>© {currentYear} Eleven Soft. Todos os direitos reservados.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Feito com</span>
              <HeartIcon className="w-4 h-4 text-red-500 hidden md:inline" />
              <span className="hidden md:inline">no Brasil</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="/politica-privacidade" className="text-neutral-400 hover:text-orange-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-neutral-400 hover:text-orange-400 transition-colors">
                Termos de Uso
              </a>
              <a href="/cookies" className="text-neutral-400 hover:text-orange-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 