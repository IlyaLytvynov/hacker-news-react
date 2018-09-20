import * as React from 'react';

import { AuthForm, IAuthState } from '../../components/auth-form/AuthForm';
import { ChildProps, MutationOptions } from 'react-apollo';
import { SIGN_UP } from './SignUpGQL';
import { LocalStorage } from '../../services/LocalStorage';
import { ISignUpResponse } from './models/SignUpResponse';
import { RouteComponentProps } from 'react-router';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { IAuthData } from '../../models/AuthData';
import { client } from '../../services/GqlClient';

interface IAuthProps extends RouteComponentProps {
  mutate: (options?: MutationOptions) => Promise<ISignUpResponse>;
}

export class SignUpContainer extends React.Component<ChildProps<IAuthProps, ISignUpResponse>> {

  public submit = (data: IAuthState) => {
    const options = {
      mutation: SIGN_UP,
      variables: data,
    };

    GQLResponseFormatter.format(client.mutate(options), 'signup')
      .then((resp: IAuthData) => {
        LocalStorage.set('token', resp.token);
        this.props.history.push('/');
      });
  };

  public render(): JSX.Element {
    return <div className={'page'}>
      <AuthForm onSubmit={this.submit}/>
    </div>
  }
}