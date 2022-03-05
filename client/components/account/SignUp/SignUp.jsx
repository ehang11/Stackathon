import * as React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../../store';
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
import CssBaseline from '@mui/material/CssBaseline';

const SignUp = (props) => {
  const { name, handleSubmit, error } = props;

  return (
    <div id="create">
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <div className="work-container-item">
          <Box
            sx={{
              display: 'list-item',
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
            <Box component="form" noValidate onSubmit={handleSubmit} name={name} sx={{ mt: 3 }}>
              <Grid container spacing={12}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    id="username"
                    label="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField required id="lastName" label="Last Name" name="lastName" type="text" autoComplete="family-name" />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" type="text" autoComplete="email" />
                </Grid>
                <Grid item xs={6} item sm={6}>
                  <TextField
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="secondary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Complete Profile
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
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
