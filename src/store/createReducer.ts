import type { Reducer } from 'redux';
import type { Action } from './types';

const createReducer = <State, ActionsTypes, Actions extends Action<keyof ActionsTypes>>(
  initialState: State,
  handlers: Record<keyof ActionsTypes, Reducer<State, Actions>>,
) => (state = initialState, action: Actions) => (
    Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state
  );

export default createReducer;
