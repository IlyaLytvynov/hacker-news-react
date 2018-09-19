import * as React from 'react';

import { Logo } from '../logo/Logo';

import './Header.scss';

export class Header extends React.Component {
  public render(): JSX.Element {
    return <header className='global-header global-header_dark'>
      <Logo/>
      <nav>
        {
          this.props.children
        }
      </nav>
    </header>
  }
}