import * as React from 'react';
import { IAuthState } from '../../components/auth-form/AuthForm';
import { ChildProps, graphql, MutationOptions } from 'react-apollo';
import { LOG_IN } from '../../gql-requests/LoginGQL';
import { LoginForm } from '../../components/login-form/LoginForm';
import { ILoginResponse } from './models/ILoginresponse';
import { RouteComponentProps } from 'react-router';
import { inject } from 'mobx-react';
import { UserStore } from '../../stores/UserStore';

interface ILoginProps extends RouteComponentProps {
  mutate: (options?: MutationOptions) => Promise<ILoginResponse>;
  userStore: UserStore;
}

interface ILoginState {
  email: string;
  password: string;
  errors: Array<Error>
}

@inject('userStore')
export class LoginComponent extends React.Component<ChildProps<ILoginProps, ILoginResponse>, ILoginState> {
  public state: ILoginState = {
    email: '',
    password: '',
    errors: [],
  };

  public submit = (data: IAuthState) => {
    this.props.userStore.login(data);
  }

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
