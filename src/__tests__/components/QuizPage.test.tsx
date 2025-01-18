import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuizPage } from '@/components/QuizPage';
import { useQuizStore } from '@/store/quizStore';

// Mock next/navigation
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

const mockQuestion = {
  id: 'test-question',
  title: 'Test Question',
  content: '# Test content',
  answers: [
    { id: 'a', text: 'Answer A' },
    { id: 'b', text: 'Answer B' },
  ],
  correctAnswer: 'a',
  index: 0,
  totalQuestions: 2,
  nextId: 'next-question',
  previousId: null,
};

// Create a minimal Response-like object that satisfies fetch requirements
const createMockResponse = (options: {
  ok: boolean;
  status: number;
  statusText?: string;
  json: () => Promise<any>;
}): Response => ({
  ok: options.ok,
  status: options.status,
  statusText: options.statusText || '',
  headers: new Headers(),
  redirected: false,
  type: 'basic',
  url: '',
  json: options.json,
  text: () => Promise.resolve(''),
  blob: () => Promise.resolve(new Blob()),
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  formData: () => Promise.resolve(new FormData()),
  bodyUsed: false,
  body: null,
  clone: function() { return this; }
});

describe('QuizPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Reset store state
    const setCurrentQuestion = jest.fn((question) => {
        useQuizStore.setState({ currentQuestion: question });
    });

    useQuizStore.setState({
      currentQuestion: null,
      questionsOrder: [],
      correctAnswers: {},
      userAnswers: {},
      isAnswerCorrect: jest.fn((questionId, answerId) => answerId === 'a'),
      setCurrentQuestion,
      submitAnswer: jest.fn((questionId, answerId) => {
        useQuizStore.setState(state => ({
          ...state,
          userAnswers: { ...state.userAnswers, [questionId]: answerId },
          correctAnswers: { ...state.correctAnswers, [questionId]: answerId }
        }));
      }),
      clearAnswers: jest.fn(),
      setFirstQuestionId: jest.fn(),
      firstQuestionId: null,
    });

    // Mock fetch to return successful response
    global.fetch = jest.fn(() => 
      Promise.resolve(createMockResponse({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockQuestion)
      }))
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the quiz page with a question', async () => {
    render(<QuizPage initialQuestionId="test-question" />);

    // Wait for the fetch to complete and store to update
    await waitFor(() => {
      const store = useQuizStore.getState();
      expect(store.currentQuestion).toEqual(mockQuestion);
    });

    // Now we can check for rendered content
    expect(screen.getByText('Test Question')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith('/api/questions/test-question');
  });

  it('handles answer selection correctly', async () => {
    render(<QuizPage initialQuestionId="test-question" />);

    // Wait for the fetch to complete and store to update
    await waitFor(() => {
      const store = useQuizStore.getState();
      expect(store.currentQuestion).toEqual(mockQuestion);
    });

    // Now we can check for rendered content
    expect(screen.getByText('Test Question')).toBeInTheDocument();

    const answerButton = screen.getByRole('button', { name: 'A. Answer A' });
    await userEvent.click(answerButton);

    expect(answerButton).toHaveClass('bg-green-500');
    expect(answerButton).toHaveClass('text-white');
    expect(answerButton).toBeDisabled();
  });

  it('handles reset with firstQuestionId', async () => {
    useQuizStore.setState({ firstQuestionId: 'first-question' });
    render(<QuizPage initialQuestionId="test-question" />);
    
    const resetButton = screen.getAllByText('Reset')[0];
    await userEvent.click(resetButton);

    const store = useQuizStore.getState();
    expect(store.clearAnswers).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith('/first-question');
  });

  it('handles reset with initialQuestionId when no firstQuestionId', async () => {
    render(<QuizPage initialQuestionId="test-question" />);
    
    const resetButton = screen.getAllByText('Reset')[0];
    await userEvent.click(resetButton);

    const store = useQuizStore.getState();
    expect(store.clearAnswers).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith('/test-question');
  });

  it('handles API error gracefully', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Set initial state with a current question
    useQuizStore.setState({
      currentQuestion: mockQuestion,
      questionsOrder: [],
      correctAnswers: {},
      userAnswers: {},
      isAnswerCorrect: jest.fn((questionId, answerId) => answerId === 'a'),
      setCurrentQuestion: jest.fn(),
      submitAnswer: jest.fn(),
      clearAnswers: jest.fn(),
      setFirstQuestionId: jest.fn(),
      firstQuestionId: null,
    });

    // Then mock the fetch to fail
    global.fetch = jest.fn(() => 
      Promise.resolve(createMockResponse({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        json: () => Promise.resolve({ error: 'Internal Server Error' })
      }))
    );

    render(<QuizPage initialQuestionId="test-question" />);

    await waitFor(() => {
      const store = useQuizStore.getState();
      expect(store.setCurrentQuestion).not.toHaveBeenCalled();
    });

    consoleError.mockRestore();
  });

  it('sets firstQuestionId on initial render if not set', async () => {
    render(<QuizPage initialQuestionId="test-question" />);
    
    await waitFor(() => {
      const store = useQuizStore.getState();
      expect(store.setFirstQuestionId).toHaveBeenCalledWith('test-question');
    });
  });

  it('skips setting firstQuestionId if already set', async () => {
    useQuizStore.setState({ firstQuestionId: 'existing-first-question' });
    render(<QuizPage initialQuestionId="test-question" />);
    
    await waitFor(() => {
      const store = useQuizStore.getState();
      expect(store.setFirstQuestionId).not.toHaveBeenCalled();
    });
  });

  it('handles reset when no target question ID is available', async () => {
    const mockRouter = { push: jest.fn() };
    const clearAnswers = jest.fn();
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue(mockRouter);

    // Mock store with no firstQuestionId
    useQuizStore.setState({
      currentQuestion: null,
      questionsOrder: [],
      correctAnswers: {},
      userAnswers: {},
      isAnswerCorrect: jest.fn(),
      setCurrentQuestion: jest.fn(),
      submitAnswer: jest.fn(),
      clearAnswers,
      setFirstQuestionId: jest.fn(),
      firstQuestionId: null,
    });

    render(<QuizPage initialQuestionId="" />);
    
    const resetButton = screen.getAllByText('Reset')[0];
    await userEvent.click(resetButton);

    expect(clearAnswers).toHaveBeenCalled();
    expect(mockRouter.push).not.toHaveBeenCalled();
  });
}); 