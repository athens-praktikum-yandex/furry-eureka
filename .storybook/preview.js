import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import '../src/components/App/App.css';

addDecorator((storyFn) => (
  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {storyFn()}
  </div>
));

addDecorator(withKnobs);
addDecorator(jsxDecorator);
