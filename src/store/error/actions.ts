import { Action } from '@store/types';
import { ErrorWithCode } from '@libs/ajax';
import { ActionTypes } from './actionTypes';

export const handleError = (payload: ErrorWithCode):
Action<ActionTypes.HANDLE_ERROR, ErrorWithCode> => ({
  type: ActionTypes.HANDLE_ERROR,
  payload,
});
