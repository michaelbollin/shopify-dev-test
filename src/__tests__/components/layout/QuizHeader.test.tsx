import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuizHeader } from '@/components/layout/Header';

const mockQuestion = {
  id: 'test-question',
  title: 'Test Question',
  content: 'Test content',
  answers: [],
  correctAnswer: 'a',
  index: 1,
  totalQuestions: 3,
  previousId: 'prev-question',
  nextId: 'next-question'
};

describe('QuizHeader', () => {
  const defaultProps = {
    currentQuestion: mockQuestion,
    userAnswers: {},
    isAnswerCorrect: jest.fn(),
    handleReset: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all components correctly', () => {
    render(<QuizHeader {...defaultProps} />);
    
    // Brand
    expect(screen.getByRole('link', { name: 'Shopify Free Test' })).toBeInTheDocument();
    
    // Navigation (desktop)
    expect(screen.getByText('Question 2 of 3')).toBeInTheDocument();
    
    // Metrics
    expect(screen.getByTitle('Correct answers')).toBeInTheDocument();
    expect(screen.getByTitle('Wrong answers')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('calculates and displays correct metrics', () => {
    const userAnswers = {
      'q1': 'a1',
      'q2': 'a2'
    };
    
    const isAnswerCorrect = jest.fn()
      .mockReturnValueOnce(true)   // q1 correct
      .mockReturnValueOnce(false); // q2 wrong

    render(
      <QuizHeader
        {...defaultProps}
        userAnswers={userAnswers}
        isAnswerCorrect={isAnswerCorrect}
      />
    );

    const correctSpan = screen.getByTitle('Correct answers');
    const wrongSpan = screen.getByTitle('Wrong answers');

    expect(correctSpan).toHaveTextContent('1');
    expect(wrongSpan).toHaveTextContent('1');
  });

  it('handles reset functionality', async () => {
    const handleReset = jest.fn();
    const user = userEvent.setup();

    render(
      <QuizHeader
        {...defaultProps}
        handleReset={handleReset}
      />
    );

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    await user.click(resetButton);

    expect(handleReset).toHaveBeenCalled();
  });

  it('shows mobile navigation on small screens', () => {
    render(<QuizHeader {...defaultProps} />);
    
    const mobileNav = screen.getByTestId('mobile-navigation');
    expect(mobileNav).toHaveClass('fixed bottom-0 left-0 right-0 lg:hidden');
  });
}); 