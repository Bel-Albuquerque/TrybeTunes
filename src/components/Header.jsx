import React from 'react';
import HeaderNav from './HeaderNav';
import User from './User';

function Header() {
  return (
    <header data-testid="header-component">
      <User />
      <HeaderNav />
    </header>
  );
}

export default Header;
