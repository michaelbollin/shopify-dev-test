import Link from 'next/link';
import type { NavigationButtonProps } from '@/types/quiz';

export function NavigationButton({ href, disabled, onClick, children, className = '' }: NavigationButtonProps) {
  return (
    <Link
      href={href}
      prefetch={true}
      className={`btn btn-outline border-2 min-w-[120px] ${disabled ? 'disabled' : ''} ${className}`}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 