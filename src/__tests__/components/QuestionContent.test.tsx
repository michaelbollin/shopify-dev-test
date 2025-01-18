import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionContent } from '@/components/QuestionContent';

const mockQuestion = {
  id: 'test-question',
  title: 'Test Question Title',
  content: 'Test explanation content',
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

describe('QuestionContent', () => {
  const mockSubmitAnswer = jest.fn();
  const mockIsAnswerCorrect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the question and answers', () => {
    render(
      <QuestionContent
        currentQuestion={mockQuestion}
        userAnswers={{}}
        isAnswerCorrect={mockIsAnswerCorrect}
        submitAnswer={mockSubmitAnswer}
      />
    );

    expect(screen.getByText('Test Question Title')).toBeInTheDocument();
    expect(screen.getByText('Answer A')).toBeInTheDocument();
    expect(screen.getByText('Answer B')).toBeInTheDocument();
  });

  it('handles answer submission', async () => {
    const user = userEvent.setup();
    render(
      <QuestionContent
        currentQuestion={mockQuestion}
        userAnswers={{}}
        isAnswerCorrect={mockIsAnswerCorrect}
        submitAnswer={mockSubmitAnswer}
      />
    );

    const answerButton = screen.getByText('Answer A');
    await user.click(answerButton);

    expect(mockSubmitAnswer).toHaveBeenCalledWith('test-question', 'a');
  });

  it('shows correct feedback when answer is correct', () => {
    mockIsAnswerCorrect.mockReturnValue(true);
    
    render(
      <QuestionContent
        currentQuestion={mockQuestion}
        userAnswers={{ 'test-question': 'a' }}
        isAnswerCorrect={mockIsAnswerCorrect}
        submitAnswer={mockSubmitAnswer}
      />
    );

    expect(screen.getByText('✓ Correct!')).toBeInTheDocument();
    expect(screen.getByText('Test explanation content')).toBeInTheDocument();
  });

  it('shows incorrect feedback when answer is wrong', () => {
    mockIsAnswerCorrect.mockReturnValue(false);
    
    render(
      <QuestionContent
        currentQuestion={mockQuestion}
        userAnswers={{ 'test-question': 'b' }}
        isAnswerCorrect={mockIsAnswerCorrect}
        submitAnswer={mockSubmitAnswer}
      />
    );

    expect(screen.getByText('✗ Incorrect')).toBeInTheDocument();
    expect(screen.getByText('Test explanation content')).toBeInTheDocument();
  });

  it('disables answers after selection', () => {
    render(
      <QuestionContent
        currentQuestion={mockQuestion}
        userAnswers={{ 'test-question': 'a' }}
        isAnswerCorrect={mockIsAnswerCorrect}
        submitAnswer={mockSubmitAnswer}
      />
    );

    const answerButtons = screen.getAllByRole('button');
    answerButtons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });
}); 