import * as React from 'react';

import { Logo } from '../logo/Logo';

import './Header.scss';

export class Header extends React.Component {
  public render(): JSX.Element {
    return <header className='global-header global-header_dark'>
      <div className="global-header__content">
        <Logo/>
        <nav className='global-nav'>
          { React.Children.map(this.props.children, (child) => <div className={'global-nav__item'}>{child}</div>)}
        </nav>
      </div>
    </header>
  }
}