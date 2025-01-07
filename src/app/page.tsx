'use client';

import { useEffect, useRef } from 'react';
import { Answer } from '@/components/Answer';
import { useQuizStore } from '@/store/quizStore';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Home() {
  const {
    questions,
    currentQuestionIndex,
    userAnswers,
    score,
    setQuestions,
    submitAnswer,
    nextQuestion,
    resetQuiz,
    isAnswerCorrect,
    clearAnswers,
    previousQuestion
  } = useQuizStore();

  const explanationRef = useRef<HTMLDivElement>(null);
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnswered = currentQuestion ? userAnswers[currentQuestion.id] : false;
  const isCorrectAnswer = hasAnswered ? 
    isAnswerCorrect(currentQuestion.id, userAnswers[currentQuestion.id]) : 
    null;

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => setQuestions(questions));
  }, [setQuestions]);

  useEffect(() => {
    if (hasAnswered && !isCorrectAnswer && explanationRef.current) {
      const yOffset = -100; // Adjust this value to control the offset
      const element = explanationRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, [hasAnswered, isCorrectAnswer]);

  if (!currentQuestion) return null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-10">
        <div className="md:hidden">
          <div className="w-full h-12 flex items-center border-b">
            <div className="w-full px-6 flex justify-between text-sm">
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
              <button
                onClick={clearAnswers}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="w-full h-12 flex items-center">
            <div className="w-full px-4 flex justify-between gap-4 items-center">
              <button
                onClick={() => previousQuestion()}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
              >
                ← Previous
              </button>
              <div className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              <button
                onClick={() => nextQuestion()}
                disabled={currentQuestionIndex === questions.length - 1}
                className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full h-14 items-center">
          <div className="pl-6 flex gap-6 text-sm flex-1">
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

          <div className="max-w-2xl w-full mx-auto px-4 flex justify-between gap-4 items-center">
            <button
              onClick={() => previousQuestion()}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
            >
              ← Previous
            </button>
            <div className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <button
              onClick={() => nextQuestion()}
              disabled={currentQuestionIndex === questions.length - 1}
              className="px-4 py-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
            >
              Next →
            </button>
          </div>

          <div className="pr-6 flex-1 flex justify-end">
            <button
              onClick={clearAnswers}
              className="text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Clear answers
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 pt-28 md:pt-20 pb-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-8">
              <div className="prose dark:prose-invert max-w-none mb-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {currentQuestion.title}
                </ReactMarkdown>
              </div>
              <div className="space-y-3">
                {currentQuestion.answers.map((answer) => (
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
                  />
                ))}
              </div>
              
              {hasAnswered && (
                <div 
                  ref={explanationRef}
                  className={`mt-4 p-4 rounded-lg ${
                    isCorrectAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  <p className="font-medium mb-2">
                    {isCorrectAnswer ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {currentQuestion.content}
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
