import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../../store';
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
  const [values, setValues] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',

    primaryRole: user.primaryRole || '',
    subRole1: user.subRole1 || user.primaryRole,
    subRole2: user.subRole2 || user.primaryRole,
    profilePicture_URL: user.profilePicture_URL || '',
    linkedIn_URL: user.linkedIn_URL || '',
    gitHub_URL: user.gitHub_URL || '',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                variant="standard"
                fullWidth
                margin="normal"
                required
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
              />

              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                variant="standard"
              /> */}
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
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName, email));
    },
  };
};

export default connect(mapSignup, mapDispatch)(SignUp);
