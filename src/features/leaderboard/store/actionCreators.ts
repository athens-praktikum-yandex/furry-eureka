export const changeLeaderboardAC = (
  username: string,
  score: number,
  navToLeaderboard: () => void,
) => {
  const FIELD_NAME = 'athens_time';
  return {
    ratingFieldName: FIELD_NAME,
    data: {
      username,
      [FIELD_NAME]: score,
    },
    navToLeaderboard,
  };
};
