import AsyncStorage from "@react-native-community/async-storage";
import * as actionTypes from "../actionTypes/loginActionTypes";

const initialState = {
  isAuthenticated: false,
  username: "chandrabasker.95@gmail.com",
  password: "Chandra@123$",
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
        state.password == "Chandra@123$"
      ) {
        AsyncStorage.setItem("isAuthenticated", "true");
        return { ...state, isAuthenticated: true, error: "" };
      } else {
        AsyncStorage.setItem("isAuthenticated", "false");
        return {
          ...state,
          isAuthenticated: false,
          error: "Invalid Credentials",
        };
      }
    case actionTypes.LOGOUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
