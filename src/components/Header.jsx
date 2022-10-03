import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/festo-app-logo.png';
// import { MenuMain } from './MenuMain';

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
      {/* <MenuMain right width={ '280px' }/> */}
      <Link to='/' className='header__logobox'>
        <img 
          src={logo} 
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className='header__rightSide'>
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

        <AnchorLink href='#menu'>
          <div className='header__menu'>
            <div className='header__menu--line1'></div>
            <div className='header__menu--line2'></div>
            <div className='header__menu--line3'></div>
          </div>
        </AnchorLink>
      </div>

      <nav className='page__menu menu' id="#menu">
        <div className='header__menu'>
          <div className='header__menu--line1'></div>
          <div className='header__menu--line2'></div>
          <div className='header__menu--line3'></div>
        </div>
      </nav>

    </header>
  );
}