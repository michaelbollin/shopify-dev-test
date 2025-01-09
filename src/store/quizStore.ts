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
  currentQuestion: null,
  firstQuestionId: null,
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  setFirstQuestionId: (id) => set({ firstQuestionId: id }),
  submitAnswer: (questionId, answerId) => 
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answerId }
    })),
  isAnswerCorrect: (questionId, answerId) => {
    const question = get().currentQuestion;
    return question?.id === questionId && question?.correctAnswer === answerId;
  },
  clearAnswers: () => set({ userAnswers: {} })
})); 