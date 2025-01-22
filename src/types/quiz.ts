export interface Answer {
  id: string;
  text: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  answers: Answer[];
  correctAnswer: string;
  previousId?: string | null;
  nextId?: string | null;
  index?: number;
  totalQuestions?: number;
  seo?: SEO;
}

export interface AnswerProps {
  answer: Answer;
  isSelected: boolean;
  onClick: () => void;
  disabled: boolean;
  correctAnswer: string;
}

export interface MetricsProps {
  correctCount: number;
  wrongCount: number;
  onReset: () => void;
}

export interface MetricIconProps {
  type: 'correct' | 'wrong';
  count: number;
}

export interface NavigationProps {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  onDisabledClick: (e: React.MouseEvent) => void;
}

export interface NavigationButtonProps {
  href: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
}

export interface QuestionContentProps {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  submitAnswer: (questionId: string, answerId: string) => void;
}

export interface QuizHeaderProps {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  handleReset: () => void;
}

export interface QuizPageProps {
  initialQuestionId: string;
} 

