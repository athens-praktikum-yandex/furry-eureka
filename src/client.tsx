import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { App } from '@components/App/App';
import { State } from '@store/types';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { history } from '@libs/history';
import { configureStore } from '@store/configureStore';
import { registerServiceWorker } from './serviceWorker';
import '@assets/styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

declare global {
  interface Window {
    __INITIAL_STATE__: State;
  }
}

const initialState = window.__INITIAL_STATE__;
const { store } = configureStore(initialState);

ReactDOM.hydrate(
  <Provider store={store}>
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
