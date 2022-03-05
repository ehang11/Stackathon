import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
function Nav({ isActive, setActive }) {
  const { auth: user } = useSelector((state) => state);
  const [userState, setUserState] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',

    primaryRole: user.primaryRole || '',
    subRole1: user.subRole1 || user.primaryRole,
    subRole2: user.subRole2 || user.primaryRole,
    profilePicture_URL: user.profilePicture_URL,
    linkedIn_URL: user.linkedIn_URL || '',
    gitHub_URL: user.gitHub_URL || '',
  });
  console.log('auth user in nav-->', user);
  console.log('auth user.phoneNumber)-->', user.email);
  return (
    <div className={isActive ? 'nav-active' : 'nav'}>
      <div className={isActive ? 'wrapper-active' : 'wrapper'}>
        <div className="nav-left">
          <a href="welcome" className={isActive ? 'logo-active' : 'logo'}>
            KARD.
          </a>
          <div className="itemContainer">
            <PersonIcon className="contact-icon" />
            <span className="contact-span">{user.phoneNumber}</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="contact-icon" />
            <span className="contact-span">{user.email}</span>
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
