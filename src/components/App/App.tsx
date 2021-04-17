import { Routes } from '@components/Routes';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import '@assets/styles/main.css';
import { Provider } from 'react-redux';
import { configureStore } from '@store/configureStore';
import { ToastContainer } from 'react-toastify';
import { history } from '@libs/history';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from '@components/ErrorBoundary';

export const { store } = configureStore();

export const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <Routes />
        <ToastContainer />
      </ConnectedRouter>
    </ErrorBoundary>
  </Provider>
);
