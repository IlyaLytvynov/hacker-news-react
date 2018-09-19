import * as React from 'react';
import { SyntheticEvent } from 'react';

import './AuthForm.scss';

export interface IAuthState {
  email: string;
  password: string;
  name: string;
}

export interface IAuthFormProps {
  onSubmit(formData: IAuthState): void;
}

export class AuthForm extends React.Component<IAuthFormProps, IAuthState> {
  public state: IAuthState;

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

  public changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const {value, name } = e.currentTarget;

    this.setState((state: IAuthState) => {
      const newState = {...state};
      newState[name] = value;
      return newState;
    });
  };

  public render(): JSX.Element {
    return <form onSubmit={this.submit} className={'auth-form'}>
        <div className="auth-form__raw">
          <input
            name={'email'}
            onChange={this.changeHandler}
            value={this.state.email}
            type="text"
            className="auth-form__input"/>
        </div>
      <div className="auth-form__raw">
        <input
          name={'name'}
          onChange={this.changeHandler}
          value={this.state.name}
          type="text"
          className="auth-form__input"/>
      </div>
        <div className="auth-form__raw">
          <input
            name={'password'}
            onChange={this.changeHandler}
            value={this.state.password}
            type="password"
            className="auth-form__input"/>
        </div>
        <div className="auth-form__raw">
          <button className="auth-form__btn">Sign Up</button>
        </div>
      </form>
  }
}
