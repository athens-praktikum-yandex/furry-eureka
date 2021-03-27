import React, { MouseEventHandler } from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Form } from './Form';
import { FormLinkProps } from './types';

storiesOf('UI', module).add('Form', () => {
  const title = text('title', 'Form');
  const submitText = text('submitText', 'Submit');

  const initialLink: FormLinkProps = { value: 'Link', to: '#' };
  const link = object('link', initialLink);

  const onSubmit: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    action('clicked')(event);
  };

  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      submitText={submitText}
      link={link}
    />
  );
});
