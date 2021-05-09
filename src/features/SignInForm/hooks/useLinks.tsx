import { useMemo } from 'react';
import { FormLinkProps, FormLinkType } from '@components/Form';
import { useOAuthHandler } from './useOAuthHandler';

export const useLinks = () => {
  const oAuthHandler = useOAuthHandler();

  const links = useMemo<FormLinkProps[]>(() => [
    {
      type: FormLinkType.BUTTON,
      onClick: () => {
        oAuthHandler();
      },
      value: 'Войти через Яндекс',
    },
    {
      type: FormLinkType.LINK,
      to: '/sign-up',
      value: 'Регистрация',
    },

  ], [oAuthHandler]);

  return links;
};
