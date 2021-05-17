import React from 'react';
import { Game } from '@features/game';
import { PageMeta } from '@components/PageMeta';
import './GamePage.css';

export const GamePage = () => (
  <>
    <PageMeta
      title="Game"
      description="Let's start awesome adventure"
    />
    <div className="game-page">
      <Game />
    </div>
  </>
);
