import React from 'react';

import NavItem from './NavItem';

function Navbar() {
  
  return (
    <nav>
      <NavItem link='/menu' text="Menu"></NavItem>
      <NavItem link='/cart' text="Cart / Checkout"></NavItem>
      <NavItem link='/table' text="Change/Enter Table"></NavItem>
      <NavItem link='/orders' text="Orders"></NavItem>
    </nav>
  );
}

export default Navbar;
