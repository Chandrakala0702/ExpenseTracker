import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles as dashboard_styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarMonthView from "../../components/calendar-month";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/loginActions";

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={dashboard_styles.container}>
      <View style={dashboard_styles.headerContainer}>
        <Text style={dashboard_styles.headerLabel}>Spending Dashboard</Text>
        <Pressable onPress={handleLogout}>
          <Text style={dashboard_styles.headerLabel}>Logout</Text>
        </Pressable>
      </View>

      <View style={dashboard_styles.innerContainer}>
        <View style={dashboard_styles.titleView}>
          <Text style={dashboard_styles.summaryTitle}>Spending Summary</Text>
          <Pressable>
            <Text
              style={[
                dashboard_styles.summaryTitle,
                dashboard_styles.editTitle,
              ]}
            >
              Edit
            </Text>
          </Pressable>
        </View>
        <View style={dashboard_styles.monthView}>
          <CalendarMonthView />
        </View>
        <View style={dashboard_styles.chartContainer}></View>
        <View style={[dashboard_styles.titleView, { marginBottom: 0 }]}>
          <Text style={dashboard_styles.chartSummaryTitle}>Spending Limit</Text>
          <Text style={dashboard_styles.chartSummaryTitle}>Amount Spent</Text>
        </View>
        <View style={[dashboard_styles.titleView, { marginBottom: "2%" }]}>
          <Text style={dashboard_styles.charSummaryValueText}>AED 4567.78</Text>
          <Text style={dashboard_styles.charSummaryValueText}>AED 898.90</Text>
        </View>
        <View style={dashboard_styles.categoryContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
