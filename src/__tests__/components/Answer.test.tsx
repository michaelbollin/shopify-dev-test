import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Answer } from '@/components/Answer';

describe('Answer', () => {
  const mockAnswer = {
    id: 'a',
    text: 'Test Answer'
  };

  const defaultProps = {
    answer: mockAnswer,
    isSelected: false,
    isCorrect: null,
    onClick: jest.fn(),
    disabled: false,
    correctAnswer: 'a'
  };

  it('renders answer text and ID', () => {
    render(<Answer {...defaultProps} />);
    expect(screen.getByText('A.')).toBeInTheDocument();
    expect(screen.getByText('Test Answer')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Answer {...defaultProps} onClick={onClick} />);
    await user.click(screen.getByRole('button'));
    
    expect(onClick).toHaveBeenCalled();
  });

  it('shows correct styling when selected and correct', () => {
    render(<Answer {...defaultProps} isSelected={true} isCorrect={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-500');
    expect(button).toHaveClass('text-white');
  });

  it('shows correct styling when selected and incorrect', () => {
    render(<Answer {...defaultProps} isSelected={true} isCorrect={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-500');
    expect(button).toHaveClass('text-white');
  });

  it('shows correct styling when selected but not evaluated', () => {
    render(<Answer {...defaultProps} isSelected={true} isCorrect={null} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-500');
    expect(button).toHaveClass('text-white');
  });

  it('is disabled when specified', () => {
    render(<Answer {...defaultProps} disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders code block answers correctly', () => {
    const codeAnswer = {
      id: 'a',
      text: '<div>Test Code</div>'
    };
    
    render(<Answer {...defaultProps} answer={codeAnswer} />);
    const preElement = screen.getByText('<div>Test Code</div>');
    expect(preElement.tagName).toBe('PRE');
    expect(preElement).toHaveClass('font-mono');
  });

  it('renders markdown content correctly', () => {
    const markdownAnswer = {
      id: 'a',
      text: '**Bold** and *italic*'
    };
    
    render(<Answer {...defaultProps} answer={markdownAnswer} />);
    const strongElement = screen.getByText('Bold');
    expect(strongElement.tagName).toBe('STRONG');
    
    const emElement = screen.getByText('italic');
    expect(emElement.tagName).toBe('EM');
  });
}); 