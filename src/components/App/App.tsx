import { Routes } from '@components/Routes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@assets/styles/main.css';

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
