import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { client } from './services/GqlClient';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { LoginContainer } from './containers/login/LoginContainer';
import { SignUpContainer } from './containers/sign-up/SignUpContainer';
import { FeedContainer } from './containers/feed/FeedContainer';
import { Provider } from 'mobx-react';
import { feedStore } from './stores/FeedStore';


interface IAppProps {
  title: string;
}

export class App extends React.Component<IAppProps, {}> {
  public render(): JSX.Element {
    // @ts-ignore
    return <Router>
      <ApolloProvider client={client}>
        <Provider feedStore={feedStore}>
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
        </Provider>
      </ApolloProvider>
    </Router>;
  }
}
