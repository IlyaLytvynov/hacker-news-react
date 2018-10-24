import * as React from 'react';
import * as classnames from 'classnames';
import { SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';
import { Button, ButtonTypes } from '../button/Button';
import { Input } from '../input/Input';
import { ILoginInput } from '../../models/LoginInput';

import './LoginForm.scss';
import { inject } from 'mobx-react';
import { UserStore } from '../../stores/UserStore';
import { IModalChildProps } from '../modal/Modal';

export interface ILoginFormProps extends IModalChildProps {
  userStore?: UserStore;
  new?: string;
  onErrorLogin?(): void;
  onSuccessLogin?(): void;
}
interface IState extends ILoginInput {
  errors: Array<Error>;
}

@inject('userStore')
export class LoginForm extends React.Component<ILoginFormProps, IState> {
  public state: IState;

  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
    }
  }

  public componentWillReceiveProps(props: any) {
    console.log(props);
  }

  public submit = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const { email, password } = this.state;
    this.props.userStore!
      .login({email, password})
      .catch((error) => this.setState(state => ({...state, errors: [error]})));
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: ILoginInput) => ({...state, [name]: value}));
  };

  public render(): JSX.Element {
    const {email, password, errors} = this.state;

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