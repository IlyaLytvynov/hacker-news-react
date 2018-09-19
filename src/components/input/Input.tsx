import * as React from 'react';
import { SyntheticEvent } from 'react';
import * as classnames from 'classnames';

import './Input.scss';

export interface IInputProps {
  value: string
  name: string;
  placeholder: string;
  invalid?: boolean;
  onChange(value: string, controlName: string): void
}

export const Input: React.SFC<IInputProps> = (props: IInputProps) => {
  const classNames = classnames('input', {
    'input_invalid': props.invalid
  });
  const changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    props.onChange(value, name);
  };

  return <div className={classNames}>
    <input
      name={props.name}
      placeholder={props.placeholder}
      onChange={changeHandler}
      value={props.value}
      type="text"
      className="input__native"/>
  </div>
};