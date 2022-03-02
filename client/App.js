import React, { useState } from 'react';
import Routes from './Routes';
import Nav from './components/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Work';
import Contacts from './components/contact/Contact';

const App = () => {
  const [isActive, setActive] = useState(true);

  return (
    <div className="app">
      <Nav isActive={isActive} setActive={setActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
