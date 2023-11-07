import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/views/login";
import DashboardScreen from './src/views/dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from "./src/redux/store/store";
import { Provider } from 'react-redux';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Expense Tracker Login",
    },
  },
  Dashboard: {
    screen: DashboardScreen, // Add your Dashboard screen here
    navigationOptions: {
      title: 'Expense Tracker Dashboard',
      headerShown: false,
    },
  }},
  {
    initialRouteName: 'Login', // Set the initial route to the Login screen
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
    </Provider>
  );
}
