import * as React from 'react';

import { Header } from './components/header/Header';

import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FeedContainer } from './containers/feed/FeedContainer';
import { OpenModal } from './components/modal/OpenModal';
import { LoginForm } from './components/login-form/LoginForm';
import { UserStore } from './stores/UserStore';
import { inject, observer } from 'mobx-react';
import { SignUpForm } from './components/sign-up-form/SignUpForm';
import { NewLinkForm } from './components/new-link-form/NewLinkForm';

interface IProps {
  userStore?: UserStore,
}

@inject('userStore')
@observer
export class App extends React.Component<IProps, {}> {
  public render() {
    return <div className='app'>
      <Header>
        { this.renderControls() }
      </Header>
      <main className={'app-content'}>
        <Switch>
          <Route exact={true} path='/' component={FeedContainer}/>
          <Redirect to={'/'} />
        </Switch>
      </main>

    </div>
  }

  private renderControls() {
    const userStore = this.props.userStore!;
    if (userStore.token) {
      return <>
        <OpenModal title={'AddLink'}><NewLinkForm/></OpenModal>
        <button onClick={() => userStore.logout()}>Log out</button>
      </>
    } else {
       return <> 
        <OpenModal title={'Sign Up'}><SignUpForm/></OpenModal>
        <OpenModal title={'Log In'}><LoginForm/></OpenModal>
       </>
    }
  }
}
