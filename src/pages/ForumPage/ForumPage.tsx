import { PageMeta } from '@components/PageMeta';
import { Forum } from '@features/Forum';
import React from 'react';

export const ForumPage = () => (
  <>
    <PageMeta
      title="Forum"
      description="Talk about the game"
    />
    <Forum />
  </>
);
