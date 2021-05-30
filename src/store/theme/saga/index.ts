import { fork } from 'redux-saga/effects';
import { getSiteThemesListener } from './getSiteThemes';

export function* themeSaga() {
  yield fork(getSiteThemesListener);
}
