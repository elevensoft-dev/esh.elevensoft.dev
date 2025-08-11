import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LockClosedIcon, 
  EyeOpenIcon, 
  LockClosedIcon as LockIcon,
  FileTextIcon,
  CalendarIcon,
  PersonIcon,
  EnvelopeOpenIcon
} from '@radix-ui/react-icons';

export default function PoliticaPrivacidade() {
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
          <LockClosedIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Como protegemos e utilizamos suas informações pessoais
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
            <h2 className="text-2xl font-bold text-orange-400 mb-4">1. Introdução</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                A Eleven Soft ("nós", "nossa", "nosso") está comprometida em proteger sua privacidade. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
                suas informações pessoais quando você utiliza nossos serviços, incluindo a plataforma ESH.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo 
                com esta política. Seus dados estão seguros conosco e nunca serão vendidos ou compartilhados 
                com terceiros para fins comerciais.
              </p>
            </div>
          </section>

          {/* Informações Coletadas */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Informações que Coletamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <PersonIcon className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Informações Pessoais</h3>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Nome completo</li>
                  <li>• Endereço de e-mail</li>
                  <li>• Número de telefone</li>
                  <li>• Cargo e empresa</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <EyeOpenIcon className="w-8 h-8 text-orange-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Dados de Uso</h3>
                <ul className="text-sm text-neutral-400 space-y-1">
                  <li>• Logs de acesso</li>
                  <li>• Configurações da conta</li>
                  <li>• Histórico de uso</li>
                  <li>• Preferências técnicas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Como Usamos */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Como Utilizamos suas Informações</h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Fornecer e Melhorar Nossos Serviços</h4>
                <p className="text-neutral-400 text-sm">
                  Utilizamos suas informações para fornecer, manter e melhorar a plataforma ESH, 
                  incluindo funcionalidades de segurança e controle de acesso.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Comunicação e Suporte</h4>
                <p className="text-neutral-400 text-sm">
                  Enviamos e-mails sobre atualizações, manutenção programada e respondemos 
                  suas solicitações de suporte técnico.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Segurança e Compliance</h4>
                <p className="text-neutral-400 text-sm">
                  Monitoramos o uso para detectar atividades suspeitas e garantir 
                  conformidade com regulamentações de segurança.
                </p>
              </div>
            </div>
          </section>

          {/* Compartilhamento */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">4. Compartilhamento de Informações</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                <strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais</strong> com 
                terceiros para fins comerciais. Podemos compartilhar informações apenas nas seguintes situações:
              </p>
              <ul className="text-neutral-300 mt-4 space-y-2">
                <li>• <strong>Com seu consentimento explícito</strong></li>
                <li>• <strong>Para cumprir obrigações legais</strong> ou responder a processos judiciais</li>
                <li>• <strong>Para proteger nossos direitos</strong> e a segurança de nossos usuários</li>
                <li>• <strong>Com prestadores de serviços</strong> que nos ajudam a operar (sempre com proteções adequadas)</li>
              </ul>
            </div>
          </section>

          {/* Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Segurança dos Dados</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
              <LockClosedIcon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proteção de Nível Empresarial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-400">
                <div>
                  <h4 className="font-semibold text-white mb-2">Criptografia</h4>
                  <ul className="space-y-1">
                    <li>• TLS 1.3 para dados em trânsito</li>
                    <li>• AES-256 para dados em repouso</li>
                    <li>• Hashing seguro de senhas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Controles de Acesso</h4>
                  <ul className="space-y-1">
                    <li>• Autenticação de dois fatores</li>
                    <li>• Controle de acesso baseado em função</li>
                    <li>• Auditoria completa de ações</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seus Direitos */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Seus Direitos (LGPD)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Acesso e Portabilidade</h4>
                <p className="text-neutral-400 text-sm">
                  Você pode solicitar uma cópia de seus dados pessoais em formato estruturado.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Correção e Atualização</h4>
                <p className="text-neutral-400 text-sm">
                  Você pode corrigir ou atualizar informações imprecisas ou incompletas.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Exclusão</h4>
                <p className="text-neutral-400 text-sm">
                  Você pode solicitar a exclusão de seus dados pessoais em determinadas circunstâncias.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Revogação do Consentimento</h4>
                <p className="text-neutral-400 text-sm">
                  Você pode revogar o consentimento para o processamento de dados a qualquer momento.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Cookies e Tecnologias Similares</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso 
                de nossos serviços e personalizar conteúdo. Você pode controlar o uso de cookies através 
                das configurações do seu navegador.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Para mais detalhes sobre cookies, consulte nossa <Link to="/cookies" className="text-orange-400 hover:underline">Política de Cookies</Link>.
              </p>
            </div>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Entre em Contato</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Dúvidas sobre Privacidade?</h3>
              <p className="text-neutral-400 mb-4">
                Nossa equipe de compliance está disponível para responder suas perguntas 
                sobre privacidade e proteção de dados.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:privacy@elevensoft.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <EnvelopeOpenIcon className="w-4 h-4" />
                  privacy@elevensoft.dev
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
            Esta política é atualizada regularmente para refletir nossas práticas atuais.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
          >
            Voltar para Home
          </Link>
        </div>

      </div>
    </div>
  );
} 