'use client';

import { useEffect } from 'react';
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
    clearAnswers
  } = useQuizStore();

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json())
      .then(questions => setQuestions(questions));
  }, [setQuestions]);

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnswered = userAnswers[currentQuestion.id];
  const isCorrectAnswer = hasAnswered ? 
    isAnswerCorrect(currentQuestion.id, userAnswers[currentQuestion.id]) : 
    null;

  return (
    <>
      <div className="fixed top-4 right-4">
        <button
          onClick={clearAnswers}
          className="text-xs text-gray-500 hover:text-red-500 transition-colors"
        >
          Clear answers
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Quiz App</h1>
              <div className="text-sm">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>

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
                <div className={`mt-4 p-4 rounded-lg ${
                  isCorrectAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
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

            <div className="flex justify-between items-center">
              <div className="text-sm">
                Score: {score} / {questions.length}
              </div>
              {hasAnswered && (
                <button
                  onClick={() => {
                    if (isLastQuestion) {
                      resetQuiz();
                    } else {
                      nextQuestion();
                    }
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {isLastQuestion ? 'Restart Quiz' : 'Next Question'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
