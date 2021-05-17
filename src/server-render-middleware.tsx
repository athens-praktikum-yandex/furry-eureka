import React from 'react';
import Helmet, { HelmetData } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { Provider } from 'react-redux';
import { configureStore } from '@store/configureStore';
import { getInitialState } from '@store/getInitialState';
import { State } from '@store/types';
import { rootSaga } from '@store/rootSaga';
import { routesData } from '@components/Routes/constants/routesData';
import { checkAuth } from '@store/auth/actions';
import { App } from './components/App/App';

function getHtml(reactHtml: string, reduxState: State, helmetData: HelmetData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="assets/fontello/css/fontello.css" rel="stylesheet">
      <link href="main.css" rel="stylesheet">
      ${helmetData.title.toString()}
      ${helmetData.meta.toString()}
    </head>
    <body>
      <div id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script src="main.js"></script>
    </body>
    </html>
  `;
}

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const { cookie } = req.headers;

  const initialState = getInitialState();
  const { store } = configureStore(initialState);

  async function renderApp() {
    const jsx = (
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    res
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState, helmetData));
  }

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => renderApp())
    .catch((err) => { throw err; });

  const route = routesData.find((item) => item.path === location);

  if (route) {
    if (route.fetchData) {
      route.fetchData({ dispatch: store.dispatch, cookie });
    } else {
      store.dispatch(checkAuth(cookie));
    }
  }

  store.close();
};
