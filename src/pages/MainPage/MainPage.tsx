import React from 'react';
import { Button } from '@components/Button';
import './MainPage.css';
import { navTo } from '@components/Routes/libs/redirect';
import { Routes } from '@components/Routes/types';
import { PageMeta } from '@components/PageMeta';

export const MainPage = () => (
  <>
    <PageMeta
      title="Start Game"
      description="Press start and enjoy!"
    />
    <div className="main-page">
      <Button
        value="Начать игру"
        onClick={() => { navTo(Routes.GAME); }}
      />
    </div>
  </>
);
