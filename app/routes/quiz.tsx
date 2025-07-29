import { useEffect, useState } from 'react';
import { Shield, Play, Users, Award, ArrowRight } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import SecurityQuiz from '~/components/modules/quiz/security-quiz';

const Quiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    document.title = 'ESH | Quiz'
  }, [])

  if (showQuiz) {
    return <SecurityQuiz />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="mb-6 animate-pulse border border-orange-500/30 bg-orange-500/10 text-orange-500 inline-flex items-center px-3 py-1 rounded-full text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Diagnóstico Gratuito de Segurança
          </div>
          <h1 className="text-3xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent animate-fade-in">
            Qual o Nível de Segurança da Sua Empresa?
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 mb-10 animate-fade-in leading-relaxed">
            Descubra em poucos minutos se sua empresa está protegida contra ameaças cibernéticas.
            Receba um diagnóstico personalizado e recomendações específicas para o seu negócio.
          </p>
          <Button
            onClick={() => setShowQuiz(true)}
            size="lg"
            className="cursor-pointer sm:px-12 sm:py-8 animate-fade-in sm:text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 transition-all duration-300 font-semibold"
          >
            <Play className="w-6 h-6 mr-3" />
            Iniciar Diagnóstico Gratuito
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-neutral-600 bg-neutral-800 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(255,138,41,0.2)]">
                <Shield className="w-8 h-8 text-neutral-900" />
              </div>
              <CardTitle className="text-xl text-white">Diagnóstico Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-neutral-400">
                8 perguntas estratégicas que avaliam os pilares fundamentais da segurança empresarial.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-neutral-600 bg-neutral-800 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(255,138,41,0.2)]">
                <Users className="w-8 h-8 text-neutral-900" />
              </div>
              <CardTitle className="text-xl text-white">Perfil Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-neutral-400">
                Identifique se sua empresa está no perfil Crítico, Intermediário ou Avançado.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-neutral-600 bg-neutral-800 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(255,138,41,0.2)]">
                <Award className="w-8 h-8 text-neutral-900" />
              </div>
              <CardTitle className="text-xl text-white">Recomendações Práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-neutral-400">
                Receba sugestões específicas para melhorar a segurança da sua empresa.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-8">Mais de 1.000 empresas já fizeram o diagnóstico</p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">92%</div>
              <div className="text-sm text-neutral-400">Empresas com lacunas de segurança</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5min</div>
              <div className="text-sm text-neutral-400">Tempo médio para completar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Gratuito e sem compromisso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
