import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { isServer } from '@libs/isServer';
import { rootReducer as reducers } from './rootReducer';
import { rootSaga } from './rootSaga';
import { AppStore, State } from './types';
import { getComposeEnhancers } from './getComposeEnhancers';

export const configureStore = (initialState: Partial<State> = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancers = getComposeEnhancers()(applyMiddleware(sagaMiddleware));
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  ) as AppStore;

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (!isServer) {
    sagaMiddleware.run(rootSaga);
  }

  return { store };
};
