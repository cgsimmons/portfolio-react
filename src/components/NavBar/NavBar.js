import React from 'react';
import NavHeader from '../NavHeader/NavHeader';
import NavLinks from '../NavLinks/NavLinks';
import './NavBar.scss';

export default () => {
  return (
    <nav className="NavBar">
      <NavLinks />
    </nav>
  );
};
