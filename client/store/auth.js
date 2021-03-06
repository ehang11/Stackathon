import axios from 'axios';
import history from '../history';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';
const UPDATE_AUTH = 'UPDATE_AUTH';
/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const updateAuth = (user) => async (dispatch) => {
  try {
    const res = await axios.put(`api/users/${user.id}`, user);
    console.log('RES DATA', res.data);
    return dispatch(setAuth(user));
  } catch (err) {
    console.log(err);
  }
};
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (
    username,
    password,
    method,
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
  ) =>
  async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        username,
        password,
        email,
        firstName,
        lastName,
        phoneNumber,
        primaryRole,
        subRole1,
        subRole2,
        profilePicture_URL,
        linkedIn_URL,
        gitHub_URL,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push('/login');
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case UPDATE_AUTH:
      return action.auth;
    default:
      return state;
  }
}
