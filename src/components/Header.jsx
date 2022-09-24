import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header id='header' className="header">
      <Link to='/'>
        <img src="../../festo-app-logo.png" alt="logo" />
      </Link>
      <div className='header__rightSide'>
        <Link to='/' className='header__home'>Home</Link>
        <Link to='/features' className='header__features'>Features</Link>
        <Link to='/contact-us' className='header__register'>Register Your Interest</Link>
      </div>
    </header>
  );
}