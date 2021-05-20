import { PageMeta } from '@components/PageMeta';
import React from 'react';
import { Leaderboard } from '../../features/leaderboard';

export const LeaderboardPage = () => (
  <>
    <PageMeta
      title="Leaderboard"
      description="Let's see the amount of points"
    />
    <Leaderboard />
  </>
);
