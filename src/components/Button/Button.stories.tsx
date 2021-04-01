import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { ButtonTheme } from './types';

storiesOf('UI', module).add('Button', () => {
  const theme = select('theme', {
    circle: ButtonTheme.circle,
    square: ButtonTheme.square,
    transparent: ButtonTheme.transparent,
  }, ButtonTheme.circle);

  const isIcon = boolean('isIcon', true);

  const content = text('content', 'pencil');

  const onClick = action('clicked');

  return <Button onClick={onClick} theme={theme} isIcon={isIcon}>{content}</Button>;
});
