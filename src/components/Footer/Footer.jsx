import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import logo from '../../images/festo-app-logo.png';
import Fb from '../../images/F.png';
import Inst from '../../images/Inst.png';
import appleRed from '../../images/apple-red.png';
// import apple from '../../images/apple.png';

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer id='footer' className="footer">
      <HashLink smooth to='/#top' className='footer__logo'>
        <img 
          src={logo} 
          alt="logo"
          className='footer__logo--img'
        />
      </HashLink>

      <div className='footer__section'>
        <div className='footer__left'>
          <NavHashLink
            smooth to='/#top'
            className={({ isActive }) => classNames('footer__home', { 'isActive': pathname === '/' })}
          >
            Home
          </NavHashLink>
        
          <NavHashLink
            smooth to='/features#top'
            className={({ isActive }) => classNames('footer__features', { 'isActive': isActive })}
          >
            Features
          </NavHashLink>
        
          <NavHashLink
            smooth to='/contact-us#top'
            className={({ isActive }) => classNames('footer__register', { 'isActive': isActive })}
          >
            Register Your Interest
          </NavHashLink>
        </div>
        <div className='footer__fi'>
          <a
            href='https://www.facebook.com/Festo-Entertainment-103326965771562'
            target='_blank'
            rel="noreferrer"
          >
            <img src={Fb} alt="F" className='footer__facebook--m' />
          </a>
          <a
            href='https://www.instagram.com/festoapp/'
            target='_blank'
            rel="noreferrer"
          >
            <img src={Inst} alt="Inst" className='footer__instagram--m' />
          </a>
        </div>
        <div className='footer__right'>
          <a href="https://apps.apple.com/en/app/festo/id1624893933" className='footer__apple' target='_blank'>
            <img
              src={appleRed}
              alt="appleRed"
              className='footer__apple--img'
            />
          </a>
          <NavHashLink
            smooth to='/privacy-policy#top'
            className={({ isActive }) => classNames('footer__pp', { 'isActive': isActive })}
          >
            Privacy Policy
          </NavHashLink>
        </div>
      </div>
      
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