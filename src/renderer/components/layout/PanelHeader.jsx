import React from 'react';
import { cn } from '../../utils/cn';

export default function PanelHeader({ title, children, className }) {
  return (
    <div className={cn('layout-panel-header', className)}>
      <span className="layout-panel-title">{title}</span>
      {children}
    </div>
  );
}
