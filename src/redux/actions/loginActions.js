import * as actionTypes from "../actionTypes/loginActionTypes";

export const setUsername = (username) => {
  return {
    type: actionTypes.SET_USERNAME,
    payload: username,
  };
};
export const setPassword = (password) => {
  return {
    type: actionTypes.SET_PASSWORD,
    payload: password,
  };
};

export const setLoginError = (error) => {
  return {
    type: actionTypes.SET_LOGIN_ERROR,
    payload: error,
  };
};

export const login = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
};
