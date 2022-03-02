import React, { useState } from 'react';

import Nav from './components/navbar/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Work';
import Contacts from './components/contact/Contact';
import Menu from './components/navbar/Menu';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

function App() {
  //active toggle with useState hook
  const [isActive, setActive] = useState(false);

  return (
    <div className="app">
      <Nav isActive={isActive} setActive={setActive} />
      <Menu isActive={isActive} setActive={setActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
