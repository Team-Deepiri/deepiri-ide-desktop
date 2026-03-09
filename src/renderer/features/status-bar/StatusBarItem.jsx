import React from 'react';
import { cn } from '../../utils/cn';

export default function StatusBarItem({ children, onClick, title, active, className }) {
  const Comp = onClick ? 'span' : 'span';
  return (
    <Comp
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn('status-item', onClick && 'status-clickable', active && 'active', className)}
      title={title}
      onClick={onClick}
    >
      {children}
    </Comp>
  );
}
