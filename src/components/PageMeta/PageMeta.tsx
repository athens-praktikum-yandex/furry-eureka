import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { OwnProps } from './types';
import { prepareData } from './libs';

type Props = FC<OwnProps>;

export const PageMeta: Props = (props) => {
  const { title = 'Furry Eureka', description } = prepareData(props);

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      {!!description && (
        <meta name="description" content={description} />
      )}

      {!!description && (
        <meta property="og:description" content={description} />
      )}

      {!!description && (
        <meta property="twitter:description" content={description} />
      )}
    </Helmet>
  );
};
