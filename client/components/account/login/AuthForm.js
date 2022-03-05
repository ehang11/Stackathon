import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../../store';

import {
  Avatar,
  Button,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="sections">
      <div className="intro">
        <div className="intro-left">
          <div className="img-profile login">
            <img
              src="https://i.pinimg.com/originals/5c/f4/d3/5cf4d3e04820af5be5fb0aed78291f35.gif"
              className="img-profile-welcome"
            />
          </div>
        </div>
        <div className="intro-right">
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} name={name} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                type="text"
                autoComplete="username"
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
                autoComplete="current-password"
                variant="standard"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                <a href="intro">Sign In</a>
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
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
      dispatch(authenticate(username, password, formName));
      // dispatch(getOrders());
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
