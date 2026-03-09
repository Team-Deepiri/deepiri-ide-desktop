import React from 'react';
import { cn } from '../../utils/cn';

export default function SearchResultItem({ result, active, onClick }) {
  const { name, line, text } = result;
  return (
    <div
      role="button"
      tabIndex={0}
      className={cn('search-result-item', active && 'active')}
      onClick={() => onClick?.(result)}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(result)}
    >
      <span className="result-file">{name}:{line}</span>
      <span className="result-preview">{text}</span>
    </div>
  );
}
