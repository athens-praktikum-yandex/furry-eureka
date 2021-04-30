import React from 'react';
import { Button } from '@components/Button';
import './MainPage.css';
import { getUserProfile } from '@features/UserProfileForm/store/actions';
import { useDispatch } from 'react-redux';
import { navTo } from '@components/Routes/libs/redirect';

export const MainPage = () => {
  const dispatch = useDispatch();
  dispatch(getUserProfile());

  return (
    <div className="main-page">
      <Button
        value="Начать игру"
        onClick={() => { navTo('game'); }}
      />
    </div>
  );
};
