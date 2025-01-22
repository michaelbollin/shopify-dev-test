import { render, screen } from '@testing-library/react';
import { MobileNavigation } from '@/components/header/MobileNavigation';

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

describe('MobileNavigation', () => {
  const defaultProps = {
    currentQuestion: mockQuestion,
    userAnswers: {},
    onDisabledClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows navigation buttons', () => {
    render(<MobileNavigation {...defaultProps} />);
    expect(screen.getByText('← Previous')).toBeInTheDocument();
    expect(screen.getByText('Next →')).toBeInTheDocument();
  });

  it('disables previous button when no previous question', () => {
    render(
      <MobileNavigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null }}
      />
    );
    
    const prevButton = screen.getByRole('link', { name: '← Previous' });
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('disables next button when no next question', () => {
    render(
      <MobileNavigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, nextId: null }}
      />
    );
    
    const finishButton = screen.getByRole('link', { name: 'Finish →' });
    expect(finishButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('shows "Finish" button on last question', () => {
    render(
      <MobileNavigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, nextId: null }}
      />
    );
    
    expect(screen.getByText('Finish →')).toBeInTheDocument();
  });

  it('handles null question gracefully', () => {
    render(
      <MobileNavigation
        {...defaultProps}
        currentQuestion={null}
      />
    );

    const prevButton = screen.getByRole('link', { name: '← Previous' });
    const finishButton = screen.getByRole('link', { name: 'Finish →' });
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
    expect(finishButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('prevents navigation when buttons are disabled', () => {
    const onDisabledClick = jest.fn();
    render(
      <MobileNavigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null, nextId: null }}
        onDisabledClick={onDisabledClick}
      />
    );
    
    const prevButton = screen.getByRole('link', { name: '← Previous' });
    const finishButton = screen.getByRole('link', { name: 'Finish →' });

    // Create mock events with preventDefault
    const mockEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(mockEvent, 'preventDefault', { value: jest.fn() });

    // Trigger click events
    prevButton.dispatchEvent(mockEvent);
    finishButton.dispatchEvent(mockEvent);

    expect(onDisabledClick).toHaveBeenCalledTimes(2);
  });
}); 