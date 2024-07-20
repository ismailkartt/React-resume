// Header.js
import React from 'react';
import Logo from '../logo/logo.js';
import SocialLinks from '../social/socialLinks.js';
import "./header.css";

const Header = () => {
  return (
    <header className="ds-header" id="site-header">
      <div className="container">
        <div className="ds-header-inner">
          <Logo />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
