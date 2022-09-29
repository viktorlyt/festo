import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/festo-app-logo.png';

export const Header = () => {
  const { pathname } = useLocation();
  const [scrollTop, setScrollTop] = useState(0);
  
  // eslint-disable-next-line
  const onScroll = (e) => {
    if (scrollTop !== e.target.documentElement.scrollTop) {
      setScrollTop(e.target.documentElement.scrollTop);
      console.log(e.target.documentElement.scrollTop);
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <header 
      className={classNames({ 
        'header': scrollTop === 0, 
        'header-scrolled': scrollTop !== 0, 
      })}
    >
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <div className='header__rightSide'>
        <NavLink 
          to='/'
          className={() => classNames('header__home', { 'isActive': pathname === '/' })}
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