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
import { PersistGate } from 'redux-persist/integration/react';

export const { store, persistor } = configureStore();

export const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Routes />
          <ToastContainer />
        </ConnectedRouter>
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
