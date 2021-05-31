import { fork } from 'redux-saga/effects';
import { getSiteThemesListener } from './getSiteThemes';
import { getUserThemeListener } from './getUserTheme';
import { putUserThemeListener } from './putUserTheme';

export function* themeSaga() {
  yield fork(getSiteThemesListener);
  yield fork(getUserThemeListener);
  yield fork(putUserThemeListener);
}
