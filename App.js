import React, { useEffect } from "react";
import LoginScreen from "./src/views/login";
import DashboardScreen from "./src/views/dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux/store/store";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import EditSpentLimitScreen from "./src/views/edit_spent_limit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate, navigationRef } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
      if (isAuthenticated == "true") {
        navigate("Dashboard");
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={"Login"}
            screenOptions={{
              gestureEnabled: false,
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false, title: "Expense Tracker Login" }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                headerShown: false,
                title: "Expense Tracker Dashboard",
              }}
            />
            <Stack.Screen
              name="EditSpentLimit"
              component={EditSpentLimitScreen}
              options={{
                headerShown: false,
                title: "Edit Expense Spent Limit",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
