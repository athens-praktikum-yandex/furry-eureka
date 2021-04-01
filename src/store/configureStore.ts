import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || window.__REDUX_DEVTOOLS_EXTENSION__
    || compose;

  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
