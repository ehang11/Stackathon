import React from 'react';
import SignUp from './SignUp';

import { Link } from 'react-router-dom';
function Greetings() {
  return (
    // <div className="greeting-sections">
    <div className="welcome-container" id="welcome">
      <div className="welcome-top">
        <h1 className="welcome-title">GREETINGS.</h1>
        <div className="img-profile welcome">
          <img
            src="https://i.pinimg.com/originals/5c/f4/d3/5cf4d3e04820af5be5fb0aed78291f35.gif"
            className="img-profile-welcome"
          />
        </div>
      </div>

      <div className="welcome-bottom">
        <div className="welcome-bottom1">
          <Link to="/login">LOGIN</Link>
        </div>

        <div className="welcome-bottom2">
          <a href="create">CREATE</a>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
