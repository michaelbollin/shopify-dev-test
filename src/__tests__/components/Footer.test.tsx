import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders copyright notice and links', () => {
    render(<Footer />);
    
    // Check for copyright text
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument();
    
    // Check for author link
    const authorLink = screen.getByText('Michael Bollin');
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute('href', 'https://michaelbollin.com');
    expect(authorLink).toHaveAttribute('target', '_blank');
    expect(authorLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check for email link
    const emailLink = screen.getByText('michael@dcny.co');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:michael@dcny.co');
  });

  it('has correct styling', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer.className).toContain('py-8');
    expect(footer.className).toContain('mt-auto');
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link.className).toContain('text-blue-600');
      expect(link.className).toContain('hover:text-blue-800');
      expect(link.className).toContain('underline');
    });
  });
}); 