import React from 'react';
import { cn } from '../../utils/cn';

export default function Section({ id, title, children, className, actions }) {
  return (
    <section id={id} className={cn('layout-section', className)}>
      {(title || actions) && (
        <div className="layout-section-header">
          {title && <h3 className="layout-section-title">{title}</h3>}
          {actions && <div className="layout-section-actions">{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
