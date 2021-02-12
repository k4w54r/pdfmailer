import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h2>
        <Link to='/'>
          <i className='fas fa-code'></i> TEXTCHECKER
        </Link>
      </h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
