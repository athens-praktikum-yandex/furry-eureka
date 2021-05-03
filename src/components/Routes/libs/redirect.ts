import { history } from '@libs/history';
import { routes } from '@components/Routes/constants';
import { Routes } from '@components/Routes/types';

export const navTo = (path: Routes) => {
  history.push(routes[path]);
};
