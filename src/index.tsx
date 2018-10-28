/// <reference path="./typings.d.ts">

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

import './index.scss';
import { ApolloProvider } from 'react-apollo';
import { GQLClient } from './services/GqlClient';
import { Provider as MobxProvider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import { FeedStore } from './stores/FeedStore';
import { UserStore } from './stores/UserStore';

const stores = {
  feedStore: new FeedStore(),
  userStore: new UserStore(),
};

GQLClient.createClient(stores.userStore);

ReactDOM.render(
  <Router>
    <ApolloProvider client={GQLClient.client}>
      <MobxProvider {...stores}>
        <App />
      </MobxProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById('test') as HTMLElement
);
