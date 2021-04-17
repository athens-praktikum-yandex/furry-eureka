import React from 'react';
import { Button } from '@components/Button';
import { history } from '@libs/history';
import './MainPage.css';

export const MainPage = () => (
  <div className="main-page">
    <Button
      value="Начать игру"
      onClick={() => history.push('/game')}
    />
  </div>
);
