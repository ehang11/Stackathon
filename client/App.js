import React, { useState } from 'react';

import Nav from './components/navbar/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Contacts from './components/contact/Contact';
import Menu from './components/navbar/Menu';

import Routes from './Routes';
import { me } from './store';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/account/login/AuthForm';
import SignUp from './components/account/signup/Signup';

function App(props) {
  //active toggle with useState hook
  const [isActive, setActive] = useState(false);

  return (
    <div className="app">
      <Nav isActive={isActive} setActive={setActive} />
      <Menu isActive={isActive} setActive={setActive} />
      <Routes />
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
