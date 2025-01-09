type AnswerType = {
  id: string;
  text: string;
};

type AnswerProps = {
  answer: AnswerType;
  isSelected: boolean;
  isCorrect: boolean | null | undefined;
  onClick: () => void;
  disabled: boolean;
  correctAnswer: string;
};

export function Answer({ answer, isSelected, isCorrect, onClick, disabled, correctAnswer }: AnswerProps) {
  const getButtonStyle = () => {
    if (!isSelected && !disabled) return 'bg-white hover:bg-gray-100 border border-gray-200';
    if (isSelected && isCorrect === null) return 'bg-blue-500 text-white';
    if (isSelected && isCorrect) return 'bg-green-500 text-white';
    if (isSelected && !isCorrect) return 'bg-red-500 text-white';
    if (disabled && answer.id === correctAnswer) return 'bg-white border border-2 border-green-500';
    return 'bg-gray-100 border border-gray-200';
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 text-left rounded-lg transition-colors ${getButtonStyle()}`}
    >
      <span className="font-bold mr-2">{answer.id.toUpperCase()}.</span>
      {answer.text}
    </button>
  );
} 