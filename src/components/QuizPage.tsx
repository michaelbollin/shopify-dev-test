'use client';

import { useEffect, useState } from 'react';
import { Answer } from '@/components/Answer';
import { useQuizStore } from '@/store/quizStore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  initialQuestionId: string;
};

// First, let's define an interface for the Question type
interface Answer {
  id: string;
  text: string;
}

interface Question {
  id: string;
  title: string;
  content: string;
  answers: Answer[];
  correctAnswer: string;
  previousId: string | null;
  nextId: string | null;
  index: number;
  totalQuestions: number;
}

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
    if (firstQuestionId) {
      router.push(`/shopify/${firstQuestionId}`);
    }
  };

  useEffect(() => {
    fetch(`/api/questions/${initialQuestionId}`)
      .then(res => res.json())
      .then(question => {
        setCurrentQuestion(question);
      });
  }, [initialQuestionId, setCurrentQuestion]);

  const hasAnswered = Boolean(currentQuestion && userAnswers[currentQuestion.id]);
  const isCorrectAnswer = hasAnswered && currentQuestion ? 
    isAnswerCorrect(currentQuestion.id, userAnswers[currentQuestion.id]) : 
    null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-10">
        {/* Mobile header */}
        <div className="lg:hidden">
          <div className="w-full h-12 flex items-center border-b">
            <div className="w-full px-6 flex justify-between items-center">
              <h1 className="text-lg font-bold">Shopify Dev Test</h1>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 text-sm">
                  <div className="text-green-600">
                    Correct: {Object.entries(userAnswers).filter(([qId, aId]) => 
                      isAnswerCorrect(qId, aId)
                    ).length}
                  </div>
                  <div className="text-red-600">
                    Wrong: {Object.entries(userAnswers).filter(([qId, aId]) => 
                      !isAnswerCorrect(qId, aId)
                    ).length}
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* Mobile navigation */}
          <div className="w-full h-12 flex items-center">
            <div className="w-full px-4 flex justify-between gap-4 items-center">
              <Link
                href={`/shopify/${currentQuestion?.previousId}`}
                prefetch={true}
                className={`px-4 py-1 border rounded-lg transition-colors ${
                  currentQuestion?.previousId 
                    ? 'border-blue-500 text-blue-500 hover:bg-blue-50' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-disabled={!currentQuestion?.previousId}
                onClick={e => !currentQuestion?.previousId && e.preventDefault()}
              >
                ← Previous
              </Link>
              <div className="text-sm font-medium">
                Question {currentQuestion?.index ? currentQuestion.index + 1 : 1} of {currentQuestion?.totalQuestions}
              </div>
              <Link
                href={`/shopify/${currentQuestion?.nextId}`}
                prefetch={true}
                className={`px-4 py-1 border rounded-lg transition-colors ${
                  currentQuestion?.nextId 
                    ? 'border-blue-500 text-blue-500 hover:bg-blue-50' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-disabled={!currentQuestion?.nextId}
                onClick={e => !currentQuestion?.nextId && e.preventDefault()}
              >
                Next →
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop header - similar changes */}
        <div className="hidden lg:flex w-full h-14 items-center">
          <div className="pl-6 flex-1">
            <h1 className="text-xl font-bold">Shopify Dev Test</h1>
          </div>

          <div className="max-w-2xl w-full mx-auto px-4 flex justify-between gap-4 items-center">
           
              <Link
                href={`/shopify/${currentQuestion?.previousId}`}
                prefetch={true}
                className={`px-4 py-1 border rounded-lg transition-colors ${
                  currentQuestion?.previousId 
                    ? 'border-blue-500 text-blue-500 hover:bg-blue-50' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-disabled={!currentQuestion?.previousId}
                onClick={e => !currentQuestion?.previousId && e.preventDefault()}
              >
                ← Previous
              </Link>
        
            <div className="text-sm font-medium">
              Question {currentQuestion?.index ? currentQuestion.index + 1 : 1} of {currentQuestion?.totalQuestions}
            </div>
           
              <Link
                href={`/shopify/${currentQuestion?.nextId}`}
                prefetch={true}
                className={`px-4 py-1 border rounded-lg transition-colors ${
                  currentQuestion?.nextId 
                    ? 'border-blue-500 text-blue-500 hover:bg-blue-50' 
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-disabled={!currentQuestion?.nextId}
                onClick={e => !currentQuestion?.nextId && e.preventDefault()}
              >
                Next →
              </Link>
        
          </div>

          <div className="pr-6 flex-1 flex justify-end items-center gap-6">
            <div className="flex gap-4 text-sm">
              <div className="text-green-600">
                Correct: {Object.entries(userAnswers).filter(([qId, aId]) => 
                  isAnswerCorrect(qId, aId)
                ).length}
              </div>
              <div className="text-red-600">
                Wrong: {Object.entries(userAnswers).filter(([qId, aId]) => 
                  !isAnswerCorrect(qId, aId)
                ).length}
              </div>
            </div>
            <button
              onClick={handleReset}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 pt-28 lg:pt-20 pb-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-8">
              <div className="prose dark:prose-invert max-w-none mb-4">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}>
                    {currentQuestion?.title}
                </ReactMarkdown>
              </div>
              <div className="space-y-3">
                {currentQuestion?.answers.map((answer: Answer) => (
                  <Answer
                    key={answer.id}
                    answer={answer}
                    isSelected={userAnswers[currentQuestion.id] === answer.id}
                    isCorrect={
                      userAnswers[currentQuestion.id] === answer.id ?
                      isAnswerCorrect(currentQuestion.id, answer.id) :
                      null
                    }
                    onClick={() => submitAnswer(currentQuestion.id, answer.id)}
                    disabled={hasAnswered}
                    correctAnswer={currentQuestion.correctAnswer}
                  />
                ))}
              </div>
              
              {hasAnswered && (
                <div 
                  className={`mt-4 p-4 rounded-lg ${
                    isCorrectAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  <p className="font-medium mb-2">
                    {isCorrectAnswer ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {currentQuestion?.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 