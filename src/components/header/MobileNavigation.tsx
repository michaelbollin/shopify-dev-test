import { NavigationButton } from './NavigationButton';
import { Question } from '@/types/quiz';

type Props = {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  onDisabledClick: (e: React.MouseEvent) => void;
};

export function MobileNavigation({ currentQuestion, userAnswers, onDisabledClick }: Props) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 lg:hidden flex justify-between items-center gap-2 p-4 bg-white shadow-lg border-t z-50" 
      style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
      data-testid="mobile-navigation"
    >
      <NavigationButton
        href={currentQuestion?.previousId ? `/${currentQuestion.previousId}` : '#'}
        disabled={!currentQuestion?.previousId}
        onClick={onDisabledClick}
        className="bg-white hover:bg-gray-50 flex-1"
      >
        ← Previous
      </NavigationButton>

      <NavigationButton
        href={currentQuestion?.nextId ? `/${currentQuestion.nextId}` : '/finish'}
        disabled={!currentQuestion?.nextId && !Object.keys(userAnswers).length}
        onClick={onDisabledClick}
        className="bg-white hover:bg-gray-50 flex-1"
      >
        {currentQuestion?.nextId ? 'Next →' : 'Finish →'}
      </NavigationButton>
    </div>
  );
} 