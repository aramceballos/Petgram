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
