import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { oAuth as oAuthAction } from '../store/actions';

export const useOAuthHandler = () => {
  const dispatch = useDispatch();

  const redirectUri = `${window.origin}`;

  const redirectCallback = useCallback((clientId: string) => {
    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  }, [redirectUri]);

  const oAuthHandler = useCallback(() => {
    dispatch(oAuthAction({
      redirectCallback,
      redirectUri,
    }));
  }, [redirectCallback, redirectUri]);

  return oAuthHandler;
};
