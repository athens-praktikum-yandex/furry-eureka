import React, { MouseEventHandler } from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Form } from './Form';
import { FormLinkProps, FormLinkType } from './types';

storiesOf('UI', module).add('Form', () => {
  const title = text('title', 'Form');
  const submitText = text('submitText', 'Submit');

  const initialLinks: FormLinkProps[] = [{
    type: FormLinkType.LINK,
    value: 'Link',
    to: '#',
  }];
  const links = object('link', initialLinks);

  const onSubmit: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    action('clicked')(event);
  };

  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      submitText={submitText}
      links={links}
    />
  );
});
