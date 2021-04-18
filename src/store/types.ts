import { UIState } from './ui/types';

export type State = {
  ui: UIState,
};

export type Action<T = string, P = unknown> = {
  type: T,
  payload: P,
};
