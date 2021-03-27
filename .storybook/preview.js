import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import '../src/assets/styles/main.css';
import '../www/assets/fontello/css/fontello.css';

addDecorator((storyFn) => (
  <MemoryRouter initialEntries={['/']}>
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {storyFn()}
    </div>
  </MemoryRouter>
));

addDecorator(jsxDecorator);


