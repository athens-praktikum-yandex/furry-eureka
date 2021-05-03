import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer as reducers } from './rootReducer';
import { rootSaga } from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth', 'userProfile'],
};

const pReducer = persistReducer(persistConfig, combineReducers(reducers));

export const configureStore = (initialState: { [key: string]: never } = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || window.__REDUX_DEVTOOLS_EXTENSION__
    || compose;

  const store = createStore(
    pReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
