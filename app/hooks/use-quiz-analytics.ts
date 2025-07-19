import { useState, useEffect } from 'react';

interface QuizResult {
  id: string;
  email: string;
  answers: Record<number, number>;
  profile: string;
  totalScore: number;
  completedAt: string;
}

interface AnalyticsData {
  totalCompletions: number;
  profileDistribution: Record<string, number>;
  averageScore: number;
  completionRate: number;
}

export function useQuizAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalCompletions: 0,
    profileDistribution: {},
    averageScore: 0,
    completionRate: 0
  });

  useEffect(() => {
    // Carregar dados do localStorage
    const savedResults = localStorage.getItem('quizResults');
    if (savedResults) {
      const results: QuizResult[] = JSON.parse(savedResults);
      updateAnalytics(results);
    }
  }, []);

  const saveQuizResult = (result: Omit<QuizResult, 'id' | 'completedAt'>) => {
    const newResult: QuizResult = {
      ...result,
      id: Date.now().toString(),
      completedAt: new Date().toISOString()
    };

    const savedResults = localStorage.getItem('quizResults');
    const results: QuizResult[] = savedResults ? JSON.parse(savedResults) : [];
    results.push(newResult);

    localStorage.setItem('quizResults', JSON.stringify(results));
    updateAnalytics(results);

    // Aqui você pode enviar os dados para seu backend/CRM
    console.log('Quiz result saved:', newResult);
  };

  const updateAnalytics = (results: QuizResult[]) => {
    const totalCompletions = results.length;
    const profileDistribution: Record<string, number> = {};
    let totalScore = 0;

    results.forEach(result => {
      profileDistribution[result.profile] = (profileDistribution[result.profile] || 0) + 1;
      totalScore += result.totalScore;
    });

    const averageScore = totalCompletions > 0 ? totalScore / totalCompletions : 0;

    setAnalytics({
      totalCompletions,
      profileDistribution,
      averageScore,
      completionRate: 100 // Assumindo 100% para quem completa
    });
  };

  const getResults = (): QuizResult[] => {
    const savedResults = localStorage.getItem('quizResults');
    return savedResults ? JSON.parse(savedResults) : [];
  };

  const clearResults = () => {
    localStorage.removeItem('quizResults');
    setAnalytics({
      totalCompletions: 0,
      profileDistribution: {},
      averageScore: 0,
      completionRate: 0
    });
  };

  return {
    analytics,
    saveQuizResult,
    getResults,
    clearResults
  };
}
