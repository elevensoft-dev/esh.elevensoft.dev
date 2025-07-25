import { useState, useEffect } from 'react'
import { collection, addDoc } from 'firebase/firestore'

import { db } from '~/lib/firebase'


interface QuizResult {
  id: string
  email: string
  answers: Record<number, number>
  profile: string
  totalScore: number
  completedAt: string
}

interface AnalyticsData {
  totalCompletions: number
  profileDistribution: Record<string, number>
  averageScore: number
  completionRate: number
}

export function useQuizAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalCompletions: 0,
    profileDistribution: {},
    averageScore: 0,
    completionRate: 0,
  })

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults')
    if (savedResults) {
      const results: QuizResult[] = JSON.parse(savedResults)
      updateAnalytics(results)
    }
  }, [])

  const saveQuizResult = async (
    result: Omit<QuizResult, 'id' | 'completedAt'>
  ) => {
    const newResult: QuizResult = {
      ...result,
      id: Date.now().toString(),
      completedAt: new Date().toISOString(),
    }

    try {
      await addDoc(collection(db, 'quizResults'), newResult)
      console.log('✅ Enviado ao Firestore')
    } catch (err) {
      console.error('❌ Erro ao salvar no Firestore:', err)
    }

    // opcional: salvar localmente também
    const savedResults = localStorage.getItem('quizResults')
    const results: QuizResult[] = savedResults ? JSON.parse(savedResults) : []
    results.push(newResult)
    localStorage.setItem('quizResults', JSON.stringify(results))

    updateAnalytics(results)
  }

  const updateAnalytics = (results: QuizResult[]) => {
    const totalCompletions = results.length
    const profileDistribution: Record<string, number> = {}
    let totalScore = 0

    results.forEach(result => {
      profileDistribution[result.profile] =
        (profileDistribution[result.profile] || 0) + 1
      totalScore += result.totalScore
    })

    const averageScore =
      totalCompletions > 0 ? totalScore / totalCompletions : 0

    setAnalytics({
      totalCompletions,
      profileDistribution,
      averageScore,
      completionRate: 100,
    })
  }

  const getResults = (): QuizResult[] => {
    const savedResults = localStorage.getItem('quizResults')
    return savedResults ? JSON.parse(savedResults) : []
  }

  const clearResults = () => {
    localStorage.removeItem('quizResults')
    setAnalytics({
      totalCompletions: 0,
      profileDistribution: {},
      averageScore: 0,
      completionRate: 0,
    })
  }

  return {
    analytics,
    saveQuizResult,
    getResults,
    clearResults,
  }
}

