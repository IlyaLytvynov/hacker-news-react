import * as React from 'react';
import { SyntheticEvent } from 'react';

import './SignUpForm.scss';
import { Button, ButtonTypes } from '../button/Button';
import { Input } from '../input/Input';
import { ISignUpInput } from '../../models/SignUpInput';


export interface IAuthFormProps {
  onSubmit(formData: ISignUpInput): void;
}

export class SignUpForm extends React.Component<IAuthFormProps, ISignUpInput> {
  public state: ISignUpInput;

  constructor(props: IAuthFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  public submit = (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: ISignUpInput) => ({...state, [name]: value}));
  };

  public render(): JSX.Element {
    const {email, name, password} = this.state;

    return (
      <form onSubmit={this.submit} className={'auth-form'} autoComplete="new-password">
        <Input value={name} name={'name'} placeholder={'Name'} onChange={this.changeHandler}/>
        <Input value={email} name={'email'} placeholder={'Email'} onChange={this.changeHandler}/>
        <Input value={password} name={'password'} placeholder={'Password'} onChange={this.changeHandler}/>
        <Button type={ButtonTypes.Submit}>Sign Up</Button>
      </form>
    );
  }
}
