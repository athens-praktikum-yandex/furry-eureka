import React from 'react';

import ErrorBoundary from '../../../../components/error-boundry';

import Wrapper from '../wrapper';
import { Props } from './types';

const { PROD } = process.env;

const Page: Props = () => (PROD
  ? (
    <ErrorBoundary>
      <Wrapper />
    </ErrorBoundary>
  )
  : <Wrapper />);
export default Page;
