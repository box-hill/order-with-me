import React from 'react';

import NavItem from './NavItem';

function Navbar() {
  
  return (
    <nav>
      <NavItem link='/' text="Menu"></NavItem>
      <NavItem link='/cart' text="Cart"></NavItem>
    </nav>
  );
}

export default Navbar;
