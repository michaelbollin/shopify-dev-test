import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Question } from '@/types/quiz';
import { Answer } from './Answer';

type Props = {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  submitAnswer: (questionId: string, answerId: string) => void;
};

export function QuestionContent({ 
  currentQuestion, 
  userAnswers, 
  isAnswerCorrect, 
  submitAnswer 
}: Props) {
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
                {currentQuestion.content}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 