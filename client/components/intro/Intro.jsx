import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from 'ityped';
import { updateAuth } from '../../store';

function Intro() {
  //for ityped functionality
  const textRef = useRef();

  const { auth: user } = useSelector((state) => state);
  const [userState, setUserState] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',
    // password: '',
    primaryRole: user.primaryRole || '',
    subRole1: user.subRole1 || user.primaryRole,
    subRole2: user.subRole2 || user.primaryRole,
    profilePicture_URL: user.profilePicture_URL || '',
    linkedIn_URL: user.linkedIn_URL || '',
    gitHub_URL: user.gitHub_URL || '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('view ityped-textRef----->', textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500, //1.5s
      backSpeed: 60,
      strings: [user.primaryRole, user.subRole1, user.subRole2],
    });
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateAuth({ ...user, ...userState }));
    notify();
    // history.push('/account');
  };
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
          <h1 className="intro-name">
            {userState.firstName} {userState.lastName}
          </h1>
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
