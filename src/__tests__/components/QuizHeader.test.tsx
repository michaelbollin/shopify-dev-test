import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuizHeader } from '@/components/QuizHeader';

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

  it('renders quiz title', () => {
    render(<QuizHeader {...defaultProps} />);
    expect(screen.getByText('Shopify Free Test')).toBeInTheDocument();
    expect(screen.getByText('Shopify Dev Test')).toBeInTheDocument();
  });

  it('displays correct question number', () => {
    render(<QuizHeader {...defaultProps} />);
    // Question number is displayed twice (mobile and desktop)
    const questionNumbers = screen.getAllByText('Question 2 of 3');
    expect(questionNumbers).toHaveLength(2);
  });

  it('shows navigation buttons', () => {
    render(<QuizHeader {...defaultProps} />);
    expect(screen.getAllByText('← Previous')).toHaveLength(2);
    expect(screen.getAllByText('Next →')).toHaveLength(2);
  });

  it('disables previous button when no previous question', () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null }}
      />
    );
    
    const prevButtons = screen.getAllByRole('link', { name: '← Previous' });
    prevButtons.forEach(button => {
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button.className).toContain('text-gray-300');
      expect(button.className).toContain('cursor-not-allowed');
    });
  });

  it('disables next button when no next question', () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, nextId: null }}
      />
    );
    
    const nextButtons = screen.getAllByRole('link', { name: 'Next →' });
    nextButtons.forEach(button => {
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button.className).toContain('text-gray-300');
      expect(button.className).toContain('cursor-not-allowed');
    });
  });

  it('shows "Finish" button on last question', () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, index: 2, totalQuestions: 3 }}
      />
    );
    
    expect(screen.getAllByText('Finish →')).toHaveLength(2);
  });

  it('displays correct answer count', () => {
    const userAnswers = {
      'q1': 'a1',
      'q2': 'a2',
      'q3': 'a3'
    };
    
    // Create a mock function that returns true for q1 and q3, false for q2
    const isAnswerCorrect = jest.fn((qId, aId) => {
      if (qId === 'q1' && aId === 'a1') return true;
      if (qId === 'q2' && aId === 'a2') return false;
      if (qId === 'q3' && aId === 'a3') return true;
      return false;
    });

    render(
      <QuizHeader
        {...defaultProps}
        userAnswers={userAnswers}
        isAnswerCorrect={isAnswerCorrect}
      />
    );

    // Find all divs containing the correct/wrong counts
    const correctDivs = screen.getAllByText('Correct:', { exact: false });
    const wrongDivs = screen.getAllByText('Wrong:', { exact: false });

    // Verify we have two of each (mobile and desktop)
    expect(correctDivs).toHaveLength(2);
    expect(wrongDivs).toHaveLength(2);

    // Verify the content of each div
    correctDivs.forEach(div => {
      expect(div).toHaveTextContent('Correct: 2');
      expect(div).toHaveClass('text-green-600');
    });

    wrongDivs.forEach(div => {
      expect(div).toHaveTextContent('Wrong: 1');
      expect(div).toHaveClass('text-red-600');
    });
  });

  it('handles reset button click', async () => {
    const handleReset = jest.fn();
    const user = userEvent.setup();

    render(
      <QuizHeader
        {...defaultProps}
        handleReset={handleReset}
      />
    );

    // Reset buttons appear twice (mobile and desktop)
    const resetButtons = screen.getAllByText('Reset');
    await user.click(resetButtons[0]);

    expect(handleReset).toHaveBeenCalled();
  });

  it('handles null question gracefully', () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={null}
      />
    );

    const questionNumbers = screen.getAllByText(/Question 1 of/);
    expect(questionNumbers).toHaveLength(2);
  });

  it('prevents navigation when buttons are disabled', async () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null, nextId: null }}
      />
    );
    
    const prevButtons = screen.getAllByRole('link', { name: '← Previous' });
    const nextButtons = screen.getAllByRole('link', { name: 'Next →' });

    // Create mock events with preventDefault
    const mockEvent1 = new MouseEvent('click', { bubbles: true });
    const mockEvent2 = new MouseEvent('click', { bubbles: true });
    
    Object.defineProperty(mockEvent1, 'preventDefault', { value: jest.fn() });
    Object.defineProperty(mockEvent2, 'preventDefault', { value: jest.fn() });

    // Trigger click events
    prevButtons[0].dispatchEvent(mockEvent1);
    nextButtons[0].dispatchEvent(mockEvent2);

    expect(mockEvent1.preventDefault).toHaveBeenCalled();
    expect(mockEvent2.preventDefault).toHaveBeenCalled();
  });

  it('handles first question index correctly', () => {
    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, index: 0 }}
      />
    );
    
    const questionNumbers = screen.getAllByText('Question 1 of 3');
    expect(questionNumbers).toHaveLength(2);
  });

  it('handles empty user answers', () => {
    render(
      <QuizHeader
        {...defaultProps}
        userAnswers={{}}
      />
    );

    const correctDivs = screen.getAllByText('Correct: 0');
    const wrongDivs = screen.getAllByText('Wrong: 0');

    expect(correctDivs).toHaveLength(2);
    expect(wrongDivs).toHaveLength(2);
  });

  it('prevents navigation on disabled previous button click', async () => {
    const user = userEvent.setup();

    render(
      <QuizHeader
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null }}
      />
    );

    const prevButtons = screen.getAllByRole('link', { name: '← Previous' });
    
    // Create a mock event with preventDefault
    const mockEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    Object.defineProperty(mockEvent, 'preventDefault', { value: jest.fn() });

    // Trigger the click event
    prevButtons[0].dispatchEvent(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
}); 