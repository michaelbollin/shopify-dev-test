'use client';

import { useEffect } from 'react';
import { useQuizStore } from '@/store/quizStore';
import { useRouter } from 'next/navigation';
import { QuizHeader } from './QuizHeader';
import { QuestionContent } from './QuestionContent';

type Props = {
  initialQuestionId: string;
};

export function QuizPage({ initialQuestionId }: Props) {
  const router = useRouter();
  const { 
    currentQuestion, 
    setCurrentQuestion, 
    userAnswers, 
    submitAnswer, 
    isAnswerCorrect, 
    clearAnswers,
    setFirstQuestionId,
    firstQuestionId
  } = useQuizStore();

  // Store first question ID
  useEffect(() => {
    if (!firstQuestionId) {
      setFirstQuestionId(initialQuestionId);
    }
  }, [initialQuestionId, firstQuestionId, setFirstQuestionId]);

  const handleReset = () => {
    clearAnswers();
    const targetQuestionId = firstQuestionId || initialQuestionId;
    if (targetQuestionId) {
      router.push(`/${targetQuestionId}`);
    }
  };

  useEffect(() => {
    fetch(`/api/questions/${initialQuestionId}`)
      .then(res => res.json())
      .then(question => {
        setCurrentQuestion(question);
      });
  }, [initialQuestionId, setCurrentQuestion]);

  return (
    <div className="min-h-screen bg-gray-50">
      <QuizHeader 
        currentQuestion={currentQuestion}
        userAnswers={userAnswers}
        isAnswerCorrect={isAnswerCorrect}
        handleReset={handleReset}
      />
      
      <main className="py-8">
        <div className="max-w-2xl mx-auto px-4">
          <QuestionContent
            currentQuestion={currentQuestion}
            userAnswers={userAnswers}
            isAnswerCorrect={isAnswerCorrect}
            submitAnswer={submitAnswer}
          />
        </div>
      </main>
    </div>
  );
} 