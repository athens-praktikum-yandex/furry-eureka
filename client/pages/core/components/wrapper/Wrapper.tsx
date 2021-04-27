import React from 'react';
import { Helmet } from 'react-helmet';

import Hello from '../../../hello';

const Wrapper = () => (
  <>
    <Helmet>
      <title>Hello</title>
      <meta name="title" content="ssr" />
    </Helmet>

    <Hello />
  </>
);
export default Wrapper;
