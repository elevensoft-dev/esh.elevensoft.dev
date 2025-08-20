import { useEffect } from "react";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { trackPixel } from "~/lib/meta-pixel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";


import type { Profile } from "./security-quiz";


const iconMap = {
  CheckCircle,
  AlertTriangle,
  XCircle,
} as const;

export function ResultQuiz() {
  const profile: Profile = JSON.parse(localStorage.getItem('profile') || '{}');
  const Icon = iconMap[profile?.icon as keyof typeof iconMap];

  useEffect(() => {
    trackPixel("Lead", {
      page: "Resultado do quiz",
      userProfile: profile
    });
  }, [profile]);


  if(!profile || !profile.name) {
    return (<div className="text-4xl font-bold text-indigo-300">Erro ao exibir resultado!</div>)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-neutral-800 border-neutral-600 shadow-[0_0_40px_rgba(255,138,41,0.2)] animate-[fadeIn_0.6s_ease-out]">
        <CardHeader className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mb-6 mx-auto shadow-[0_0_40px_rgba(255,138,41,0.2)]`}>
            <div className="text-gray-900">
              {Icon ? <Icon className="w-8 h-8 text-white" /> : <CheckCircle className='w-8 h-8 text-white' />}
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-white mb-4">
            {profile.name}
          </CardTitle>
          <CardDescription className="text-lg text-neutral-400">
            {profile.description}
          </CardDescription>
          <div className="mt-4 mx-auto border border-orange-500/30 bg-orange-500/10 text-orange-500 inline-block px-3 py-1 rounded-full text-sm">
            {profile.score ? profile.score : 'Excelente'}
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
            <div className="text-sm text-neutral-400">
              <Link to="/" className="hover:underline hover:text-orange-500 transition-colors">
                ← Voltar ao início
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
