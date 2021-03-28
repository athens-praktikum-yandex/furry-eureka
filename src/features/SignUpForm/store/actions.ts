import { SignUpPayload } from '../types/store';
import { actionTypes } from './actionTypes';

export const signUp = (payload: SignUpPayload) => ({
  type: actionTypes.SIGN_UP,
  payload,
});
