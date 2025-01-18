import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuizFinish } from '@/components/QuizFinish';
import { useQuizStore } from '@/store/quizStore';
import { useRouter } from 'next/navigation';

// Mock the store and router
jest.mock('@/store/quizStore', () => ({
  useQuizStore: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

describe('QuizFinish', () => {
  const mockRouter = {
    push: jest.fn()
  };

  const mockStore = {
    userAnswers: {
      'q1': 'a1',
      'q2': 'a2',
      'q3': 'a3'
    },
    isAnswerCorrect: jest.fn(),
    clearAnswers: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (useQuizStore as unknown as jest.Mock).mockReturnValue(mockStore);
  });

  it('renders congratulations message', () => {
    render(<QuizFinish />);
    expect(screen.getByText('🎉 Congratulations!')).toBeInTheDocument();
    expect(screen.getByText("You've completed the Shopify Development Quiz")).toBeInTheDocument();
  });

  it('calculates and displays score correctly', () => {
    mockStore.isAnswerCorrect
      .mockReturnValueOnce(true)   // q1 correct
      .mockReturnValueOnce(false)  // q2 incorrect
      .mockReturnValueOnce(true);  // q3 correct

    render(<QuizFinish />);
    
    expect(screen.getByText('67%')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('out of 3')).toBeInTheDocument();
  });

  it('handles start over action', async () => {
    const user = userEvent.setup();
    render(<QuizFinish />);
    
    await user.click(screen.getByText('Start Over'));
    
    expect(mockStore.clearAnswers).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });

  it('displays buy me a coffee button', () => {
    // Mock document.querySelector
    const mockClick = jest.fn();
    const mockElement = { click: mockClick };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<QuizFinish />);
    
    const buyButton = screen.getByText('☕ Buy Me a Coffee');
    expect(buyButton).toBeInTheDocument();
  });

  it('handles buy me a coffee click', async () => {
    const user = userEvent.setup();
    const mockClick = jest.fn();
    const mockElement = { click: mockClick };
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<QuizFinish />);
    
    await user.click(screen.getByText('☕ Buy Me a Coffee'));
    expect(mockClick).toHaveBeenCalled();
  });

  it('shows different score colors based on performance', () => {
    // Test high score (≥70%)
    mockStore.isAnswerCorrect
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    const { rerender } = render(<QuizFinish />);
    expect(screen.getByText('67%')).toHaveClass('text-orange-600');

    // Test low score (<70%)
    mockStore.isAnswerCorrect
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true);
    
    rerender(<QuizFinish />);
    expect(screen.getByText('100%')).toHaveClass('text-green-600');
  });
}); 