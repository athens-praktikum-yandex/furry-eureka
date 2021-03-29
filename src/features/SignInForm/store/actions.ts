import { SignInPayload } from '../types/store';
import { actionTypes } from './actionTypes';

export const signIn = (payload: SignInPayload) => ({
  type: actionTypes.SIGN_IN,
  payload,
});
