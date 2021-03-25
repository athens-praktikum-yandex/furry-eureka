import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import '../src/assets/styles/main.css';
import '../www/assets/fontello/css/fontello.css';

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
