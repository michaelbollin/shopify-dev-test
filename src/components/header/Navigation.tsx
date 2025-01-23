import { NavigationButton } from './NavigationButton';
import type { NavigationProps } from '@/types/quiz';

export function Navigation({ currentQuestion, userAnswers, onDisabledClick }: NavigationProps) {
  const questionNumber = (currentQuestion?.index ?? 0) + 1;
  const totalQuestions = currentQuestion?.totalQuestions ?? 1;

  return (
    <div 
      className="w-full max-w-2xl mx-auto hidden lg:flex items-center justify-between px-4"
      data-testid="desktop-navigation"
    >
      <NavigationButton
        href={currentQuestion?.previousId ? `/${currentQuestion.previousId}` : '#'}
        disabled={!currentQuestion?.previousId}
        onClick={onDisabledClick}
      >
        ← Previous
      </NavigationButton>

      <span className="text-primary font-medium min-w-[120px] text-center">
        Question {questionNumber} of {totalQuestions}
      </span>

      <NavigationButton
        href={currentQuestion?.nextId ? `/${currentQuestion.nextId}` : '/finish'}
        disabled={!currentQuestion?.nextId && !Object.keys(userAnswers).length}
        onClick={onDisabledClick}
      >
        {currentQuestion?.nextId ? 'Next →' : 'Finish →'}
      </NavigationButton>
    </div>
  );
} 