import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import dashboardReducer from "../reducers/dashboardReducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
