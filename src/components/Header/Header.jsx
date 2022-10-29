import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
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
      <HashLink smooth to='/#top' className='header__logobox'>
        <img 
          src={logo} 
          alt="logo"
          className="header__logo" //уу
        />
      </HashLink>

      <Nav setNav={setNav} nav={nav} />

      <div 
        className={
          nav 
          ? ['header__rightSide', 'header__rightSide--active'].join(' ') 
          : 'header__rightSide'
        }
      >
        <NavHashLink 
          smooth to='/#top'
          className={() => classNames('header__rightSide--home', { 'isActive': pathname === '/' })}
        >
          Home
        </NavHashLink>

        <NavHashLink 
          smooth to='/features#top'
          className={({ isActive }) => classNames('header__rightSide--features', { 'isActive': isActive })}
        >
          Features
        </NavHashLink>
        
        <NavHashLink 
          smooth to='/contact-us#top'
          className={({ isActive }) => classNames('header__rightSide--register', { 'isActive': isActive })}
        >
          Register Your Interest
        </NavHashLink>
      </div>
    </header>
  );
}