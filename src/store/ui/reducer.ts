import { actionTypes } from '@features/SignUpForm/store/actionTypes';
import { RequestStatus, UIActions, UIState } from './types';

const initialState: UIState = {
  [actionTypes.SIGN_UP]: RequestStatus.INIT,
};

export default (state: UIState = initialState, action: UIActions): UIState => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|ERROR|RESET)/.exec(type);
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  if (!(requestName in state)) {
    return state;
  }

  return {
    ...state,
    [requestName]: requestState === RequestStatus.RESET
      ? RequestStatus.INIT
      : requestState as RequestStatus,
  };
};
