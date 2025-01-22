import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { AnswerProps } from '@/types/quiz';

export function Answer({ answer, isSelected, onClick, disabled, correctAnswer }: AnswerProps) {
  const isCorrect = isSelected ? answer.id === correctAnswer : null;
  
  const getButtonStyle = () => {
    if (!isSelected && !disabled) return 'btn-answer';
    if (isSelected && isCorrect === null) return 'btn-answer btn-answer-selected';
    if (isSelected && isCorrect) return 'btn-answer btn-answer-correct';
    if (isSelected && !isCorrect) return 'btn-answer btn-answer-incorrect';
    if (disabled && answer.id === correctAnswer) return 'btn-answer btn-answer-correct-disabled';
    return 'btn-answer btn-disabled';
  };

  const getAriaLabel = () => {
    if (isSelected && isCorrect === true) return 'Correct answer';
    if (isSelected && isCorrect === false) return 'Incorrect answer';
    if (isSelected && isCorrect === null) return 'Selected answer';
    return undefined;
  };


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={getAriaLabel()}
      className={`${getButtonStyle()} flex w-full `}
    >
      <span className="font-bold mr-2">{answer.id.toUpperCase()}.</span>
      <div className={`prose flex-1 text-left items-center max-w-[90%] ${isSelected ? 'text-current' : 'text-base-content'}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {answer.text}
        </ReactMarkdown>
      </div>
    </button>
  );
} 