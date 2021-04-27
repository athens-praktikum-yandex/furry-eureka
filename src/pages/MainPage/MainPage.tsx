import React from 'react';
import { Button } from '@components/Button';
import { history } from '@libs/history';
import './MainPage.css';
import { getUserProfile } from '@features/UserProfileForm/store/actions';
import { useDispatch } from 'react-redux';

export const MainPage = () => {
  const dispatch = useDispatch();
  dispatch(getUserProfile());

  return (
    <div className="main-page">
      <Button
        value="Начать игру"
        onClick={() => history.push('/game')}
      />
    </div>
  );
};
