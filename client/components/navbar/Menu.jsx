import React from 'react';

function Menu({ isActive, setActive }) {
  return (
    <div className={isActive ? 'menu-active' : 'menu'}>
      <ul className="menu-ul">
        <li onClick={() => setActive(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
