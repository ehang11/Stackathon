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
import SignUp from './components/account/SignUp';
import Greetings from './components/account/Greetings';

function App(props) {
  const { auth } = useSelector((state) => state);

  console.log('state.auth-->', auth.username);
  const [userState, setUserState] = useState({
    username: auth.username || '',
    firstName: auth.firstName || '',
    lastName: auth.lastName || '',
    email: auth.email || '',
    phoneNumber: auth.phoneNumber || '',

    primaryRole: auth.primaryRole || '',
    subRole1: auth.subRole1 || auth.primaryRole,
    subRole2: auth.subRole2 || auth.primaryRole,
    profilePicture_URL: auth.profilePicture_URL,
    linkedIn_URL: auth.linkedIn_URL || '',
    gitHub_URL: auth.gitHub_URL || '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
    setUserState(auth.id);
  }, []);
  const isLoggedIn = !!auth.id;
  // const dispatch = useDispatch();

  console.log('log auth.id--->', auth.id);

  //active toggle with useState hook
  const [isActive, setActive] = useState(false);

  return (
    <div className="app">
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
