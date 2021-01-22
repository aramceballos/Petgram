import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ApolloProvider } from 'react-apollo';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import App from './routes/App';
import reducer from './reducers';

const history = createBrowserHistory();

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk)),
);

const client = new ApolloClient({
  uri: 'https://petgram-server-cyzd2zjsl.now.sh/graphql',
});

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App isAuth={preloadedState.token} />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('app'),
);
