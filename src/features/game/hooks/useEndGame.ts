import { useEffect } from 'react';
import { EventBus } from '@libs/event-bus';
import { useDispatch, useSelector } from 'react-redux';
import { changeLeaderboard } from '@features/leaderboard/store/actions';
import { UserProfileState } from '@features/UserProfileForm';
import { changeLeaderboardAC } from '@features/leaderboard/store/actionCreators';

export const useEndGame = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: UserProfileState) => state.userProfile.login);
  useEffect(() => {
    const eventBus = new EventBus();
    const callback = (score: number) => {
      dispatch(changeLeaderboard(changeLeaderboardAC(username, score)));
    };
    eventBus.on('end-game', callback);
    return () => {
      eventBus.off('end-game', callback);
    };
  }, []);
};
