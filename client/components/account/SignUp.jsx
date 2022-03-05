import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const theme = createTheme();

const SignUp = (props) => {
  const { name, handleSubmit, error } = props;
  const { auth: user } = useSelector((state) => state);

  return (
    <div className="sections">
      <div className=".signup-container">
        <div className="signup-left ">
          <div className="img-profile login"></div>
        </div>
        <div className=".signup-right">
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <img
                src="https://i.pinimg.com/originals/33/ff/7c/33ff7c9c228c36dbc291964663e0f4a9.gif"
                className="intro-img-profile"
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} name={name} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="_username"
                label="Username"
                name="username"
                type="text"
                variant="standard"
              />
              <TextField required fullWidth name="firstName" id="_firstName" label="First Name" type="text" variant="standard" />
              <TextField required fullWidth id="_lastName" label="Last Name" name="lastName" type="text" variant="standard" />
              <TextField
                required
                fullWidth
                id="_email"
                label="Email Address"
                name="email"
                type="text"
                autoComplete="email"
                variant="standard"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
                type="text"
                variant="standard"
              />

              <TextField
                margin="normal"
                fullWidth
                name="profilePicture_URL"
                id="profilePicture_URL"
                label="Profile URL"
                type="text"
                variant="standard"
              />

              <TextField
                margin="normal"
                fullWidth
                name="primaryRole"
                id="primaryRole"
                label="Type of Developer"
                type="text"
                variant="standard"
              />

              <TextField
                margin="normal"
                fullWidth
                name="linkedIn_URL"
                id="linkedIn_URL"
                label="LinkedIn URL"
                type="text"
                variant="standard"
              />

              <TextField
                margin="normal"
                fullWidth
                name="gitHub_URL"
                id="gitHub_URL"
                label="Github URL"
                type="text"
                variant="standard"
              />

              <TextField
                margin="normal"
                fullWidth
                name="subRole1"
                id="subRole1"
                label="Additional roles "
                type="text"
                variant="standard"
              />
              <TextField
                margin="normal"
                fullWidth
                name="subRole2"
                id="subRole2"
                label="Additional roles"
                type="text"
                variant="standard"
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                <a href="intro">Sign Up</a>
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;

      //not requested
      const phoneNumber = evt.target.phoneNumber.value || '';
      const primaryRole = evt.target.primaryRole.value || '';
      const subRole1 = evt.target.subRole1.value || '';
      const subRole2 = evt.target.subRole2.value || '';
      const profilePicture_URL = evt.target.profilePicture_URL.value || '';
      const linkedIn_URL = evt.target.linkedIn_URL.value || '';
      const gitHub_URL = evt.target.gitHub_URL.value || '';

      dispatch(
        authenticate(
          username,
          password,
          formName,
          email,
          firstName,
          lastName,
          phoneNumber,
          primaryRole,
          subRole1,
          subRole2,
          profilePicture_URL,
          linkedIn_URL,
          gitHub_URL
        )
      );
    },
  };
};

export default connect(mapSignup, mapDispatch)(SignUp);
