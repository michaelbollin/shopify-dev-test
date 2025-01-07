import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question } from '@/utils/questionLoader';

type QuizState = {
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: Record<string, string>;
  score: number;
  setQuestions: (questions: Question[]) => void;
  submitAnswer: (questionId: string, answerId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  isAnswerCorrect: (questionId: string, answerId: string) => boolean;
  clearAnswers: () => void;
  setCurrentQuestionById: (id: string) => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      questions: [],
      userAnswers: {},
      score: 0,
      setQuestions: (questions) => set({ questions }),
      submitAnswer: (questionId, answerId) => 
        set((state) => {
          if (state.userAnswers[questionId]) return state; // Prevent changing answer
          return {
            userAnswers: {
              ...state.userAnswers,
              [questionId]: answerId,
            },
            score: Object.entries({
              ...state.userAnswers,
              [questionId]: answerId
            }).reduce((acc, [qId, aId]) => {
              const question = state.questions.find((q) => q.id === qId);
              return acc + (question?.correctAnswer === aId ? 1 : 0);
            }, 0),
          };
        }),
      nextQuestion: () => 
        set((state) => ({
          currentQuestionIndex: Math.min(
            state.currentQuestionIndex + 1,
            state.questions.length - 1
          ),
        })),
      previousQuestion: () => 
        set((state) => ({
          currentQuestionIndex: Math.max(
            state.currentQuestionIndex - 1,
            0
          ),
        })),
      resetQuiz: () => 
        set({
          currentQuestionIndex: 0,
          userAnswers: {},
          score: 0,
        }),
      isAnswerCorrect: (questionId, answerId) => {
        const question = get().questions.find(q => q.id === questionId);
        return question?.correctAnswer === answerId;
      },
      clearAnswers: () => {
        localStorage.removeItem('quiz-storage');  // Clear the persisted storage
        set({
          userAnswers: {},
          score: 0,
          currentQuestionIndex: 0,
        });
      },
      setCurrentQuestionById: (id: string) => 
        set((state) => ({
          currentQuestionIndex: state.questions.findIndex(q => q.id === id)
        })),
    }),
    {
      name: 'quiz-storage',
    }
  )
); 