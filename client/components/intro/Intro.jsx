import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    // console.log('view ityped-textRef----->', textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500, //1.5s
      backSpeed: 60,
      strings: ['Software', 'Frontend', 'Fullstack'],
    });
  }, []);

  return (
    <div className="intro" id="/intro">
      <div className="intro-left">
        <div className="img-profile intro">
          <img src="assets/profile_picture.png" alt="" className="intro-img-profile" />
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-wrapper">
          <h2 className="intro-greeting">Hi there, I'm</h2>
          <h1 className="intro-name">Eric Hang</h1>
          <h3 className="intro-role">
            <span ref={textRef} className="subrole"></span>
            Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" className="intro-img-down" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
