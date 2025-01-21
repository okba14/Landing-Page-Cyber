import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: () => void;
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
}