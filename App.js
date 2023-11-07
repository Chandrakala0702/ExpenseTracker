import React, { useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/views/login";
import DashboardScreen from "./src/views/dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux/store/store";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Expense Tracker Login",
      },
    },
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        title: "Expense Tracker Dashboard",
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Login",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </Provider>
  );
}
