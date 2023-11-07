import React from "react";
import { View, Text } from "react-native";
import { styles as dashboard_styles } from "./styles";

const DashboardScreen = () => {
  return (
    <View style={dashboard_styles.container}>
      <Text>Welcome to the Expense Tracker Dashboard!</Text>
    </View>
  );
};

export default DashboardScreen;
