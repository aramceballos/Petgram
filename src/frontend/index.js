import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import App from './routes/App';
import Context from './Context';

const history = createBrowserHistory();

const client = new ApolloClient({
  uri: 'https://petgram-server-cyzd2zjsl.now.sh/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}` : '';
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  // onError: ({ networkError }) => {
  //   if (networkError && networkError.result.code === 'invalid_token') {
  //     window.sessionStorage.removeItem('token');
  //     window.location.href = '/';
  //   }
  // },
});

ReactDOM.hydrate(
  <Context.Provider>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'),
);
