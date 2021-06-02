import themeSelector from '@store/theme/selectors';
import uiSelector from '@store/ui/selectors';
import { putUserTheme } from '@store/theme/actions';
import { ActionTypes } from '@store/theme/actionTypes';
import { RequestStatus } from '@store/ui/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { useUserTheme } from 'hooks';

export const useTheme = (ownerId: number) => {
  const dispatch = useDispatch();

  const themes = useSelector(themeSelector.getSiteThemes);
  const userThemeStatus = useSelector(uiSelector.getProp(ActionTypes.GET_USER_THEMES));
  const userTheme = useUserTheme();
  const [themeName, setThemeName] = useState<string>('');

  useEffect(() => {
    const siteTheme = themes.find((item) => item.theme === themeName);

    if (siteTheme && themeName !== userTheme?.theme && userThemeStatus === RequestStatus.SUCCESS) {
      dispatch(putUserTheme({
        id: userTheme?.id || 0,
        themeId: siteTheme.id,
        ownerId,
        theme: themeName,
      }));
    }
  }, [themeName, userTheme, themes, ownerId, userThemeStatus]);

  useEffect(() => {
    if (userThemeStatus === RequestStatus.SUCCESS) {
      setThemeName(userTheme?.theme || 'dark');
    }
  }, [userTheme, userThemeStatus]);

  const themeHandleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setThemeName(e.target.name);
  }, []);

  return {
    themeName,
    themes,
    themeHandleChange,
  };
};
