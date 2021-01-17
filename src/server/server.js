import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';
import { ServerStyleSheet } from 'styled-components';
import helmet from 'helmet';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import axios from 'axios';

import Context from '../frontend/Context';
import serverRoutes from '../frontend/routes/serverRoutes';
import GlobalStyle from '../frontend/styles/GlobalStyles';
import Logo from '../frontend/Components/Logo';
import NavBar from '../frontend/Components/NavBar';

require('./utils/auth/strategies/basic');

dotenv.config();

const { ENV, PORT, API_URL } = process.env;

const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;

const app = express();

app.use(express.json());
app.use(cookieParser());

if (ENV === 'development') {
  console.log('Development config');

  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
}

const setResponse = (html, styles) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Petgram</title>
                ${styles}
            </head>
            <body>
                <div id="app">${html}</div>
                <script src="assets/app.js" type="text/javascript"></script>
                <script>
                    if ('serviceWorker' in navigator) {
                        window.addEventListener('load', () => {
                            navigator.serviceWorker
                                .register('/service-worker.js')
                                .then((registration) => {
                                    console.log('SW registered');
                                })
                                .catch((rejection) => {
                                    console.log(rejection);
                                });
                        });
                    } else {
                        console.log('no');
                    }
                </script>
            </body>
        </html>
    `;
};

const renderApp = (req, res) => {
  const client = new ApolloClient({
    uri: 'https://petgram-server-cyzd2zjsl.now.sh/graphql',
  });

  const sheet = new ServerStyleSheet();

  const html = renderToString(
    sheet.collectStyles(
      <Context.Provider>
        <ApolloProvider client={client}>
          <StaticRouter location={req.url} context={{}}>
            <Logo />
            <GlobalStyle />
            {renderRoutes(serverRoutes)}
            <NavBar />
          </StaticRouter>
        </ApolloProvider>
      </Context.Provider>,
    ),
  );
  const styles = sheet.getStyleTags();

  res.send(setResponse(html, styles));
};

app.get('*', renderApp);

app.post('/auth/sign-in', async (req, res, next) => {
  const { rememberMe } = req.body;

  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, (error) => {
        if (error) {
          return next(error);
        }

        const { token } = data;

        res.cookie('petgramId', token, {
          httpOnly: ENV === 'production',
          secure: ENV === 'production',
          maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC,
        });

        if (data) {
          res.status(200).json(data);
        } else {
          return next(boom.unauthorized());
        }
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;

  try {
    await axios({
      url: `${API_URL}/api/auth/sign-up`,
      method: 'POST',
      data: user,
    });

    res.status(201).json({ message: 'user created' });
  } catch (error) {
    next(error);
  }
});

app.listen(PORT || 3000, (err) => {
  if (err) console.log(err);
  else console.log(`Server running at http://localhost:${PORT || 3000}`);
});
