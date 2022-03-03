import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
function Nav({ isActive, setActive }) {
  return (
    <div className={isActive ? 'nav-active' : 'nav'}>
      <div className={isActive ? 'wrapper-active' : 'wrapper'}>
        <div className="nav-left">
          <a href="#Intro" className="logo">
            KARD.
          </a>
          <div className="itemContainer">
            <PersonIcon className="contact-icon" />
            <span className="contact-span">2673042709</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="contact-icon" />
            <span className="contact-span">e.h@outlook.com</span>
          </div>
        </div>

        <div className="nav-right">
          <div className={isActive ? 'hamburger-active' : 'hamburger'} onClick={() => setActive(!isActive)}>
            <span className={isActive ? 'line1-active' : 'line1'}></span>
            <span className={isActive ? 'line2-active' : 'line1'}></span>
            <span className={isActive ? 'line3-active' : 'line1'}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
