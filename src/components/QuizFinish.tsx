'use client';

import { useQuizStore } from '@/store/quizStore';
import Link from 'next/link';

export function QuizFinish() {
  const { userAnswers, isAnswerCorrect } = useQuizStore();
  
  const correctAnswers = Object.entries(userAnswers).filter(([qId, aId]) => 
    isAnswerCorrect(qId, aId)
  ).length;
  
  const totalAnswered = Object.keys(userAnswers).length;
  const score = Math.round((correctAnswers / totalAnswered) * 100) || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">🎉 Congratulations!</h1>
          <p className="text-xl mb-8">
            You've completed the Shopify Development Quiz
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="text-lg">
              <span className="font-medium">Your Score: </span>
              <span className={`${score >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                {score}%
              </span>
            </div>
            <div className="text-lg">
              <span className="font-medium">Correct Answers: </span>
              <span className="text-green-600">{correctAnswers}</span>
              {totalAnswered > 0 && <span> out of {totalAnswered}</span>}
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start Over
            </Link>
            
            <a
              href="https://www.buymeacoffee.com/michaelbollin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              ☕ Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 