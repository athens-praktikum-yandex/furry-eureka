export const changeLeaderboardAC = (
  score: number,
  navToLeaderboard: () => void,
) => {
  const FIELD_NAME = 'athens_time';
  return {
    ratingFieldName: FIELD_NAME,
    data: {
      [FIELD_NAME]: score,
    },
    navToLeaderboard,
  };
};
