import * as React from 'react';
import { CheckIcon, LockClosedIcon, CodeIcon, LayersIcon } from '@radix-ui/react-icons';

export default function SecurityPage() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* 1. O MANIFESTO */}
        <div className="text-center max-w-4xl mx-auto">
          <CheckIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter">
            Segurança não é uma feature. É a nossa fundação.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            No ESH, a segurança não é uma camada adicionada no final. Ela é o ponto de partida de cada linha de código que escrevemos. Nossa filosofia é simples: se um componente é crítico para a segurança, nós o construímos e o controlamos.
          </p>
        </div>

        {/* 2. OS PILARES DA NOSSA FORTALEZA */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SecurityPillar
            icon={<LockClosedIcon className="w-full h-full" />}
            title="Criptografia de Ponta a Ponta"
            description="Toda a comunicação entre seu navegador, nossos servidores e sua infraestrutura é protegida com os mais altos padrões de criptografia (TLS 1.3, AES-256). Seus dados estão seguros em trânsito e em repouso."
          />
          <SecurityPillar
            icon={<LayersIcon className="w-full h-full" />}
            title="Arquitetura Zero Trust"
            description="O ESH opera sob o princípio de 'nunca confie, sempre verifique'. Cada requisição de acesso é autenticada e autorizada individualmente, minimizando a superfície de ataque e prevenindo movimento lateral."
          />
          <SecurityPillar
            icon={<CodeIcon className="w-full h-full" />}
            title="Soberania do Código"
            description="Não dependemos de dezenas de pacotes de terceiros para funções críticas. Isso reduz drasticamente o risco de ataques à cadeia de suprimentos (supply chain attacks) e nos dá controle total sobre a segurança do nosso ecossistema."
          />
        </div>

        {/* 3. A PROVA: NOSSA TECNOLOGIA PROPRIETÁRIA */}
        <div className="mt-28 bg-neutral-900 p-8 md:p-12 rounded-2xl border border-neutral-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-400">Nossa Camada Extra de Defesa: El Guardian</h2>
            <p className="mt-6 text-lg text-neutral-300">
              Acreditamos em defesa em profundidade. É por isso que o núcleo do nosso software é protegido pelo <strong>El Guardian</strong>, nossa tecnologia proprietária de ofuscação e proteção de código.
            </p>
            <p className="mt-4 text-lg text-neutral-300">
              Isso significa que, mesmo no cenário improvável de uma exposição do nosso código-fonte, a lógica de negócios e os segredos de segurança permanecem indecifráveis. É uma camada de proteção que você não encontrará em soluções padrão, porque nós a construímos para nós mesmos. É a nossa promessa de segurança levada ao extremo.
            </p>
          </div>
        </div>

        {/* 4. COMPLIANCE E BOAS PRÁTICAS */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center">Prontos para sua Auditoria</h2>
          <p className="mt-4 text-lg text-neutral-400 text-center max-w-2xl mx-auto">
            O ESH foi projetado para ajudá-lo a atender e exceder os requisitos de conformidade mais exigentes.
          </p>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ComplianceCard
              title="LGPD (Lei Geral de Proteção de Dados)"
              description="Com logs detalhados e controle de acesso granular, o ESH fornece as ferramentas necessárias para gerenciar e proteger dados pessoais, um pilar da conformidade com a LGPD."
            />
            <ComplianceCard
              title="ISO 27001"
              description="Nossa plataforma ajuda a implementar controles cruciais exigidos pela ISO 27001, incluindo gestão de acesso, responsabilidades de segurança e auditoria de sistemas."
            />
            <ComplianceCard
              title="Desenvolvimento Seguro (DevSecOps)"
              description="Seguimos as melhores práticas de DevSecOps, com análise estática de código, verificação de dependências e testes de segurança contínuos em nosso ciclo de desenvolvimento."
            />
            <ComplianceCard
              title="Relatórios de Vulnerabilidade"
              description="Mantemos um programa de divulgação responsável de vulnerabilidades. Se você encontrar uma falha, encorajamos o contato para que possamos corrigi-la rapidamente."
            />
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Componentes Auxiliares com Tipagem Explícita ---

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityPillar = ({ icon, title, description }: PillarProps) => (
  <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
    <div className="text-orange-400 w-10 h-10">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-neutral-400">{description}</p>
  </div>
);

interface ComplianceProps {
  title: string;
  description: string;
}

const ComplianceCard = ({ title, description }: ComplianceProps) => (
  <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-neutral-400">{description}</p>
  </div>
);
