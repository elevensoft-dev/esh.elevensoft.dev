import { useState } from 'react';
import React from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Progress } from '~/components/ui/progress';
import { useQuizAnalytics } from '~/hooks/use-quiz-analytics';

const questions = [
  {
    id: 1,
    question: "Como sua equipe gerencia as chaves SSH e senhas para acessar ativos de rede hoje?",
    options: [
      { text: "Cada um tem suas chaves, talvez em planilhas", points: 0 },
      { text: "Usamos um cofre de senhas compartilhado (ex: 1Password, LastPass)", points: 1 },
      { text: "Temos uma VPN, e a partir dela o acesso é direto", points: 2 },
      { text: "Usamos um Bastion Host ou Gateway de Acesso centralizado", points: 3 }
    ]
  },
  {
    id: 2,
    question: "Quando um funcionário é desligado, como você garante que TODOS os acessos dele são revogados imediatamente?",
    options: [
      { text: "É um processo manual, servidor por servidor, e torcemos para não esquecer nada", points: 0 },
      { text: "Rodamos alguns scripts para tentar automatizar", points: 1 },
      { text: "O processo é bem definido, mas ainda manual e leva algumas horas", points: 2 },
      { text: "É 100% automatizado e centralizado. Revogamos o acesso em um único lugar", points: 3 }
    ]
  },
  {
    id: 3,
    question: "Se um incidente ocorresse AGORA, você conseguiria assistir em tempo real ou rever em vídeo exatamente o que um usuário fez no terminal?",
    options: [
      { text: "Não, não temos essa capacidade", points: 0 },
      { text: "Talvez, analisando logs de texto do sistema, o que seria lento e difícil", points: 1 },
      { text: "Sim, temos gravação de sessão, mas o acesso aos vídeos não é imediato", points: 2 },
      { text: "Sim, temos gravação e replay instantâneo de todas as sessões", points: 3 }
    ]
  },
  {
    id: 4,
    question: "Um analista júnior precisa de acesso a um servidor de produção para depurar um problema. Como você limita o que ele pode fazer?",
    options: [
      { text: "Ele recebe acesso de root ou um usuário com muitos privilégios. Confiamos nele.", points: 0 },
      { text: "Editamos o arquivo 'sudoers' para dar permissões específicas, o que é complexo", points: 1 },
      { text: "Damos o acesso e ficamos monitorando a sessão dele ao vivo", points: 2 },
      { text: "Ele tem acesso a um menu restrito que só permite executar comandos pré-aprovados", points: 3 }
    ]
  },
  {
    id: 5,
    question: "Sua empresa precisa passar por auditorias como ISO 27001 ou provar conformidade com a LGPD. Como você gera as evidências de acesso?",
    options: [
      { text: "É um pânico. Juntamos logs e relatórios de várias fontes manualmente", points: 0 },
      { text: "Temos um sistema de logs centralizado, mas a correlação é manual", points: 1 },
      { text: "Conseguimos gerar relatórios, mas leva um tempo considerável da equipe", points: 2 },
      { text: "Geramos relatórios de auditoria completos e centralizados com poucos cliques", points: 3 }
    ]
  }
];

interface Profile {
  name: string;
  description: string;
  score: string;
  color: string;
  icon: React.ReactNode;
  recommendations: string[];
}

const profiles: Profile[] = [
  {
    name: "Risco Crítico",
    description: "Sua infraestrutura está altamente exposta a acessos indevidos, vazamento de dados e erros humanos. A falta de controle e auditoria centralizada é um ponto de falha urgente.",
    score: "0-5 pontos",
    color: "security-critical",
    icon: <XCircle className="w-8 h-8" />,
    recommendations: [
      "Centralizar a gestão de credenciais imediatamente para eliminar chaves espalhadas.",
      "Implementar gravação de sessão para ter 100% de visibilidade.",
      "Automatizar o processo de revogação de acessos (offboarding).",
      "Estabelecer um ponto único de acesso (Gateway/Bastion).",
    ]
  },
  {
    name: "Vulnerabilidade Moderada",
    description: "Você possui algumas boas práticas, mas ainda opera com processos manuais e reativos que consomem tempo e deixam brechas de segurança significativas.",
    score: "6-10 pontos",
    color: "security-warning",
    icon: <AlertTriangle className="w-8 h-8" />,
    recommendations: [
      "Avançar de logs de texto para replay visual de sessões para acelerar investigações.",
      "Explorar o controle preventivo de comandos para reduzir o risco humano.",
      "Otimizar a geração de relatórios de auditoria para economizar tempo.",
      "Refinar o controle de privilégios para além do 'sudoers'.",
    ]
  },
  {
    name: "Maturidade em Acesso",
    description: "Parabéns! Sua empresa possui uma base sólida de segurança de acesso. O próximo nível é otimizar a eficiência e implementar controles preventivos avançados.",
    score: "11-15 pontos",
    color: "security-success",
    icon: <CheckCircle className="w-8 h-8" />,
    recommendations: [
      "Implementar bloqueio proativo de comandos perigosos em vez de apenas auditar.",
      "Consolidar suas ferramentas de acesso em uma única plataforma para reduzir custos e complexidade.",
      "Automatizar totalmente o ciclo de vida das permissões baseado em funções.",
      "Usar a segurança como um diferencial competitivo para seus clientes.",
    ]
  }
];

export default function SecurityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const { saveQuizResult } = useQuizAnalytics();

  const handleAnswer = (questionId: number, points: number) => {
    const newAnswers = { ...answers, [questionId]: points };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailCapture(true);
    }
  };

  const calculateProfile = (): Profile => {
    const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);

    if (totalScore <= 5) {
      return profiles[0];
    } else if (totalScore <= 10) {
      return profiles[1];
    } else {
      return profiles[2];
    }
  };

  const handleEmailSubmit = () => {
    if (email.trim()) {
      const userProfile = calculateProfile();
      const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);

      setProfile(userProfile);
      setShowResult(true);
      setShowEmailCapture(false);

      saveQuizResult({
        email,
        answers,
        profile: userProfile.name,
        totalScore
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setEmail('');
    setShowEmailCapture(false);
    setShowResult(false);
    setProfile(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-neutral-800 border-neutral-600 shadow-[0_0_40px_rgba(255,138,41,0.2)] animate-[fadeIn_0.6s_ease-out]">
          <CardHeader className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mb-6 mx-auto shadow-[0_0_40px_rgba(255,138,41,0.2)]`}>
              <div className="text-gray-900">
                {profile.icon}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-4">
              Perfil: {profile.name}
            </CardTitle>
            <CardDescription className="text-lg text-neutral-400">
              {profile.description}
            </CardDescription>
            <div className="mt-4 mx-auto border border-orange-500/30 bg-orange-500/10 text-orange-500 inline-block px-3 py-1 rounded-full text-sm">
              {profile.score}
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-white text-lg">Seu Plano de Ação Recomendado:</h3>
              <ul className="space-y-3">
                {profile.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-400">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-lg text-center shadow-[0_0_40px_rgba(255,138,41,0.2)]">
              <h3 className="font-semibold mb-3 text-gray-900 text-xl">O ESH foi criado para resolver exatamente isso.</h3>
              <p className="text-neutral-800 mb-6">
                Nossa plataforma implementa todas as recomendações do seu diagnóstico em uma única solução, simples e poderosa.
              </p>
              <a href="/#solution" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-neutral-100 shadow-lg font-semibold px-8 py-4 text-base"
                >
                  Veja como o ESH Funciona
                </Button>
              </a>
            </div>

            <div className="text-center space-y-3">
              <Button variant="outline" onClick={resetQuiz} className="border-orange-500/30 hover:bg-orange-500/10 text-white">
                Fazer Quiz Novamente
              </Button>
              <div className="text-sm text-neutral-400">
                <a href="/" className="hover:underline hover:text-orange-500 transition-colors">
                  ← Voltar ao início
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showEmailCapture) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-neutral-800 border-neutral-600 shadow-[0_0_40px_rgba(255,138,41,0.2)] animate-[fadeIn_0.6s_ease-out]">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,138,41,0.2)]">
              <Shield className="w-8 h-8 text-gray-900" />
            </div>
            <CardTitle className="text-2xl font-bold text-white mb-4">
              Seu diagnóstico está pronto!
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Insira seu melhor e-mail para receber o relatório completo e seu plano de ação personalizado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email profissional</Label>
              <Input
                id="email"
                type="email"
                placeholder="cto@suaempresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-center bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400"
              />
            </div>
            <Button
              onClick={handleEmailSubmit}
              variant="startup"
              className="w-full cursor-pointer animate-fade-in bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 transition-all duration-300"
              disabled={!email.trim()}
            >
              Ver Meu Diagnóstico
            </Button>
            <p className="text-xs text-neutral-400 text-center">
              Respeitamos sua privacidade. Sem spam, apenas valor.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-neutral-800 border-neutral-700 shadow-[0_0_40px_rgba(255,138,41,0.2)] animate-[fadeIn_0.6s_ease-out]">
        <CardHeader>
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,138,41,0.2)]">
              <Shield className="w-6 h-6 text-gray-900" />
            </div>
            <div className="border border-orange-500/30 bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm">
              {currentQuestion + 1} de {questions.length}
            </div>
          </div>
          <Progress value={progress} className="mb-6" />
          <CardTitle className="text-2xl text-white">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="quiz"
                className="w-full text-left justify-start h-auto p-6 hover:bg-orange-500/10 hover:border-orange-500/30 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transition-all duration-300"
                onClick={() => handleAnswer(questions[currentQuestion].id, option.points)}
              >
                <span className="text-white">{option.text}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface ValuePillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValuePillar = ({ icon, title, description }: ValuePillarProps) => (
  <div className="text-center p-4">
    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-neutral-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);
