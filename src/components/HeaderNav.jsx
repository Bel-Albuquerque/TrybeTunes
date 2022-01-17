import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav id="HeaderNav">
      <Link to="/search" data-testid="link-to-search">
        <p>Search</p>
      </Link>
      <Link to="/favorites" data-testid="link-to-favorites">
        <p>Favorites</p>
      </Link>
      <Link to="/profile" data-testid="link-to-profile">
        <p>Profile</p>
      </Link>
    </nav>
  );
}

export default HeaderNav;
