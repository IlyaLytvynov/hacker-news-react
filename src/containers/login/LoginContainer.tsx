import * as React from 'react';
import { IAuthState } from '../../components/auth-form/AuthForm';
import { LocalStorage } from '../../services/LocalStorage';
import { ChildProps, graphql, MutationOptions } from 'react-apollo';
import { LOG_IN } from './LoginGQL';
import { LoginForm } from '../../components/login-form/LoginForm';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { ILoginResponse } from './models/ILoginresponse';
import { RouteComponentProps } from 'react-router';
import { IAuthData } from '../../models/AuthData';

interface ILoginProps extends RouteComponentProps {
  mutate: (options?: MutationOptions) => Promise<ILoginResponse>;
}

interface ILoginState {
  email: string;
  password: string;
  errors: Array<Error>
}

export class LoginComponent extends React.Component<ChildProps<ILoginProps, ILoginResponse>, ILoginState> {
  public state: ILoginState = {
    email: '',
    password: '',
    errors: [],
  };

  public submit = (data: IAuthState) => {
    GQLResponseFormatter
      .format<
        ILoginResponse,
        IAuthData
      >(this.props.mutate({variables: data}), 'login')
      .then((resp: IAuthData) => {
        LocalStorage.set('token', resp.token);
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

export const LoginContainer = graphql<ILoginProps, ILoginResponse>(LOG_IN)(LoginComponent);
