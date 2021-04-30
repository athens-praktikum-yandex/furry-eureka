import { history } from '@libs/history';
import { routes } from '@components/Routes/constants';

export const navTo = (path: string) => {
  history.push(routes[path]);
};
