import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { redirect_uri } from '@constants/redirectUri';
import { oAuthRedirect as oAuthRedirectAction } from '../store/actions';

export const useOAuthHandler = () => {
  const dispatch = useDispatch();

  const redirectCallback = useCallback((clientId: string) => {
    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}`;
  }, [redirect_uri]);

  const oAuthHandler = useCallback(() => {
    dispatch(oAuthRedirectAction({
      redirectCallback,
      redirect_uri,
    }));
  }, [redirectCallback, redirect_uri]);

  return oAuthHandler;
};
