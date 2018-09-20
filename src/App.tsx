import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { client } from './services/GqlClient';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './containers/login/Login';
import { SignUp } from './containers/sign-up/SignUp';
import { Links } from './containers/links/Links';

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
            <Route path='/' exact={true} component={Links}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/login' component={LoginContainer} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>;
  }
}
