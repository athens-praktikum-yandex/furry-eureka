import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Input } from './Input';

storiesOf('UI', module).add('Input', () => {
  const value = text('value', '');
  const error = text('error', '');
  const label = text('label', '');

  return (
    <div style={{
      background: 'var(--color-secondary)',
      padding: 40,
    }}
    >
      <Input name="input" value={value} error={error} label={label} />
    </div>
  );
});
