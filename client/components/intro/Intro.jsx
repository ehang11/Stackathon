import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from 'ityped';
import { me, updateAuth } from '../../store';

function Intro() {
  //for ityped functionality
  const textRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500, //1.5s
      backSpeed: 60,
      strings: ['Software', 'Frontend', 'Fullstack'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro-left">
        <div className="img-profile intro">
          <img src="https://i.ibb.co/47cgQwd/profile-picture-removebg.png" alt="" className="img-pfp" />
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
        <a href="portfolio">
          <img src="assets/down.png" alt="" className="intro-img-down" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
