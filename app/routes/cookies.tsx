import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CookieIcon, 
  CalendarIcon,
  FileTextIcon,
  GearIcon,
  EyeOpenIcon,
  LockClosedIcon,
  EnvelopeOpenIcon
} from '@radix-ui/react-icons';

export default function PoliticaCookies() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* Header da Página */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <CookieIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter">
            Política de Cookies
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Como utilizamos cookies e tecnologias similares para melhorar sua experiência
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Última atualização: {currentDate}
            </span>
            <span className="flex items-center gap-2">
              <FileTextIcon className="w-4 h-4" />
              Versão 1.0
            </span>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introdução */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">1. O que são Cookies?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, 
                tablet ou smartphone) quando você visita um site. Eles permitem que o site "lembre" de suas 
                ações e preferências ao longo do tempo, proporcionando uma experiência mais personalizada.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Na plataforma ESH, utilizamos cookies para melhorar a funcionalidade, analisar o uso 
                do serviço e personalizar sua experiência de acordo com suas necessidades.
              </p>
            </div>
          </section>

          {/* Tipos de Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <LockClosedIcon className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-green-400">Cookies Essenciais</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  Necessários para o funcionamento básico do site
                </p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Autenticação de usuário</li>
                  <li>• Sessão de navegação</li>
                  <li>• Preferências de segurança</li>
                  <li>• Funcionalidades básicas</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <EyeOpenIcon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Cookies de Análise</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  Nos ajudam a entender como o site é utilizado
                </p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Estatísticas de uso</li>
                  <li>• Páginas mais visitadas</li>
                  <li>• Tempo de permanência</li>
                  <li>• Comportamento do usuário</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <GearIcon className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Cookies de Funcionalidade</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  Melhoram sua experiência personalizando o site
                </p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Preferências de idioma</li>
                  <li>• Configurações da conta</li>
                  <li>• Histórico de ações</li>
                  <li>• Personalização da interface</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <CookieIcon className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Cookies de Marketing</h3>
                <p className="text-neutral-400 text-sm mb-3">
                  Utilizados para mostrar conteúdo relevante
                </p>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Recomendações personalizadas</li>
                  <li>• Campanhas direcionadas</li>
                  <li>• Conteúdo relacionado</li>
                  <li>• Melhorias de produto</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finalidades */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Finalidades dos Cookies</h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Segurança e Autenticação</h4>
                <p className="text-neutral-400 text-sm">
                  Garantir que apenas usuários autorizados acessem a plataforma e manter 
                  a integridade das sessões de trabalho.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Funcionalidade da Plataforma</h4>
                <p className="text-neutral-400 text-sm">
                  Manter suas preferências, configurações e histórico de ações para 
                  proporcionar uma experiência consistente e eficiente.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Análise e Melhorias</h4>
                <p className="text-neutral-400 text-sm">
                  Coletar dados anônimos sobre o uso da plataforma para identificar 
                  áreas de melhoria e otimizar a experiência do usuário.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Suporte e Assistência</h4>
                <p className="text-neutral-400 text-sm">
                  Armazenar informações que nos ajudam a resolver problemas técnicos 
                  e fornecer suporte mais eficiente quando necessário.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies de Terceiros */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">4. Cookies de Terceiros</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Alguns cookies em nosso site são definidos por serviços de terceiros que nos ajudam 
                a fornecer funcionalidades específicas. Estes serviços incluem:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                  <p className="text-neutral-400 text-sm">
                    Para análise de tráfego e comportamento dos usuários no site.
                  </p>
                </div>
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Stripe</h4>
                  <p className="text-neutral-400 text-sm">
                    Para processamento seguro de pagamentos e assinaturas.
                  </p>
                </div>
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Intercom</h4>
                  <p className="text-neutral-400 text-sm">
                    Para chat de suporte e comunicação com usuários.
                  </p>
                </div>
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Cloudflare</h4>
                  <p className="text-neutral-400 text-sm">
                    Para segurança, performance e proteção contra ataques.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Controle de Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Como Controlar os Cookies</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
              <GearIcon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Configurações do Navegador</h3>
              <p className="text-neutral-300 mb-4">
                A maioria dos navegadores permite que você controle e gerencie cookies através 
                das configurações de privacidade. Você pode:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-400">
                <div>
                  <h4 className="font-semibold text-white mb-2">Bloquear Cookies</h4>
                  <ul className="space-y-1">
                    <li>• Configurar para bloquear todos os cookies</li>
                    <li>• Bloquear cookies de terceiros</li>
                    <li>• Bloquear cookies específicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Gerenciar Cookies</h4>
                  <ul className="space-y-1">
                    <li>• Ver cookies armazenados</li>
                    <li>• Excluir cookies específicos</li>
                    <li>• Limpar todos os cookies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">⚠️ Importante</h4>
                <p className="text-neutral-400 text-sm">
                  <strong>Desabilitar cookies essenciais pode afetar o funcionamento da plataforma ESH.</strong> 
                  Recomendamos manter os cookies essenciais habilitados para uma experiência completa.
                </p>
              </div>
            </div>
          </section>

          {/* Duração dos Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Duração dos Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
                <h4 className="font-semibold text-white mb-2">Cookies de Sessão</h4>
                <p className="text-neutral-400 text-sm">
                  Expiram quando você fecha o navegador
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
                <h4 className="font-semibold text-white mb-2">Cookies Temporários</h4>
                <p className="text-neutral-400 text-sm">
                  Expiram em 24 horas a 7 dias
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
                <h4 className="font-semibold text-white mb-2">Cookies Persistentes</h4>
                <p className="text-neutral-400 text-sm">
                  Podem durar até 2 anos
                </p>
              </div>
            </div>
          </section>

          {/* Atualizações */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Atualizações desta Política</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças 
                em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Quando fizermos alterações materiais, notificaremos você através de:
              </p>
              <ul className="text-neutral-300 mt-4 space-y-2">
                <li>• <strong>E-mail</strong> para usuários registrados</li>
                <li>• <strong>Banner no site</strong> por 30 dias</li>
                <li>• <strong>Atualização da data</strong> no cabeçalho desta página</li>
              </ul>
            </div>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Entre em Contato</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Dúvidas sobre Cookies?</h3>
              <p className="text-neutral-400 mb-4">
                Nossa equipe de tecnologia está disponível para esclarecer qualquer dúvida 
                sobre nossa política de cookies e como gerenciar suas preferências.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:tech@elevensoft.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <EnvelopeOpenIcon className="w-4 h-4" />
                  tech@elevensoft.dev
                </a>
                <a
                  href="https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Footer da Página */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-4">
            Esta política é atualizada regularmente para refletir mudanças em nossas práticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
            >
              Voltar para Home
            </Link>
            <Link
              to="/politica-privacidade"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
} 