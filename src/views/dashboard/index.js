import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles as dashboard_styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarMonthView from "../../components/calendar-month";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { ProgressCircle } from "react-native-svg-charts";
import IconWithProgressBar from "../../components/progress-icon";
import { calculateOverallSpending } from "../../redux/actions/dashboardActions";
import DashboardWithNoDataScreen from "../dashboard_nodata";

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const dashboardState = useSelector((state) => state.dashboard);
  const [totalSpendLimit, setTotalSpendLimit] = useState(0);
  const [totalAmountSpent, setTotalAmountSpent] = useState(0);
  const [spentPercentage, setSpentPercentage] = useState(0);
  const [spentAmountCategory, setSpentAmountCategory] = useState(null);
  const selectedCategory = dashboardState.selectedCategory;
  const [showNoDataDashboard, setShowNoDataDashboard] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setTotalSpendLimit(selectedCategory.spentAmountLimit);
      setTotalAmountSpent(selectedCategory.spentAmount);
      setSpentAmountCategory(selectedCategory.text);
      setSpentPercentage(
        (
          (selectedCategory.spentAmount / selectedCategory.spentAmountLimit) *
          100
        ).toFixed(0) + "%"
      );
    } else {
      dispatch(calculateOverallSpending());
    }
  }, [selectedCategory]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  const handleMonthArrowPress = (value) => {
    setShowNoDataDashboard(!value);
  };
  const handleEdit = () => {};

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
          <Pressable onPress={handleEdit}>
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
          <CalendarMonthView handleMonthArrowPress={handleMonthArrowPress} />
        </View>
        {!showNoDataDashboard ? (
          <>
            <View style={{ flex: 0.85 }}>
              <ProgressCircle
                style={dashboard_styles.progressCircle}
                progress={
                  selectedCategory
                    ? (
                        selectedCategory.spentAmount /
                        selectedCategory.spentAmountLimit
                      ).toFixed(1)
                    : (dashboardState.overallSpentPercentage / 100).toFixed(1)
                }
                progressColor="rgb(134, 65, 244)"
                startAngle={Math.PI * 0.5}
                endAngle={-Math.PI * 0.5}
                strokeWidth={10}
                cornerRadius={10}
              />
              <Text style={dashboard_styles.progressPercentageText}>
                {selectedCategory
                  ? spentPercentage
                  : dashboardState.overallSpentPercentage + "%"}
              </Text>
              <Text style={dashboard_styles.progressText}>
                {selectedCategory ? spentAmountCategory : "Total Spendings"}
              </Text>
            </View>
            <View style={[dashboard_styles.titleView, { marginBottom: 0 }]}>
              <Text style={dashboard_styles.chartSummaryTitle}>
                Spending Limit
              </Text>
              <Text style={dashboard_styles.chartSummaryTitle}>
                Amount Spent
              </Text>
            </View>
            <View
              style={[
                dashboard_styles.titleView,
                {
                  marginBottom: 0,
                },
              ]}
            >
              <Text style={dashboard_styles.charSummaryValueText}>
                {"AED"}{" "}
                {selectedCategory
                  ? totalSpendLimit
                  : dashboardState.overallAmountLimit}
              </Text>
              <Text style={dashboard_styles.charSummaryValueText}>
                {"AED"}{" "}
                {selectedCategory
                  ? totalAmountSpent
                  : dashboardState.overAllSpentAmount}
              </Text>
            </View>
            <View style={dashboard_styles.categoryContainer}>
              <IconWithProgressBar />
            </View>
          </>
        ) : (
          <DashboardWithNoDataScreen />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
