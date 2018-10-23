import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { client } from './services/GqlClient';
import { history } from './services/HistoryService';
import { ApolloProvider } from 'react-apollo';
import { Router, Link, Route } from 'react-router-dom';
import { Provider as MobxProvider } from 'mobx-react';
import { FeedStore } from './stores/FeedStore';
import { UserStore } from './stores/UserStore';
import { Routes } from './components/routes/Routes';

const stores = {
  feedStore: new FeedStore(),
  userStore: new UserStore(),
};

export class App extends React.Component<{}, {}> {
    public render() {
      return <Router history={history}>
        <ApolloProvider client={client}>
          <MobxProvider {...stores}>
            <div className='app'>
              <Header>
                <Link to={'/sign-up'}>Sign Up</Link>
                <Link to={'/login'}>Login page</Link>
                <Link to={'/'}>Home page</Link>
                <Link to={{
                  pathname: `/add-link`,
                  state: {modal: true}
                }}>Add Link</Link>
              </Header>
              <Route path='/' component={Routes} />

            </div>
          </MobxProvider>
        </ApolloProvider>
      </Router>;
  }
}
