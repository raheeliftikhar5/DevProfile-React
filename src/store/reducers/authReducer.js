import {SET_USER_DATA} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
}

export default authReducer;