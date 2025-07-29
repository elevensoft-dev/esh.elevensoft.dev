import { useEffect, useRef, useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Progress } from '~/components/ui/progress';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { useQuizAnalytics } from '~/hooks/use-quiz-analytics';
import { isValidEmailFull } from '~/lib/utils';

interface Question {
  id: number;
  question: string;
  options: { text: string; points: number }[];
}

interface UserAnswers {
  [key: number]: number;
}

interface Profile {
  name: string;
  description: string;
  score: string;
  color: string;
  icon: React.ReactNode;
  recommendations: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Sua empresa possui política formal de segurança da informação?",
    options: [
      { text: "Sim, implementada e atualizada regularmente", points: 3 },
      { text: "Sim, mas desatualizada", points: 2 },
      { text: "Não, mas estamos desenvolvendo", points: 1 },
      { text: "Não possuímos", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Quantos incidentes de segurança sua empresa enfrentou nos últimos 12 meses?",
    options: [
      { text: "Nenhum", points: 3 },
      { text: "1-2 incidentes menores", points: 2 },
      { text: "3-5 incidentes", points: 1 },
      { text: "Mais de 5 incidentes", points: 0 }
    ]
  },
  {
    id: 3,
    question: "Sua equipe utiliza autenticação em dois fatores (2FA)?",
    options: [
      { text: "Sim, em todos os sistemas críticos", points: 3 },
      { text: "Sim, em alguns sistemas", points: 2 },
      { text: "Apenas para alguns usuários", points: 1 },
      { text: "Não utilizamos", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Como são realizados os backups dos dados críticos?",
    options: [
      { text: "Backups automáticos diários com teste de restauração", points: 3 },
      { text: "Backups regulares sem teste", points: 2 },
      { text: "Backups esporádicos", points: 1 },
      { text: "Não temos rotina de backup", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Qual o nível de treinamento em segurança da sua equipe?",
    options: [
      { text: "Treinamentos regulares e atualizações constantes", points: 3 },
      { text: "Treinamento anual básico", points: 2 },
      { text: "Treinamento eventual", points: 1 },
      { text: "Não temos treinamentos específicos", points: 0 }
    ]
  },
  {
    id: 6,
    question: "Como é feito o controle de acesso aos sistemas?",
    options: [
      { text: "Controle baseado em funções com revisões periódicas", points: 3 },
      { text: "Controle básico por usuário", points: 2 },
      { text: "Controle limitado", points: 1 },
      { text: "Acesso livre ou pouco controlado", points: 0 }
    ]
  },
  {
    id: 7,
    question: "Sua empresa possui um plano de resposta a incidentes?",
    options: [
      { text: "Sim, testado e atualizado regularmente", points: 3 },
      { text: "Sim, mas não testado", points: 2 },
      { text: "Plano básico em desenvolvimento", points: 1 },
      { text: "Não possuímos", points: 0 }
    ]
  },
  {
    id: 8,
    question: "Como é feito o monitoramento de segurança?",
    options: [
      { text: "Monitoramento 24/7 com alertas automáticos", points: 3 },
      { text: "Monitoramento básico com logs", points: 2 },
      { text: "Verificações eventuais", points: 1 },
      { text: "Não fazemos monitoramento", points: 0 }
    ]
  }
];

const profiles: Profile[] = [
  {
    name: "Crítico",
    description: "Sua empresa está vulnerável a ataques cibernéticos. É urgente implementar medidas de segurança básicas.",
    score: "0-8 pontos",
    color: "security-critical",
    icon: <XCircle className="w-8 h-8" />,
    recommendations: [
      "Implementar política de segurança imediatamente",
      "Configurar autenticação em dois fatores",
      "Estabelecer rotina de backups",
      "Treinar equipe em segurança básica"
    ]
  },
  {
    name: "Intermediário",
    description: "Você já começou a jornada de segurança, mas ainda há importantes lacunas para fechar.",
    score: "9-16 pontos",
    color: "security-warning",
    icon: <AlertTriangle className="w-8 h-8" />,
    recommendations: [
      "Atualizar políticas de segurança existentes",
      "Implementar monitoramento proativo",
      "Ampliar treinamentos da equipe",
      "Criar plano de resposta a incidentes"
    ]
  },
  {
    name: "Avançado",
    description: "Parabéns! Sua empresa possui um bom nível de segurança. Considere evoluir para práticas mais avançadas.",
    score: "17-24 pontos",
    color: "security-success",
    icon: <CheckCircle className="w-8 h-8" />,
    recommendations: [
      "Implementar auditoria de segurança regular",
      "Considerar certificações de segurança",
      "Avaliar soluções de segurança avançadas",
      "Estabelecer programa de bug bounty"
    ]
  }
];

export default function SecurityQuiz() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
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

  const calculateProfile = () => {
    const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);

    if (totalScore <= 8) {
      return profiles[0]; // Crítico
    } else if (totalScore <= 16) {
      return profiles[1]; // Intermediário
    } else {
      return profiles[2]; // Avançado
    }
  };

  const handleEmailSubmit = async () => {
    if (!name.trim()) {
      toast.error('Digite seu nome!');
      return nameInputRef.current?.focus();
    }

    if(!email || !isValidEmailFull(email)) {
      toast.error('Insira um email válido!')
      return emailInputRef.current?.focus()
    }

    if (email.trim()) {
      const userProfile = calculateProfile();
      const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);

      const { success } = await saveQuizResult({
        name,
        email,
        answers,
        profile: userProfile.name,
        totalScore
      });

      if(success) {
        setProfile(userProfile);
        setShowResult(true);
        setShowEmailCapture(false);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setEmail('');
    setName('');
    setShowEmailCapture(false);
    setShowResult(false);
    setProfile(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  useEffect(() => {
    if(showEmailCapture && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [showEmailCapture])

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
              <h3 className="font-semibold mb-4 text-white text-lg">Recomendações para sua empresa:</h3>
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
              <h3 className="font-semibold mb-3 text-gray-900 text-lg">Quer melhorar sua segurança?</h3>
              <p className="text-neutral-800 mb-6">
                Agende uma consultoria gratuita com nossos especialistas em segurança.
              </p>
              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target='_blank'
                rel="noreferrer"
                className="py-4 px-3 sm:px-8 cursor-pointer text-sm bg-white text-orange-600 hover:bg-neutral-100 shadow-lg font-semibold"
              >
                Agendar Consultoria Gratuita
              </a>
            </div>

            <div className="text-center space-y-3">
              {/* <Button variant="outline" onClick={resetQuiz} className="border-orange-500/30 hover:bg-orange-500/10 text-white"> */}
              {/*   Fazer Quiz Novamente */}
              {/* </Button> */}
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
              Quase terminando!
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Digite seu email para receber o resultado personalizado do seu diagnóstico de segurança.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={(e) => e.code === 'Enter' && emailInputRef.current?.focus()}
                className="text-center bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400"
                ref={nameInputRef}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email profissional</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => e.code === 'Enter' ? handleEmailSubmit() : e}
                className="text-center bg-neutral-900 border-neutral-600 text-white placeholder:text-neutral-400"
                ref={emailInputRef}
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
              Seus dados estão seguros e não serão compartilhados com terceiros.
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
          <CardTitle className="text-base sm:text-2xl text-white">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="quiz"
                className="whitespace-break-spaces w-full justify-start h-auto p-6 hover:bg-orange-500/10 hover:border-orange-500/30 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transition-all duration-300"
                onClick={() => handleAnswer(questions[currentQuestion].id, option.points)}
              >
                <span className="text-white">{option.text} Lorem ipsum dolor sit amet.</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
