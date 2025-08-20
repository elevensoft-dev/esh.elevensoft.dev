import { useEffect, useState } from 'react';
import { Shield, Play, ArrowRight, Terminal, KeyRound, BarChart } from 'lucide-react';

import { Button } from '~/components/ui/button';
import SecurityQuiz from '~/components/modules/quiz/security-quiz';
import { PageSEO } from '~/components/seo';
import { trackPixel } from '~/lib/meta-pixel';

const reportImageUrl = "/dashboard-notebook.webp";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    trackPixel("Página do quiz");
  }, []);

  if (showQuiz) {
    return <SecurityQuiz />;
  }

  return (
    <PageSEO
      title="Diagnóstico de Segurança - ESH | Eleven Soft"
      description="Descubra as vulnerabilidades ocultas na forma como sua equipe acessa servidores. Teste gratuito de 3 minutos com relatório personalizado de risco."
      keywords="diagnóstico segurança, teste vulnerabilidades, auditoria servidores, risco acesso, análise infraestrutura, segurança SSH"
      image="/og-image.jpg"
      url="https://esh.elevensoft.dev/quiz"
      type="website"
    >
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4 py-20">

          {/* HERO SECTION - More specific and focused copy */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="mb-6 animate-pulse border border-orange-500/30 bg-orange-500/10 text-orange-500 inline-flex items-center px-3 py-1 rounded-full text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Diagnóstico de Risco de Acesso à Infraestrutura
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent animate-fade-in">
              Seus Servidores Estão Realmente Seguros?
            </h1>
            <p className="text-xl text-neutral-300 mb-10 animate-fade-in leading-relaxed">
              Em 3 minutos, descubra as vulnerabilidades ocultas na forma como sua equipe acessa servidores. Receba um <strong>relatório de risco personalizado</strong> com um plano de ação para blindar sua infraestrutura.
            </p>
            <Button
              onClick={() => setShowQuiz(true)}
              size="lg"
              className="cursor-pointer px-12 py-8 animate-fade-in text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Play className="w-6 h-6 mr-3" />
              Iniciar Diagnóstico Gratuito
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>

          {/* New section to ANTICIPATE VALUE */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Seu Relatório Personalizado Incluirá:</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ValuePillar
                icon={<KeyRound size={32} className="text-orange-400"/>}
                title="Análise de Gestão de Credenciais"
                description="Avaliamos o risco de chaves SSH e senhas compartilhadas."
              />
              <ValuePillar
                icon={<Terminal size={32} className="text-orange-400"/>}
                title="Nível de Auditoria de Sessões"
                description="Verificamos se você tem visibilidade sobre o que é feito nos terminais."
              />
              <ValuePillar
                icon={<BarChart size={32} className="text-orange-400"/>}
                title="Pontuação de Maturidade em Acesso"
                description="Sua nota final e comparação com as melhores práticas do mercado."
              />
            </div>
            <div className="w-full h-96 bg-neutral-900 p-2 rounded-lg border border-neutral-700 shadow-2xl shadow-orange-500/10">
              <img
                src={reportImageUrl}
                alt="Exemplo do Relatório de Diagnóstico de Segurança"
                className="rounded-md w-full h-full object-cover"
                width={700}
                height={400}
              />
            </div>
          </div>

          {/* AUTHORITY AND CONTEXT Section */}
          <div className="text-center">
            <p className="text-neutral-300 mb-2">
              Um diagnóstico criado por especialistas que vivem este desafio todos os dias.
            </p>
            <p className="text-2xl font-bold text-white">
              Desenvolvido pela{' '}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline"
              >
                Elevensoft
              </a>
              , os criadores do ESH.
            </p>
          </div>
        </div>
      </div>
    </PageSEO>
  );
};

// ValuePillar component interface
interface ValuePillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ValuePillar component implementation
const ValuePillar = ({ icon, title, description }: ValuePillarProps) => (
  <div className="text-center p-4">
    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-neutral-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);

export default Index;
