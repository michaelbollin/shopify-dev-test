import Link from 'next/link';
import { Question } from '@/types/quiz';

type Props = {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  handleReset: () => void;
};

export function QuizHeader({ currentQuestion, userAnswers, isAnswerCorrect, handleReset }: Props) {
  const isLastQuestion = currentQuestion?.index === (currentQuestion?.totalQuestions ?? 0) - 1;

  const NextButton = () => (
    <Link
      href={isLastQuestion ? '/finish' : `/${currentQuestion?.nextId}`}
      prefetch={true}
      className={`px-4 py-1 border rounded-lg transition-colors ${
        isLastQuestion
          ? 'bg-green-500 border-green-500 text-white hover:bg-green-600'
          : currentQuestion?.nextId 
            ? 'border-blue-500 text-blue-500 hover:bg-blue-50' 
            : 'border-gray-200 text-gray-300 cursor-not-allowed'
      }`}
      aria-disabled={!currentQuestion?.nextId && !isLastQuestion}
      onClick={e => !currentQuestion?.nextId && !isLastQuestion && e.preventDefault()}
    >
      {isLastQuestion ? 'Finish →' : 'Next →'}
    </Link>
  );

  return (
    <div className="sticky top-0 bg-white border-b shadow-sm z-10">
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
              href={`/${currentQuestion?.previousId}`}
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
            <NextButton />
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:flex w-full h-14 items-center">
        <div className="pl-6 flex-1">
          <h1 className="text-xl font-bold">Shopify Dev Test</h1>
        </div>

        <div className="flex-1 flex justify-center items-center gap-4">
          <Link
            href={`/${currentQuestion?.previousId}`}
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
          <NextButton />
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
  );
} 