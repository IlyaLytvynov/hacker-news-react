import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { client } from './services/GqlClient';
import { history } from './services/HistoryService';
import { ApolloProvider } from 'react-apollo';
import { Router, Link, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './containers/login/LoginContainer';
import { SignUpContainer } from './containers/sign-up/SignUpContainer';
import { FeedContainer } from './containers/feed/FeedContainer';
import { Provider } from 'mobx-react';
import { FeedStore } from './stores/FeedStore';
import { UserStore } from './stores/UserStore';
import jquery from 'jquery';

const stores = {
  feedStore: new FeedStore(),
  userStore: new UserStore(),
};
jquery.ajax();

export class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    // @ts-ignore
    return <Router history={history}>
      <ApolloProvider client={client}>
        <Provider {...stores}>
        <div className='app'>
          <Header>
            <Link to={'/sign-up'}>Sign Up</Link>
            <Link to={'/login'}>Login page</Link>
            <Link to={'/'}>Home page</Link>
          </Header>
          <Switch>
            <Route path='/' exact={true} component={FeedContainer}/>
            <Route path='/sign-up' component={SignUpContainer}/>
            <Route path='/login' component={LoginContainer} />
          </Switch>
        </div>
        </Provider>
      </ApolloProvider>
    </Router>;
  }
}
