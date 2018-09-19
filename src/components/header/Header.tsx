import * as React from 'react';

import { Logo } from '../logo/Logo';
import { Link } from 'react-router-dom';

import './Header.scss';

export class Header extends React.Component {
  public render(): JSX.Element {
    return <header className='global-header global-header_dark'>
      <Logo />
     <nav>
       <Link to={'/'}>Auth page</Link>
       <Link to={'/other-page'}>Other page</Link>
     </nav>
    </header>
  }
}