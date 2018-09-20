import * as React from 'react';

import { AuthForm, IAuthState } from '../../components/auth-form/AuthForm';
import { ChildProps, graphql, MutationOptions } from 'react-apollo';
import { SIGN_UP } from './SignUpGQL';
import { LocalStorage } from '../../services/LocalStorage';
import { ISignUpResponse } from './models/SignUpResponse';
import { RouteComponentProps } from 'react-router';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { IAuthData } from '../../models/AuthData';

interface IAuthProps extends RouteComponentProps {
  mutate: (options?: MutationOptions) => Promise<ISignUpResponse>;
}

class SignUpComponent extends React.Component<ChildProps<IAuthProps, ISignUpResponse>> {

  public submit = (data: IAuthState) => {
    GQLResponseFormatter.format<ISignUpResponse, IAuthData>(this.props.mutate({variables: data}), 'signup')
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

export const SignUpContainer = graphql(SIGN_UP)(SignUpComponent);