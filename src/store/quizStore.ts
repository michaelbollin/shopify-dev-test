import { create } from 'zustand';

interface Question {
  id: string;
  title: string;
  content: string;
  answers: Answer[];
  correctAnswer: string;
  previousId: string | null;
  nextId: string | null;
  index: number;
}

interface Answer {
  id: string;
  text: string;
}

interface QuizStore {
  userAnswers: Record<string, string>;
  correctAnswers: Record<string, boolean>;
  currentQuestion: Question | null;
  setCurrentQuestion: (question: Question) => void;
  submitAnswer: (questionId: string, answerId: string) => void;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  clearAnswers: () => void;
  firstQuestionId: string | null;
  setFirstQuestionId: (id: string) => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  userAnswers: {},
  correctAnswers: {},
  currentQuestion: null,
  firstQuestionId: null,
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  setFirstQuestionId: (id) => set({ firstQuestionId: id }),
  submitAnswer: (questionId, answerId) => {
    const question = get().currentQuestion;
    const isCorrect = question?.correctAnswer === answerId;
    
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answerId },
      correctAnswers: { ...state.correctAnswers, [questionId]: isCorrect }
    }));
  },
  isAnswerCorrect: (questionId, answerId) => {
    const { correctAnswers } = get();
    return correctAnswers[questionId] ?? false;
  },
  clearAnswers: () => set({ userAnswers: {}, correctAnswers: {} })
})); 