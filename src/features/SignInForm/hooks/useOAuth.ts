import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { redirect_uri } from '@constants/redirectUri';
import { oAuthConfirm as oAuthConfirmAction } from '../store/actions';

export const useOAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { code } = queryString.parse(location?.search || '');

  useEffect(() => {
    if (typeof code === 'string') {
      dispatch(oAuthConfirmAction({
        redirect_uri,
        code,
      }));
    }
  }, [code]);
};
