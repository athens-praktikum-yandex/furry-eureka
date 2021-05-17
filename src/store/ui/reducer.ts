import { ActionTypes as SignUpActionTypes } from '@features/SignUpForm/store/actionTypes';
import { ActionTypes as UserProfileActionTypes } from '@features/UserProfileForm/store/actionTypes';
import { ActionTypes as LeaderboardActionTypes } from '@features/leaderboard/store/actionTypes';
import { RequestStatus, UIActions, UIState } from './types';

export const initialState: UIState = {
  [SignUpActionTypes.SIGN_UP]: RequestStatus.INIT,
  [UserProfileActionTypes.GET_USER_PROFILE]: RequestStatus.INIT,
  [UserProfileActionTypes.CHANGE_USER_PROFILE]: RequestStatus.INIT,
  [UserProfileActionTypes.CHANGE_PASSWORD]: RequestStatus.INIT,
  [LeaderboardActionTypes.GET_LEADERBOARD]: RequestStatus.INIT,
  [LeaderboardActionTypes.CHANGE_LEADERBOARD]: RequestStatus.INIT,
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
