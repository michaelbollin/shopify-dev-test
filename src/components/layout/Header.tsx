import type { QuizHeaderProps } from '@/types/quiz';
import { Brand } from '../header/Brand';
import { Navigation } from '../header/Navigation';
import { MobileNavigation } from '../header/MobileNavigation';
import { Metrics } from '../header/Metrics';

export function Header({ currentQuestion, userAnswers, isAnswerCorrect, handleReset }: QuizHeaderProps) {
  const correctCount = Object.entries(userAnswers).filter(
    ([qId, aId]) => isAnswerCorrect(qId, aId)
  ).length;

  const wrongCount = Object.keys(userAnswers).length - correctCount;

  const handleDisabledClick = (e: React.MouseEvent) => {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <Brand />
        <Navigation 
          currentQuestion={currentQuestion}
          userAnswers={userAnswers}
          onDisabledClick={handleDisabledClick}
        />
        <Metrics
          correctCount={correctCount}
          wrongCount={wrongCount}
          onReset={handleReset}
        />
      </div>

      <MobileNavigation
        currentQuestion={currentQuestion}
        userAnswers={userAnswers}
        onDisabledClick={handleDisabledClick}
      />
    </>
  );
} 