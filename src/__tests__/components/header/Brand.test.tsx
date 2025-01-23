import { render, screen } from '@testing-library/react';
import { Brand } from '@/components/header/Brand';

describe('Brand', () => {
  it('renders brand link with correct href', () => {
    render(<Brand />);
    const link = screen.getByRole('link', { name: 'Shopify Free Test' });
    expect(link).toHaveAttribute('href', '/');
  });
}); 