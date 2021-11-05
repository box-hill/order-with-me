import React from 'react';

import NavItem from './NavItem';

function Navbar() {
  
  return (
    <nav>
      <ul>
      <NavItem link='/table' text="Table"></NavItem>
      <NavItem link='/menu' text="Menu"></NavItem>
      <NavItem link='/cart' text="Cart"></NavItem>
      <NavItem link='/orders' text="Orders"></NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
