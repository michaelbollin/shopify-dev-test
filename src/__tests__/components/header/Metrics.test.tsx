import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Metrics } from '@/components/header/Metrics';

describe('Metrics', () => {
  const defaultProps = {
    correctCount: 2,
    wrongCount: 1,
    onReset: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays correct and wrong counts', () => {
    render(<Metrics {...defaultProps} />);
    
    const correctSpan = screen.getByTitle('Correct answers');
    const wrongSpan = screen.getByTitle('Wrong answers');
    
    expect(correctSpan).toHaveTextContent('2');
    expect(wrongSpan).toHaveTextContent('1');
  });

  it('handles zero counts', () => {
    render(<Metrics correctCount={0} wrongCount={0} onReset={jest.fn()} />);
    
    const correctSpan = screen.getByTitle('Correct answers');
    const wrongSpan = screen.getByTitle('Wrong answers');
    
    expect(correctSpan).toHaveTextContent('0');
    expect(wrongSpan).toHaveTextContent('0');
  });

  it('handles reset button click', async () => {
    const onReset = jest.fn();
    const user = userEvent.setup();

    render(<Metrics {...defaultProps} onReset={onReset} />);

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    await user.click(resetButton);

    expect(onReset).toHaveBeenCalled();
  });
}); 