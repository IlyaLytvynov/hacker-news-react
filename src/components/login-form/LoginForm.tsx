import * as React from 'react';
import { SyntheticEvent } from 'react';
import { Input } from '../input/Input';
import { Button, ButtonTypes } from '../button/Button';
import * as classnames from 'classnames';

import './LoginForm.scss';
import { Link } from 'react-router-dom';

export interface ILoginFormState {
  email: string;
  password: string;
  name: string;
}

export interface ILoginFormProps {
  errors?: Array<any>;// todo add error types
  cleanErrors(): void;

  onSubmit(formData: ILoginFormState): void;
}

export class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
  public state: ILoginFormState;

  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  public componentWillReceiveProps(props: any) {
    console.log(props);
  }

  public submit = (e: SyntheticEvent) => {
    debugger;
    e.preventDefault();
    e.stopPropagation();

    if (this.props.errors && this.props.errors.length > 0) {
      return;
    }

    this.props.onSubmit(this.state);
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: ILoginFormState) => ({...state, [name]: value}));
  };

  public render(): JSX.Element {
    const {email, password} = this.state;
    const {errors} = this.props;

    const isErrors = errors && errors.length > 0;
    const classNames = classnames('login-form', {
      'login-form_invalid': isErrors
    });

    const errorMessages = (errors && errors.map((e: Error, i) => (<h4 key={i}>{e.message}</h4>))) || [];

    return (
      <form onSubmit={this.submit} className={classNames} autoComplete="new-password">
        <Input invalid={isErrors} value={email} name={'email'} placeholder={'Email'} onChange={this.changeHandler}/>
        <Input invalid={isErrors} value={password} name={'password'} placeholder={'Password'}
               onChange={this.changeHandler}/>
        <Button disabled={isErrors} type={ButtonTypes.Submit}>Log In</Button>
        <h4>Don't have an account? <Link to={'/sign-up'}>Sign Up</Link></h4>
        {
          errorMessages
        }
      </form>
    );
  }
}