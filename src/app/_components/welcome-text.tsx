'use client';

import { useState, useEffect } from 'react';

export function WelcomeText() {
  const typingText = 'Seja Bem-Vindo';
  const staticText = 'ao GrafosMap';
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length < typingText.length) {
      const timeout = setTimeout(() => {
        setText(typingText.slice(0, text.length + 1));
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <div className="text-center select-none">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline mb-2">
        <span className="text-primary">{text}</span>
        {text.length < typingText.length && (
          <span className="animate-pulse text-primary opacity-75">|</span>
        )}
      </h1>
      <p className="text-3xl sm:text-4xl md:text-5xl font-headline text-foreground/90">
        {staticText}
      </p>
    </div>
  );
}
