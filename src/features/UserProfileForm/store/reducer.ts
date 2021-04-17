import createReducer from '@store/createReducer';
import type { InitialState } from '../types';
import { ACTIONS } from './handlers';

const initialState: InitialState = {
  id: 0,
  avatar: '',
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
};
export default createReducer(initialState, ACTIONS);
