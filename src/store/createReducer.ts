import type { Reducer } from 'redux';
import type { Action } from '@store/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createReducer = <State, ActionsTypes, Actions extends Action<keyof ActionsTypes, any>>(
  initialState: State,
  handlers: Record<keyof ActionsTypes, Reducer<State, Actions>>,
) => (state = initialState, action: Actions) => (
    Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state
  );

export default createReducer;
