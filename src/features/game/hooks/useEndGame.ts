import { useEffect } from 'react';
import { EventBus } from '@libs/event-bus';
import { useDispatch } from 'react-redux';
import { changeLeaderboard } from '@features/leaderboard/store/actions';
import { changeLeaderboardAC } from '@features/leaderboard/store/actionCreators';
import { navTo } from '@components/Routes/libs/redirect';
import { Routes } from '@components/Routes/types';
import { EVENTS } from '@constants/events';

export const useEndGame = () => {
  const navToLeaderboard = () => { navTo(Routes.LEADERBOARD); };
  const dispatch = useDispatch();

  useEffect(() => {
    const eventBus = new EventBus();

    const callback = (score: number) => {
      dispatch(changeLeaderboard(changeLeaderboardAC(score, navToLeaderboard)));
    };

    eventBus.on(EVENTS.END_GAME, callback);

    return () => {
      eventBus.off(EVENTS.END_GAME, callback);
    };
  }, []);
};
