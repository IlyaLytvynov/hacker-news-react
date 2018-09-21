import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { inject } from 'mobx-react';

import { LoginForm } from '../../components/login-form/LoginForm';
import { UserStore } from '../../stores/UserStore';
import { UserProvider } from '../../providers/UserProvider';
import { IAuthData } from '../../models/AuthData';
import { ILoginInput } from '../../models/LoginInput';

interface ILoginProps extends RouteComponentProps {
  userStore: UserStore;
}

interface ILoginState {
  email: string;
  password: string;
  errors: Array<Error>
}

@inject('userStore')
export class LoginContainer extends React.Component<ILoginProps, ILoginState> {
  public state: ILoginState = {
    email: '',
    password: '',
    errors: [],
  };

  public submit = (data: ILoginInput) => {
    UserProvider
      .login(data)
      .then((resp: IAuthData) => {
        this.props.history.push('/');
      })
      .catch((e) => this.setState(state => ({...state, errors: [e]})));
  };

  public cleanErrors = () => {
    this.setState(state => ({...state, isError: false}));
  };

  public render(): JSX.Element {
    const {errors} = this.state;
    return <div className={'page'}>
      <LoginForm onSubmit={this.submit} errors={errors} cleanErrors={this.cleanErrors}/>
    </div>
  }
}
