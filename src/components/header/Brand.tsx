import Link from 'next/link';

export function Brand() {
  return (
    <div className="navbar-start">
      <Link href="/" className="text-xl font-medium hover:opacity-80 transition-opacity">
        <span className="hidden sm:inline">Shopify</span> Free Test
      </Link>
    </div>
  );
} 