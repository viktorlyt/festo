import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const MenuMain = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="features" className="menu-item" href="/features">Features</a>
      <a id="contactUs" className="menu-item" href="/contact-us">Contact</a>
      <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
  )
}
