import React from 'react';

import { Nav } from './styles';

import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Link to="/">
         <img src={logo} alt=""/>
      </Link>
    </Nav>
  );
}

export default NavBar;