import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { QuestionContentProps } from '@/types/quiz';
import { Answer } from './Answer';
import { CheckIcon, CrossIcon } from '../icons/ResultIcon';

export function Question({ 
  currentQuestion, 
  userAnswers, 
  isAnswerCorrect, 
  submitAnswer 
}: QuestionContentProps) {
  if (!currentQuestion) return null;

  const hasAnswered = Boolean(userAnswers[currentQuestion.id]);
  const isCorrectAnswer = hasAnswered ? 
    isAnswerCorrect(currentQuestion.id, userAnswers[currentQuestion.id]) : 
    null;

  return (
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
            <p className="font-medium mb-2 flex items-center gap-2">
              {isCorrectAnswer ? (
                <>
                  <CheckIcon className="h-10 w-10" />
                  Correct!
                </>
              ) : (
                <>
                  <CrossIcon className="h-10 w-10" />
                  Incorrect
                </>
              )}
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
  );
} 