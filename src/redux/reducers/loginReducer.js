import * as actionTypes from "../actionTypes/loginActionTypes";

const initialState = {
  isAuthenticated: false,
  username: "chandrabasker.95@gmail.com",
  password: "SOM@React@1",
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case actionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.LOGIN_REQUEST:
      if (
        state.username == "chandrabasker.95@gmail.com" &&
        state.password == "SOM@React@1"
      ) {
        return { ...state, isAuthenticated: true, error: "" };
      } else {
        return {
          ...state,
          isAuthenticated: false,
          error: "Invalid Credentials",
        };
      }
    default:
      return state;
  }
};

export default loginReducer;
