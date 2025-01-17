import { create } from 'zustand';
import { Question } from '@/types/quiz';
import { questionOrder } from '@/config/questionOrder';

interface QuizStore {
  currentQuestion: Question | null;
  userAnswers: Record<string, string>;
  firstQuestionId: string | null;
  questionsOrder: string[];
  setCurrentQuestion: (question: Question) => void;
  submitAnswer: (questionId: string, answerId: string) => void;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  clearAnswers: () => void;
  setFirstQuestionId: (id: string) => void;
  setQuestionsOrder: (order: string[]) => void;
  getNextQuestionId: (currentId: string) => string | null;
  getPreviousQuestionId: (currentId: string) => string | null;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentQuestion: null,
  userAnswers: {},
  firstQuestionId: null,
  questionsOrder: questionOrder,
  setCurrentQuestion: (question) => {
    set({ currentQuestion: question });
  },
  submitAnswer: (questionId, answerId) => 
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answerId }
    })),
  isAnswerCorrect: (questionId, answerId) => {
    const { currentQuestion } = get();
    return currentQuestion?.id === questionId && currentQuestion?.correctAnswer === answerId;
  },
  clearAnswers: () => set({ userAnswers: {} }),
  setFirstQuestionId: (id) => set({ firstQuestionId: id }),
  setQuestionsOrder: (order) => set({ questionsOrder: order }),
  getNextQuestionId: (currentId) => {
    const { questionsOrder } = get();
    const currentIndex = questionsOrder.findIndex(q => q === currentId);
    if (currentIndex === -1 || currentIndex === questionsOrder.length - 1) return null;
    return questionsOrder[currentIndex + 1];
  },
  getPreviousQuestionId: (currentId) => {
    const { questionsOrder } = get();
    const currentIndex = questionsOrder.findIndex(q => q === currentId);
    if (currentIndex <= 0) return null;
    return questionsOrder[currentIndex - 1];
  }
})); 