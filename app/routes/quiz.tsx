import { useState } from 'react';
import { Shield, Play, Users, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Badge } from '~/components/ui/badge';
import SecurityQuiz from '~/components/modules/quiz/security-quiz';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <SecurityQuiz />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-6 animate-pulse-glow border-primary/30 bg-primary/10">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            Diagnóstico Gratuito de Segurança
          </Badge>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Qual o Nível de Segurança da Sua Empresa?
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in leading-relaxed">
            Descubra em poucos minutos se sua empresa está protegida contra ameaças cibernéticas.
            Receba um diagnóstico personalizado e recomendações específicas para o seu negócio.
          </p>
          <Button
            onClick={() => setShowQuiz(true)}
            size="lg"
            variant="startup"
            className="text-lg px-12 py-8 animate-fade-in font-semibold"
          >
            <Play className="w-6 h-6 mr-3" />
            Iniciar Diagnóstico Gratuito
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/10 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Diagnóstico Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                8 perguntas estratégicas que avaliam os pilares fundamentais da segurança empresarial.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Perfil Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                Identifique se sua empresa está no perfil Crítico, Intermediário ou Avançado.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl text-foreground">Recomendações Práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                Receba sugestões específicas para melhorar a segurança da sua empresa.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Mais de 1.000 empresas já fizeram o diagnóstico</p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Empresas com lacunas de segurança</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5min</div>
              <div className="text-sm text-muted-foreground">Tempo médio para completar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Gratuito e sem compromisso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
