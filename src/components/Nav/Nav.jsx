import React from 'react';

export const Nav = ({ setNav, nav }) => {
  return (
    <nav 
      className='nav'
      onClick={() => setNav(!nav)}
    >
      <div className='nav__menu--icon'>
        <div 
          className={
            nav
            ? ['nav__menu--icon-line1', 'nav__menu--icon-line1_cross'].join(' ')
            : 'nav__menu--icon-line1'
          }
        ></div>
        <div 
          className={
            nav
            ? ['nav__menu--icon-line2', 'nav__menu--icon-line2_cross'].join(' ')
            : 'nav__menu--icon-line2'
          }
        ></div>
        <div 
          className={
            nav
            ? ['nav__menu--icon-line3', 'nav__menu--icon-line3_cross'].join(' ')
            : 'nav__menu--icon-line3'
          }
        ></div>
      </div>
    </nav>
  )
}
