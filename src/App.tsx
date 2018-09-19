import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { AuthPage } from './containers/auth-page/AuthPage';
import { client } from './services/GqlClient';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';

interface IAppProps {
  title: string;
}

export class App extends React.Component<IAppProps, {}> {
  public render(): JSX.Element {
    return <Router>
      <ApolloProvider client={client}>
        <div className='app'>
          <Header/>
          <Route exact={true} path='/' component={AuthPage} />
          <Route path='/other-page' component={() => <h1>Other page</h1>} />
        </div>
      </ApolloProvider>
    </Router>;
  }
}
