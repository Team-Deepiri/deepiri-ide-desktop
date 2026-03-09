import React from 'react';
import { Section } from '../../components/layout';

export default function SettingsSection({ id, title, hint, children }) {
  return (
    <Section id={id} title={title} className="settings-section">
      {hint && <p className="settings-hint">{hint}</p>}
      {children}
    </Section>
  );
}
