import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookmarkIcon, 
  RocketIcon, 
  LockClosedIcon, 
  GearIcon, 
  CodeIcon, 
  QuestionMarkCircledIcon,
  ChevronRightIcon,
  ExternalLinkIcon
} from '@radix-ui/react-icons';

export default function DocsPage() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* 1. O TÍTULO DA BIBLIOTECA */}
        <div className="text-center max-w-4xl mx-auto">
          <BookmarkIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter">
            Documentação Técnica do ESH
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Tudo que você precisa saber para implementar, configurar e dominar o ESH. 
            Documentação técnica impecável, escrita por engenheiros para engenheiros.
          </p>
        </div>

        {/* 2. NAVEGAÇÃO RÁPIDA */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickNavCard
            icon={<RocketIcon className="w-8 h-8" />}
            title="Primeiros Passos"
            description="Comece aqui se é sua primeira vez com o ESH"
            link="/docs/primeiros-passos"
            color="from-blue-500 to-blue-600"
          />
          <QuickNavCard
            icon={<LockClosedIcon className="w-8 h-8" />}
            title="Configuração de Segurança"
            description="Configure autenticação, permissões e políticas"
            link="/docs/seguranca"
            color="from-green-500 to-green-600"
          />
          <QuickNavCard
            icon={<GearIcon className="w-8 h-8" />}
            title="Administração"
            description="Gerencie usuários, servidores e monitoramento"
            link="/docs/administracao"
            color="from-purple-500 to-purple-600"
          />
          <QuickNavCard
            icon={<CodeIcon className="w-8 h-8" />}
            title="API e Integrações"
            description="Integre o ESH com suas ferramentas existentes"
            link="/docs/api"
            color="from-orange-500 to-orange-600"
          />
        </div>

        {/* 3. SEÇÕES PRINCIPAIS */}
        <div className="mt-20 space-y-16">
          
          {/* Seção: Primeiros Passos */}
          <DocsSection
            title="🚀 Primeiros Passos"
            description="Comece sua jornada com o ESH em minutos, não em dias."
            items={[
              {
                title: "Instalação e Setup Inicial",
                description: "Guia passo-a-passo para instalar o ESH em sua infraestrutura",
                difficulty: "Iniciante",
                time: "15 min",
                link: "/docs/instalacao"
              },
              {
                title: "Configuração do Primeiro Servidor",
                description: "Conecte seu primeiro servidor e teste o acesso básico",
                difficulty: "Iniciante", 
                time: "10 min",
                link: "/docs/primeiro-servidor"
              },
              {
                title: "Criação do Primeiro Usuário",
                description: "Configure usuários e permissões básicas",
                difficulty: "Iniciante",
                time: "8 min", 
                link: "/docs/primeiro-usuario"
              },
              {
                title: "Teste de Funcionalidades",
                description: "Valide que tudo está funcionando corretamente",
                difficulty: "Iniciante",
                time: "5 min",
                link: "/docs/teste-funcionalidades"
              }
            ]}
          />

          {/* Seção: Segurança e Compliance */}
          <DocsSection
            title="🛡️ Segurança e Compliance"
            description="Configure o ESH para atender aos mais altos padrões de segurança."
            items={[
              {
                title: "Configuração de 2FA",
                description: "Implemente autenticação de dois fatores para todos os usuários",
                difficulty: "Intermediário",
                time: "20 min",
                link: "/docs/2fa"
              },
              {
                title: "Políticas de Senha",
                description: "Configure políticas robustas de senha e expiração",
                difficulty: "Intermediário",
                time: "15 min",
                link: "/docs/politicas-senha"
              },
              {
                title: "Controle de Comandos",
                description: "Implemente o controle preventivo de comandos perigosos",
                difficulty: "Avançado",
                time: "30 min",
                link: "/docs/controle-comandos"
              },
              {
                title: "Auditoria e Logs",
                description: "Configure logs detalhados para compliance e investigação",
                difficulty: "Intermediário",
                time: "25 min",
                link: "/docs/auditoria"
              }
            ]}
          />

          {/* Seção: Administração Avançada */}
          <DocsSection
            title="⚙️ Administração Avançada"
            description="Domine todas as funcionalidades administrativas do ESH."
            items={[
              {
                title: "Gestão de Usuários em Massa",
                description: "Importe e gerencie centenas de usuários de uma vez",
                difficulty: "Avançado",
                time: "45 min",
                link: "/docs/gestao-usuarios"
              },
              {
                title: "Monitoramento e Alertas",
                description: "Configure alertas para atividades suspeitas e falhas",
                difficulty: "Intermediário",
                time: "35 min",
                link: "/docs/monitoramento"
              },
              {
                title: "Backup e Recuperação",
                description: "Implemente estratégias robustas de backup",
                difficulty: "Avançado",
                time: "40 min",
                link: "/docs/backup"
              },
              {
                title: "High Availability",
                description: "Configure o ESH para alta disponibilidade",
                difficulty: "Avançado",
                time: "60 min",
                link: "/docs/ha"
              }
            ]}
          />

          {/* Seção: Integrações e API */}
          <DocsSection
            title="🔌 Integrações e API"
            description="Conecte o ESH com seu ecossistema de ferramentas existente."
            items={[
              {
                title: "API REST Completa",
                description: "Documentação completa da API para automação",
                difficulty: "Avançado",
                time: "N/A",
                link: "/docs/api-rest"
              },
              {
                title: "Integração com Active Directory",
                description: "Conecte com seu AD/LDAP existente",
                difficulty: "Intermediário",
                time: "30 min",
                link: "/docs/ad-integration"
              },
              {
                title: "Webhooks e Notificações",
                description: "Configure notificações para Slack, Teams, etc.",
                difficulty: "Intermediário",
                time: "25 min",
                link: "/docs/webhooks"
              },
              {
                title: "Terraform Provider",
                description: "Infraestrutura como código para o ESH",
                difficulty: "Avançado",
                time: "45 min",
                link: "/docs/terraform"
              }
            ]}
          />

        </div>

        {/* 4. RECURSOS ADICIONAIS */}
        <div className="mt-28 bg-neutral-900 p-8 md:p-12 rounded-2xl border border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Recursos para Engenheiros</h2>
            <p className="mt-4 text-lg text-neutral-400 text-center">
              Além da documentação, oferecemos recursos para acelerar sua implementação
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <ResourceCard
                icon={<QuestionMarkCircledIcon className="w-8 h-8" />}
                title="Suporte Técnico"
                description="Nossa equipe de engenheiros está disponível para ajudar com implementações complexas"
                link="/suporte"
                external={false}
              />
              <ResourceCard
                icon={<CodeIcon className="w-8 h-8" />}
                title="Exemplos de Código"
                description="Repositório GitHub com exemplos práticos de implementação"
                link="https://github.com/elevensoft/esh-examples"
                external={true}
              />
              <ResourceCard
                icon={<BookmarkIcon className="w-8 h-8" />}
                title="Comunidade"
                description="Junte-se a outros engenheiros que usam o ESH"
                link="/comunidade"
                external={false}
              />
            </div>
          </div>
        </div>

        {/* 5. CTA FINAL */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">Precisa de ajuda específica?</h2>
          <p className="mt-4 text-lg text-neutral-400">
            Nossa documentação é extensa, mas às vezes você precisa de uma mão amiga
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 font-semibold transition-colors"
            >
              Falar com um Especialista
            </a>
            <Link
              to="/pricing"
              className="px-8 py-3 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors"
            >
              Ver Planos e Preços
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Componentes Auxiliares ---

interface QuickNavCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const QuickNavCard = ({ icon, title, description, link, color }: QuickNavCardProps) => (
  <Link
    to={link}
    className="group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-all hover:scale-105"
  >
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
      {title}
    </h3>
    <p className="text-sm text-neutral-400">{description}</p>
  </Link>
);

interface DocsSectionProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    difficulty: string;
    time: string;
    link: string;
  }[];
}

const DocsSection = ({ title, description, items }: DocsSectionProps) => (
  <div>
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-lg text-neutral-400">{description}</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold group-hover:text-orange-400 transition-colors">
              {item.title}
            </h3>
            <ChevronRightIcon className="w-5 h-5 text-neutral-600 group-hover:text-orange-400 transition-colors" />
          </div>
          <p className="text-sm text-neutral-400 mb-4">{item.description}</p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <span className={`px-2 py-1 rounded-full ${
              item.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400' :
              item.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {item.difficulty}
            </span>
            {item.time !== 'N/A' && (
              <span className="flex items-center gap-1">
                <span>⏱️</span>
                {item.time}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  </div>
);

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  external: boolean;
}

const ResourceCard = ({ icon, title, description, link, external }: ResourceCardProps) => (
  <div className="text-center p-6">
    <div className="w-12 h-12 mx-auto mb-4 text-orange-400">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-neutral-400 mb-4">{description}</p>
    {external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
      >
        Acessar <ExternalLinkIcon className="w-4 h-4" />
      </a>
    ) : (
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
      >
        Acessar <ChevronRightIcon className="w-4 h-4" />
      </Link>
    )}
  </div>
); 