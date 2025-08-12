import React from 'react';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';

const startPlanLink = 'https://www.asaas.com/c/khwwp9tuv0fztx2k';
const proPlanLink = 'https://www.asaas.com/c/5lwcu96mlzr95dcf';
const enterprisePlanLink = 'https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0';


interface Feature {
  text: string;
  isHighlight?: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
  isFeatured?: boolean;
}

interface FeatureRowProps {
  category?: string;
  feature?: string;
  start?: boolean;
  pro?: boolean;
  enterprise?: boolean;
}


const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  isFeatured = false,
}) => {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-xl border ${isFeatured ? 'border-orange-500 border-2' : 'border-neutral-800'
        }`}
    >
      {isFeatured && (
        <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-center text-sm bg-orange-500 text-white font-semibold px-4 py-1 rounded-full">
          Mais Popular
        </p>
      )}
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="mt-2 text-neutral-400 flex-grow">{description}</p>
      <p className="text-4xl font-bold my-6">
        {price}
        <span className="text-lg font-normal text-neutral-400">
          {price.startsWith('R$') ? '/mês' : ''}
        </span>
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex gap-3 items-start ${feature.isHighlight ? 'font-bold text-orange-300' : ''
              }`}
          >
            <CheckIcon
              className={`h-5 w-5 mt-0.5 shrink-0 ${feature.isHighlight ? 'text-orange-400' : 'text-neutral-500'
                }`}
            />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 block w-full text-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${isFeatured
            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 text-white'
            : 'bg-neutral-800 hover:bg-neutral-700 text-white'
          }`}
      >
        {ctaText}
      </a>
    </div>
  );
};


const FeatureRow: React.FC<FeatureRowProps> = ({ category, feature, start, pro, enterprise }) => {
  if (category) {
    return (
      <tr>
        <td colSpan={4} className="pt-8 pb-4">
          <h4 className="text-lg font-semibold text-orange-400">{category}</h4>
        </td>
      </tr>
    );
  }

  return (
    <tr className="hover:bg-neutral-900">
      <td className="py-3 pr-4">{feature}</td>
      <td className="py-3 px-4 text-center">{start ? <CheckIcon className="mx-auto text-green-500" /> : <Cross1Icon className="mx-auto text-neutral-600" />}</td>
      <td className={`py-3 px-4 text-center ${pro && 'bg-orange-500/10'}`}>{pro ? <CheckIcon className="mx-auto text-orange-400" /> : <Cross1Icon className="mx-auto text-neutral-600" />}</td>
      <td className="py-3 px-4 text-center">{enterprise ? <CheckIcon className="mx-auto text-green-500" /> : <Cross1Icon className="mx-auto text-neutral-600" />}</td>
    </tr>
  );
};

export function Pricing() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* 1. A Promessa de Valor */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Preços Transparentes para uma Segurança Inquestionável.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Sem custos escondidos, sem surpresas com o câmbio. Escolha o poder que sua operação precisa. Todos os planos são cobrados em <strong>Reais (R$)</strong>.
          </p>
        </div>

        {/* 2. Os Cards de Planos */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* PLANO START */}
          <PlanCard
            name="Start"
            price="R$ 599"
            description="Para equipes e projetos que precisam de visibilidade e controle essenciais."
            features={[
              { text: "Até 30 Usuários" },
              { text: "Até 25 Sessões Simultâneas" },
              { text: "Gravação e Replay de Sessões" },
              { text: "Acesso Centralizado" },
            ]}
            ctaText="Contratar Plano Start"
            ctaLink={startPlanLink}
          />

          {/* PLANO PROFISSIONAL (DESTAQUE) */}
          <PlanCard
            name="Profissional"
            price="R$ 999"
            description="A escolha ideal para empresas em crescimento com auditoria e segurança como prioridade."
            features={[
              { text: "Usuários e Servidores Ilimitados" },
              { text: "Até 80 Sessões Simultâneas" },
              { text: "Tudo do plano Start, e mais:" },
              { text: "Relatórios de Auditoria Avançados" },
              { text: "Suporte Prioritário via E-mail" },
            ]}
            ctaText="Contratar Plano Pro"
            ctaLink={proPlanLink}
            isFeatured={true}
          />

          {/* PLANO ENTERPRISE */}
          <PlanCard
            name="Enterprise"
            price="Sob Consulta"
            description="Para operações críticas que exigem controle preventivo, compliance e integração total."
            features={[
              { text: "Sessões Simultâneas Ilimitadas" },
              { text: "Tudo do plano Profissional, e mais:" },
              { text: "Controle Granular de Comandos (ESUT)", isHighlight: true },
              { text: "Bloqueio de Ações Perigosas", isHighlight: true },
              { text: "Single Sign-On (SSO) / AD" },
              { text: "Suporte Dedicado (WhatsApp/Slack)" },
            ]}
            ctaText="Fale com um Especialista"
            ctaLink={enterprisePlanLink}
          />
        </div>

        {/* 3. Tabela Comparativa Detalhada */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center">Compare as Funcionalidades em Detalhe</h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 pr-4 font-semibold text-lg">Funcionalidade</th>
                  <th className="w-40 py-4 px-4 font-semibold text-center">Start</th>
                  <th className="w-40 py-4 px-4 font-semibold text-center border-2 border-orange-500 rounded-t-lg">Profissional</th>
                  <th className="w-40 py-4 px-4 font-semibold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                <FeatureRow category="Essenciais" />
                <FeatureRow feature="Acesso Centralizado" start={true} pro={true} enterprise={true} />
                <FeatureRow feature="Gravação e Replay de Sessão" start={true} pro={true} enterprise={true} />
                <FeatureRow feature="Relatórios de Auditoria" start={false} pro={true} enterprise={true} />

                <FeatureRow category="Controle Preventivo (ESUT)" />
                <FeatureRow feature="Controle Granular de Comandos" start={false} pro={false} enterprise={true} />
                <FeatureRow feature="Bloqueio de Comandos Perigosos" start={false} pro={false} enterprise={true} />

                <FeatureRow category="Escala e Integração" />
                <FeatureRow feature="Usuários Ilimitados" start={false} pro={true} enterprise={true} />
                <FeatureRow feature="Single Sign-On (SSO)" start={false} pro={false} enterprise={true} />

                <FeatureRow category="Suporte" />
                <FeatureRow feature="Suporte via E-mail" start={true} pro={true} enterprise={true} />
                <FeatureRow feature="Suporte Prioritário" start={false} pro={true} enterprise={true} />
                <FeatureRow feature="Suporte Dedicado (Canal Direto)" start={false} pro={false} enterprise={true} />
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. FAQ de Preços */}
        <div className="mt-28 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Dúvidas Frequentes sobre Planos</h2>
          {/* TODO: Adicionar um componente de Accordion/FAQ aqui com perguntas como:
                - "O que é uma 'sessão simultânea'?"
                - "Posso mudar de plano a qualquer momento?"
                - "Existe algum custo de instalação?"
                - "Como funciona o plano Enterprise 'Sob Consulta'?"
            */}
        </div>
      </div>
    </div>
  );
}