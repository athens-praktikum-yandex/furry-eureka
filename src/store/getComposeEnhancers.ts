import { isServer } from '@libs/isServer';
import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

export const getComposeEnhancers = () => {
  if (process.env.NODE_ENV !== 'production' && !isServer) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return compose;
};
