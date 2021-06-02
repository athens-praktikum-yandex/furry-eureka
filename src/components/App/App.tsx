import React from 'react';
import { Routes } from '@components/Routes';
import { ToastContainer } from 'react-toastify';
import { useUserTheme } from 'hooks';

export const App = () => {
  const userTheme = useUserTheme();

  return (
    <div className={userTheme?.theme}>
      <Routes />
      <ToastContainer />
    </div>
  );
};
