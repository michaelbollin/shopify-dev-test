import { render, screen } from '@testing-library/react';
import { Navigation } from '@/components/header/Navigation';

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

describe('Navigation', () => {
  const defaultProps = {
    currentQuestion: mockQuestion,
    userAnswers: {},
    onDisabledClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows navigation buttons', () => {
    render(<Navigation {...defaultProps} />);
    expect(screen.getByText('← Previous')).toBeInTheDocument();
    expect(screen.getByText('Next →')).toBeInTheDocument();
  });

  it('shows question counter', () => {
    render(<Navigation {...defaultProps} />);
    expect(screen.getByText('Question 2 of 3')).toBeInTheDocument();
  });

  it('disables previous button when no previous question', () => {
    render(
      <Navigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, previousId: null }}
      />
    );
    
    const prevButton = screen.getByRole('link', { name: '← Previous' });
    expect(prevButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('disables next button when no next question', () => {
    render(
      <Navigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, nextId: null }}
      />
    );
    
    const finishButton = screen.getByRole('link', { name: 'Finish →' });
    expect(finishButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('shows "Finish" button on last question', () => {
    render(
      <Navigation
        {...defaultProps}
        currentQuestion={{ ...mockQuestion, nextId: null }}
      />
    );
    
    expect(screen.getByText('Finish →')).toBeInTheDocument();
  });

  it('handles null question gracefully', () => {
    render(
      <Navigation
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
      <Navigation
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