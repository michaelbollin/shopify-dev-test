import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <div className="text-center text-gray-600">
        <p>
          Copyright © <a className="text-blue-600 hover:text-blue-800 underline" href="https://michaelbollin.com" target="_blank" rel="noopener noreferrer">Michael Bollin</a>. Found some mistake?{' '}
          <a 
            href="mailto:michael@dcny.co"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            michael@dcny.co
          </a>
        </p>
      </div>
    </footer>
  );
} 