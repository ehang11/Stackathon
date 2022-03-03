import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './components/account/Login/Login';
import { SignUp } from './components/account/SignUp/SignUp';

import Home from './components/Home';
import { me } from './store';
import { me, getOrdersLoggedOut } from './store';

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.loadInitialData();
    //this.props.getOrdersLoggedOut()
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.getOrders();
    }
    if (prevProps.isLoggedIn && !this.props.isLoggedIn) {
      this.props.getOrdersLoggedOut();
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route exact path="/:username" component={EditPage} /> Edit Page */}
          </Switch>
        ) : (
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* <Route path="/setup" component={setupKard} /> */}
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getOrdersLoggedOut: () => {
      dispatch(getOrdersLoggedOut());
    },
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
