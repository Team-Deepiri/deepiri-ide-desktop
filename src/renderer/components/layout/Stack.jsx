import React from 'react';
import { cn } from '../../utils/cn';

export default function Stack({ gap = 2, direction = 'column', children, className }) {
  return (
    <div
      className={cn('layout-stack', className)}
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: `var(--space-${gap})`
      }}
    >
      {children}
    </div>
  );
}
