import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { TopicItem } from './TopicItem';

storiesOf('Forum', module).add('TopicItem', () => {
  const name = text('name', 'Topic theme');
  const isSelected = boolean('isSelected', false);

  return (
    <div
      style={{
        background: 'var(--color-secondary)',
        padding: 40,
        width: 300,
      }}
    >
      <TopicItem
        name={name}
        isSelected={isSelected}
      />
    </div>
  );
});
