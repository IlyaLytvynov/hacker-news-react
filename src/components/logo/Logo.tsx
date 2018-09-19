import * as React from 'react';

import './Logo.scss';

export interface ILogoProps {
  classNames?: Array<string>;
}

export const Logo: React.SFC<ILogoProps> = (props: ILogoProps) => {
  const classNames = ['logo', ...(props.classNames || [])].join(' ');

  return <div className={classNames}>
    LOGO
  </div>
};