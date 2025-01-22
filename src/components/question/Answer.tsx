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

  // Check if the text is a code block (starts with HTML-like content)
  const isCodeBlock = answer.text.trim().startsWith('<');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={getAriaLabel()}
      className={getButtonStyle()}
    >
      <span className="font-bold mr-2">{answer.id.toUpperCase()}.</span>
      {isCodeBlock ? (
        <div className="mockup-code bg-base-200 text-left min-w-full">
          <pre data-prefix="$" className="px-4 py-2"><code>{answer.text}</code></pre>
        </div>
      ) : (
        <div className={`prose ${isSelected ? 'text-current' : 'text-base-content'}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {answer.text}
          </ReactMarkdown>
        </div>
      )}
    </button>
  );
} 