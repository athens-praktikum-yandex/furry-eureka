import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Button } from './Button';
import { ButtonTheme } from './types';

storiesOf('Basic', module).add('Button', () => {
  const theme = select('theme', {
    circle: ButtonTheme.circle,
    square: ButtonTheme.square,
    transparent: ButtonTheme.transparent,
  }, ButtonTheme.circle);

  const isIcon = boolean('isIcon', true);

  const content = text('content', 'pencil');

  return <Button theme={theme} content={content} isIcon={isIcon} />;
});
