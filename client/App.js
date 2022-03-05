import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Greetings from './components/account/Greetings';

function App(props) {
  const state = useSelector((state) => state);
  const { auth } = state;
  const isLoggedIn = !!auth.id;
  // const dispatch = useDispatch();
  console.log('log auth.id--->', auth.id);

  //active toggle with useState hook
  const [isActive, setActive] = useState(false);

  return (
    <div className="app" id="home">
      <Nav isActive={isActive} setActive={setActive} />
      <Menu isActive={isActive} setActive={setActive} />
      {/* <Routes /> */}
      {isLoggedIn ? (
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work />
          <Contacts />
        </div>
      ) : (
        <div className="app">
          <Routes />
          <div className="sections">
            <Greetings />

            <SignUp />
          </div>
        </div>
      )}
      {/* <Switch>
           <Route path="/welcome" exact component={Greetings} />
          <Route path="/login" component={Login} />

        </Switch> */}
    </div>
  );
}

export default App;
