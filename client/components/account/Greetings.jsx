import React from 'react';
import Signup from './signup/Signup';
import CompleteProfile from './signup/CompleteProfile';
function Greetings() {
  return (
    <div className="sections">
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
            <a href="login">LOGIN</a>
          </div>

          <div className="welcome-bottom2">
            {' '}
            <a href="create">CREATE </a>
          </div>
        </div>
      </div>
      <Signup />
      {/* <CompleteProfile /> */}
    </div>
  );
}

export default Greetings;
