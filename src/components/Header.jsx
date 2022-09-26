import classNames from 'classnames';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header id='header' className="header">
      <Link to='/'>
        <img src="../../festo-app-logo.png" alt="logo" />
      </Link>
      <div className='header__rightSide'>
        <NavLink 
          to='/'
          className={({ isActive }) => classNames('header__home', { 'isActive': pathname === '/' })}
        >
          Home
        </NavLink>

        <NavLink 
          to='/features'
          className={({ isActive }) => classNames('header__features', { 'isActive': isActive })}
        >
          Features
        </NavLink>
        
        <NavLink 
          to='/contact-us'
          className={({ isActive }) => classNames('header__register', { 'isActive': isActive })}
        >
          Register Your Interest
        </NavLink>
      </div>
    </header>
  );
}