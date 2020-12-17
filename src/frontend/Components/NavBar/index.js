import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const SIZE = '32px';

const NavBar = () => (
  <Nav>
    <Link
      exact
      activeStyle={{
        color: '#000',
      }}
      to='/'>
      <MdHome size={SIZE} />
    </Link>
    <Link
      exact
      activeStyle={{
        color: '#000',
      }}
      to='/favs'>
      <MdFavoriteBorder size={SIZE} />
    </Link>
    <Link
      exact
      activeStyle={{
        color: '#000',
      }}
      to='/user'>
      <MdPersonOutline size={SIZE} />
    </Link>
  </Nav>
);

export default NavBar;
