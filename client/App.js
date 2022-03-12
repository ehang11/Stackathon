import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/navbar/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Contacts from './components/contact/Contact';
import Menu from './components/navbar/Menu';

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
        <Work />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
