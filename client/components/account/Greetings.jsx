import React from 'react';

function Greetings() {
  return (
    <div className="sections">
      <div className="welcome-container " id="welcome">
        <div className="welcome-left">
          <h1 className="welcome-title">GREETINGS.</h1>
          <div className="img-profile welcome">
            <img
              src="https://i.pinimg.com/originals/5c/f4/d3/5cf4d3e04820af5be5fb0aed78291f35.gif"
              className="intro-img-profile"
            />
          </div>
        </div>

        <div className="welcome-right">
          <div className="welcome-login"> LOGIN</div>
          <div className="welcome-create">CREATE</div>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
