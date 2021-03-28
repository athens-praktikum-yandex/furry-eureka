import {
  error, request, reset, success,
} from './actions';

export enum RequestStatus {
  INIT = 'INIT',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RESET = 'RESET',
}

export type Request = ReturnType<typeof request>;
export type Success = ReturnType<typeof success>;
export type Error = ReturnType<typeof error>;
export type Reset = ReturnType<typeof reset>;
export type UIActions = Request | Success | Error | Reset;

export type UIState = Record<string, RequestStatus>;
