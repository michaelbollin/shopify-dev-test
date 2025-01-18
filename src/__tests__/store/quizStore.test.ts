import { useQuizStore } from '@/store/quizStore';
import { Question } from '@/types/quiz';

const mockQuestion: Question = {
  id: 'q1',
  title: 'Test Question',
  content: 'Test content',
  answers: [
    { id: 'a1', text: 'Answer 1' },
    { id: 'a2', text: 'Answer 2' }
  ],
  correctAnswer: 'a1',
  index: 0,
  totalQuestions: 3,
  previousId: null,
  nextId: 'q2'
};

describe('QuizStore', () => {
  beforeEach(() => {
    const store = useQuizStore.getState();
    store.clearAnswers?.();
    useQuizStore.setState({
      currentQuestion: null,
      userAnswers: {},
      correctAnswers: {},
      firstQuestionId: null,
      questionsOrder: []
    });
  });

  it('initializes with default values', () => {
    const state = useQuizStore.getState();
    expect(state.currentQuestion).toBeNull();
    expect(state.userAnswers).toEqual({});
    expect(state.correctAnswers).toEqual({});
    expect(state.firstQuestionId).toBeNull();
    expect(state.questionsOrder).toEqual([]);
  });

  it('sets current question and updates correct answers', () => {
    const { setCurrentQuestion } = useQuizStore.getState();
    setCurrentQuestion(mockQuestion);

    const state = useQuizStore.getState();
    expect(state.currentQuestion).toEqual(mockQuestion);
    expect(state.correctAnswers).toEqual({
      [mockQuestion.id]: mockQuestion.correctAnswer
    });
  });

  it('submits user answers', () => {
    const { submitAnswer } = useQuizStore.getState();
    submitAnswer('q1', 'a1');
    submitAnswer('q2', 'a2');

    const state = useQuizStore.getState();
    expect(state.userAnswers).toEqual({
      q1: 'a1',
      q2: 'a2'
    });
  });

  it('checks if answers are correct', () => {
    const { setCurrentQuestion, isAnswerCorrect } = useQuizStore.getState();
    setCurrentQuestion(mockQuestion);

    expect(isAnswerCorrect('q1', 'a1')).toBe(true);
    expect(isAnswerCorrect('q1', 'a2')).toBe(false);
  });

  it('clears answers', () => {
    const { setCurrentQuestion, submitAnswer, clearAnswers } = useQuizStore.getState();
    setCurrentQuestion(mockQuestion);
    submitAnswer('q1', 'a1');

    clearAnswers();

    const state = useQuizStore.getState();
    expect(state.userAnswers).toEqual({});
    expect(state.correctAnswers).toEqual({});
  });

  it('sets first question ID', () => {
    const { setFirstQuestionId } = useQuizStore.getState();
    setFirstQuestionId('q1');

    const state = useQuizStore.getState();
    expect(state.firstQuestionId).toBe('q1');
  });

  it('sets questions order', () => {
    const { setQuestionsOrder } = useQuizStore.getState();
    const order = ['q1', 'q2', 'q3'];
    setQuestionsOrder(order);

    const state = useQuizStore.getState();
    expect(state.questionsOrder).toEqual(order);
  });

  describe('navigation', () => {
    beforeEach(() => {
      const { setQuestionsOrder } = useQuizStore.getState();
      setQuestionsOrder(['q1', 'q2', 'q3']);
    });

    it('gets next question ID', () => {
      const { getNextQuestionId } = useQuizStore.getState();
      expect(getNextQuestionId('q1')).toBe('q2');
      expect(getNextQuestionId('q2')).toBe('q3');
      expect(getNextQuestionId('q3')).toBeNull();
      expect(getNextQuestionId('invalid')).toBeNull();
    });

    it('gets previous question ID', () => {
      const { getPreviousQuestionId } = useQuizStore.getState();
      expect(getPreviousQuestionId('q3')).toBe('q2');
      expect(getPreviousQuestionId('q2')).toBe('q1');
      expect(getPreviousQuestionId('q1')).toBeNull();
      expect(getPreviousQuestionId('invalid')).toBeNull();
    });
  });

  describe('state management', () => {
    it('maintains state after multiple updates', () => {
      const { submitAnswer, setQuestionsOrder } = useQuizStore.getState();
      
      // Perform updates
      submitAnswer('q1', 'a1');
      submitAnswer('q2', 'a2');
      setQuestionsOrder(['q1', 'q2', 'q3']);
      
      const state = useQuizStore.getState();
      expect(state.userAnswers).toEqual({
        q1: 'a1',
        q2: 'a2'
      });
      expect(state.questionsOrder).toEqual(['q1', 'q2', 'q3']);
    });

    it('handles concurrent state updates correctly', () => {
      const { setCurrentQuestion, submitAnswer, setQuestionsOrder } = useQuizStore.getState();
      
      // Simulate concurrent updates
      setCurrentQuestion(mockQuestion);
      submitAnswer('q1', 'a1');
      setQuestionsOrder(['q1', 'q2', 'q3']);
      
      const state = useQuizStore.getState();
      expect(state.currentQuestion).toEqual(mockQuestion);
      expect(state.userAnswers).toEqual({ q1: 'a1' });
      expect(state.questionsOrder).toEqual(['q1', 'q2', 'q3']);
      expect(state.correctAnswers).toEqual({
        [mockQuestion.id]: mockQuestion.correctAnswer
      });
    });
  });
}); 