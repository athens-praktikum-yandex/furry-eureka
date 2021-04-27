import React from 'react';
import { hydrate } from 'react-dom';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';

import Core from '../pages/core';

import { Props } from './types';

const Bundle: Props = ({ data }) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Helmet>

    <Core {...data} />
  </>
);

export const DesktopBundle = hot(Bundle);

export default (data: Record<string, unknown>) => {
  hydrate(
    <DesktopBundle data={data} />,
    document.getElementById('root'),
  );
};
