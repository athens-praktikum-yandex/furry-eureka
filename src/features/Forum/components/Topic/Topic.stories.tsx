import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Topic } from './Topic';

storiesOf('Forum', module).add('Topic', () => {
  const title = text('title', 'Topic theme');
  const time = text('time', '10:00');
  const textValue = text('text', 'Last message in topic');
  const isSelected = boolean('isSelected', false);

  return (
    <div
      style={{
        background: 'var(--color-secondary)',
        padding: 40,
        width: 300,
      }}
    >
      <Topic
        title={title}
        time={time}
        text={textValue}
        isSelected={isSelected}
      />
    </div>
  );
});
