import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { client } from './services/GqlClient';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './containers/login/LoginContainer';
import { SignUpContainer } from './containers/sign-up/SignUpContainer';
import { FeedContainer } from './containers/links/FeedContainer';

interface IAppProps {
  title: string;
}

export class App extends React.Component<IAppProps, {}> {
  public render(): JSX.Element {
    // @ts-ignore
    return <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Header>
            <Link to={'/sign-up'}>Sign Up</Link>
            <Link to={'/login'}>Login page</Link>
          </Header>
          <Switch>
            <Route path='/' exact={true} component={FeedContainer}/>
            <Route path='/sign-up' component={SignUpContainer}/>
            <Route path='/login' component={LoginContainer} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>;
  }
}
