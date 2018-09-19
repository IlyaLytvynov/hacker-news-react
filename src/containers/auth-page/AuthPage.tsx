import * as React from 'react';

import { AuthForm, IAuthState } from '../../components/auth-form/AuthForm';
import { graphql, MutationOptions } from 'react-apollo';
import { SIGN_UP } from './AuthPageGQL';
import { LocalStorage } from '../../services/LocalStorage';

type OnSubmitCallback = (data: IAuthState) => void;

interface IAuthProps {
  mutate: (options?: MutationOptions) => Promise<any>;
}

interface IUser {
  name: string;
  email: string;
  id: string;
}

interface ISignUpResponse {
  data: {
    signup: {
      token: string;
      user: IUser
    }
  }
}

export class AuthPageComponent extends React.Component<IAuthProps> {
  public onSubmit: OnSubmitCallback = (data: IAuthState) => {
    console.log('Test', data);
  };

  public submit = (data: IAuthState) => {
    this.props.mutate({variables: data}).then((resp: ISignUpResponse) => {
      LocalStorage.update('token', resp.data.signup.token);
    })
  };

  public componentDidMount() {
    console.log('COMPONENT MOUNTED');
  }

  public componentWillUnmount() {
    console.log('COMPONENT Will unmount');
  }

  public render(): JSX.Element {
    return <AuthForm onSubmit={this.submit}/>
  }
}

export const AuthPage = graphql(SIGN_UP)(AuthPageComponent);