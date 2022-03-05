import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store';

function Menu({ isActive, setActive }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { auth } = state;
  const isLoggedIn = !!auth.id;
  console.log('log auth.id--->', auth.id);
  return (
    <div className={isActive ? 'menu-active' : 'menu'}>
      <ul className="menu-ul">
        <li onClick={() => setActive(false)}>
          <a href="intro">Home</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="portfolio">Portfolio</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="work">Works</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="contact">Contact</a>
        </li>
        {isLoggedIn ? (
          <li
            onClick={() => {
              dispatch(logout());
              setActive(false);
            }}
          >
            <a href="#welcome">Logout</a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}

export default Menu;
