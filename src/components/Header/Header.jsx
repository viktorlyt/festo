import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/festo-app-logo.png';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  const { pathname } = useLocation();
  const [scrollTop, setScrollTop] = useState(0);
  const [nav, setNav] = useState(false);
  
  // eslint-disable-next-line
  const onScroll = (e) => {
    if (scrollTop !== e.target.documentElement.scrollTop) {
      setScrollTop(e.target.documentElement.scrollTop);
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
      <Link to='/' className='header__logobox'>
        <img 
          src={logo} 
          alt="logo"
          className="header__logo"
        />
      </Link>

      <Nav setNav={setNav} nav={nav} />

      <div 
        className={
          nav 
          ? ['header__rightSide', 'header__rightSide--active'].join(' ') 
          : 'header__rightSide'
        }
      >
        <NavLink 
          to='/'
          className={() => classNames('header__rightSide--home', { 'isActive': pathname === '/' })}
        >
          Home
        </NavLink>

        <NavLink 
          to='/features'
          className={({ isActive }) => classNames('header__rightSide--features', { 'isActive': isActive })}
        >
          Features
        </NavLink>
        
        <NavLink 
          to='/contact-us'
          className={({ isActive }) => classNames('header__rightSide--register', { 'isActive': isActive })}
        >
          Register Your Interest
        </NavLink>
      </div>
    </header>
  );
}