import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <Link to='/'>
        <img src="../../festo-app-logo.png" alt="logo" />
      </Link>
      <Link to='/' className='footer__home'>Home</Link>
      <Link to='/features' className='footer__features'>Features</Link>
      <Link to='/contact-us' className='footer__register'>Register Your Interest</Link>
      <Link to='/privacy-policy' className='footer__pp'>Privacy Policy</Link>
      <div className='footer__line'>
        <div className='footer__line-item' />
      </div>
      <div className='footer__copyright'>
        <p className='footer__copyright--text'>© Copyright 2022, Festo All rights reserved.</p>
        <div>
          <Link to='https://www.facebook.com/Festo-Entertainment-103326965771562'><img src="F.png" alt="F" className='footer__facebook' /></Link>
          <Link to='https://www.instagram.com/festoapp/'><img src="Inst.png" alt="Inst" className='footer__instagram' /></Link>
        </div>
      </div>
    </footer>
  );
}