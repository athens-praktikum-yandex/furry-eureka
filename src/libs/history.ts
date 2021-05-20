import { createBrowserHistory, createMemoryHistory } from 'history';
import { isServer } from './isServer';

export const history = isServer
  ? createMemoryHistory({ initialEntries: ['/'] })
  : createBrowserHistory();
