import * as React from 'react';
import { SyntheticEvent } from 'react';
import { inject, observer } from 'mobx-react';

import './SignUpForm.scss';
import { Input } from '../input/Input';
import { ISignUpInput } from '../../models/SignUpInput';
import { Button, ButtonTypes } from '../button/Button'
import { IModalChildProps } from '../modal/Modal';
import { UserStore } from '../../stores/UserStore';

interface IProps extends IModalChildProps {
  userStore?: UserStore;
}

@inject('userStore')
@observer
export class SignUpForm extends React.Component<IProps, ISignUpInput> {
  public state: ISignUpInput;

  constructor(props: IModalChildProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  public submit = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.userStore!
      .signUp(this.state)
      .catch((error)=> console.log(error));
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: ISignUpInput) => ({...state, [name]: value}));
  };

  public render(): JSX.Element {
    const {email, name, password} = this.state;

    return (  
      <form onSubmit={this.submit} className={'auth-form'} autoComplete="new-password">
        <h3 className="auth-form__title">
          Sign Up
        </h3>
        <Input value={name} name={'name'} placeholder={'Name'} onChange={this.changeHandler}/>
        <Input value={email} name={'email'} placeholder={'Email'} onChange={this.changeHandler}/>
        <Input value={password} name={'password'} placeholder={'Password'} onChange={this.changeHandler}/>
        <Button type={ButtonTypes.Submit}>Register</Button>
      </form>
    );
  }
}
