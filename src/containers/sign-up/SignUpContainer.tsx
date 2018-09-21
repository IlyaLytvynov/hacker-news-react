import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { MutationOptions } from 'react-apollo';

import { SignUpForm } from '../../components/sign-up-form/SignUpForm';
import { ISignUpResponse } from '../../models/SignUpResponse';
import { UserStore } from '../../stores/UserStore';
import { ISignUpInput } from '../../models/SignUpInput';

interface IAuthProps extends RouteComponentProps {
  mutate: (options?: MutationOptions) => Promise<ISignUpResponse>;
  userStore: UserStore;
}

@inject('userStore')
@observer
export class SignUpContainer extends React.Component<IAuthProps> {
  public submit = (data: ISignUpInput) => {
    this.props.userStore
      .signUp(data)
      .then(() =>  this.props.history.push('/'))
      .catch((e)=> console.log(e));
  };

  public render(): JSX.Element {
    return <div className={'page'}>
      <SignUpForm onSubmit={this.submit}/>
    </div>
  }
}