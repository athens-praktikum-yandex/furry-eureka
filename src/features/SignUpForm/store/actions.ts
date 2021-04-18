import { SignUpPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const signUp = (payload: SignUpPayload) => ({
  type: ActionTypes.SIGN_UP,
  payload,
});
