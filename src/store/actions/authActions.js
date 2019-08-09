import axios from 'axios';
import {SET_USER_DATA, GET_ERRORS} from './types';

const registerUser =  (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(resp => {
      dispatch({
        type: SET_USER_DATA,
        payload: resp.data,
      });
      history.push('/');
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    });
}

const loginUser = (userData, history) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(resp => {
      dispatch({
        type: SET_USER_DATA,
        payload: resp.data,
      });
      history.push('/');
    })
    .catch(errors => {
      dispatch({
        type: GET_ERRORS,
        payload: errors.response.data,
      })
    })
}

export {
  registerUser,
  loginUser,
}