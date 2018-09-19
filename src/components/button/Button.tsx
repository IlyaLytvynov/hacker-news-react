import * as React from 'react';
import * as classnames from 'classnames';

import './Button.scss';
import { SyntheticEvent } from 'react';

export enum ButtonTypes {
  Submit, Danger, Default
}

interface IButtonComponentProps {
  onClick?: () => void;
  type?: ButtonTypes;
  disabled?: boolean;
  classNames?: string;
  children?: JSX.Element|string;
}

export const Button: React.SFC<IButtonComponentProps> = (props: IButtonComponentProps) =>{
  const {onClick, type,  disabled} = props;
  const classNames = classnames(props.classNames, {
    'button_submit': type === ButtonTypes.Submit,
    'button_danger': type === ButtonTypes.Danger,
    'button_default': type === ButtonTypes.Default || undefined,
    'button_disabled': disabled
  }, 'button');

  const clickHandler = (e: SyntheticEvent) => {
    if (!disabled && onClick) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }
  };
  return (
    <button className={classNames}
            onClick={clickHandler}>
      <span className='text'>{props.children}</span>
    </button>
  );
};

