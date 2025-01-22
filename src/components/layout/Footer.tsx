import React from 'react';

export function Footer() {
  return (
    <footer className="p-8 mt-auto text-center">
      <div className="inline-flex gap-1 flex-wrap justify-center text-base-content">
        Copyright © 
        <a className="link" href="https://bollin.dev" target="_blank" rel="noopener noreferrer">
          Michael Bollin
        </a>. 
        Found some mistake?
        <a 
          href="mailto:michael@dcny.co"
          className="link"
        >
          michael@dcny.co
        </a>
      </div>
    </footer>
  );
} 