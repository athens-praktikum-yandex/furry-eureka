import { ForumUser } from '@features/Forum';
import { State } from '@store/types';
import { useSelector } from 'react-redux';
import themeSelector from '@store/theme/selectors';
import { forumSelectors } from '@features/Forum/store/selectors';
import { userProfileSelector } from '@features/UserProfileForm/store/selectors';
import { useOwnerId } from '@features/Forum/hooks';

export const useUserTheme = () => {
  const users = useSelector<State, ForumUser[]>(forumSelectors.getUsers);
  const login = useSelector<State, string>(userProfileSelector.getLogin);
  const ownerId = useOwnerId(users, login);

  const userThemes = useSelector(themeSelector.getUserThemes);
  const siteThemes = useSelector(themeSelector.getSiteThemes);

  const userTheme = userThemes.find((item) => item.ownerId === ownerId);
  const extendedUserTheme = siteThemes.find((item) => item.id === userTheme?.themeId);
  if (extendedUserTheme && userTheme) {
    userTheme.theme = extendedUserTheme.theme;
  }

  return userTheme;
};
