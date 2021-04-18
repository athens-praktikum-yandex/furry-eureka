import { UIState } from './ui/types';

export type State = {
  ui: UIState,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<T = any, P = any> = {
  type: T,
  payload: P,
};
