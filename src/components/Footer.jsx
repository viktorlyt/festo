import classNames from 'classnames';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/festo-app-logo.png';
import Fb from '../images/F.png';
import Inst from '../images/Inst.png';

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer id='footer' className="footer">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <NavLink 
        to='/' 
        className={({ isActive }) => classNames('footer__home', { 'isActive': pathname === '/' })}
      >
        Home
      </NavLink>
      
      <NavLink 
        to='/features' 
        className={({ isActive }) => classNames('footer__features', { 'isActive': isActive })}
      >
        Features
      </NavLink>

      <NavLink 
        to='/contact-us'
        className={({ isActive }) => classNames('footer__register', { 'isActive': isActive })}
      >
        Register Your Interest
      </NavLink>

      <NavLink 
        to='/privacy-policy'
        className={({ isActive }) => classNames('footer__pp', { 'isActive': isActive })}
      >
        Privacy Policy
      </NavLink>
      
      <div className='footer__line'>
        <div className='footer__line-item' />
      </div>
      <div className='footer__copyright'>
        <p className='footer__copyright--text'>© Copyright 2022, Festo All rights reserved.</p>
        <div>
          <a 
            href='https://www.facebook.com/Festo-Entertainment-103326965771562' 
            target='_blank' 
            rel="noreferrer"
          >
            <img src={Fb} alt="F" className='footer__facebook' />
          </a>
          <a 
            href='https://www.instagram.com/festoapp/' 
            target='_blank' 
            rel="noreferrer"
          >
            <img src={Inst} alt="Inst" className='footer__instagram' />
          </a>
        </div>
      </div>
    </footer>
  );
}