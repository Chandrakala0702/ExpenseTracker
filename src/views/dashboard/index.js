import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles as dashboard_styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarMonthView from "../../components/calendar_month";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { ProgressCircle } from "react-native-svg-charts";
import IconWithProgressBar from "../../components/progress_icon";
import { calculateOverallSpending } from "../../redux/actions/dashboardActions";
import DashboardWithNoDataScreen from "../dashboard_nodata";
import { DashboardConstant } from "../../utility/constants";

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

  useEffect(() => {
    dispatch(calculateOverallSpending());
  }, [dashboardState.categoryData]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  const handleMonthArrowPress = (value) => {
    setShowNoDataDashboard(!value);
  };
  const handleEdit = () => {
    navigation.navigate("EditSpentLimit");
  };

  return (
    <SafeAreaView style={dashboard_styles.container}>
      <View style={dashboard_styles.headerContainer}>
        <Text style={dashboard_styles.headerLabel}>
          {DashboardConstant.title.spendingDashboard}
        </Text>
        <Pressable onPress={handleLogout}>
          <Text style={dashboard_styles.headerLabel}>
            {DashboardConstant.title.logout}
          </Text>
        </Pressable>
      </View>

      <View style={dashboard_styles.innerContainer}>
        <View style={dashboard_styles.titleView}>
          <Text style={dashboard_styles.summaryTitle}>
            {DashboardConstant.title.spendingSummary}
          </Text>
          <Pressable onPress={handleEdit}>
            <Text
              style={[
                dashboard_styles.summaryTitle,
                dashboard_styles.editTitle,
              ]}
            >
              {DashboardConstant.title.edit}
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
                    ? parseFloat(
                        selectedCategory.spentAmount /
                          selectedCategory.spentAmountLimit
                      ).toFixed(1)
                    : parseFloat(
                        dashboardState.overallSpentPercentage / 100
                      ).toFixed(1)
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
                {selectedCategory
                  ? spentAmountCategory
                  : DashboardConstant.title.totalSpendings}
              </Text>
            </View>
            <View style={[dashboard_styles.titleView, { marginBottom: 0 }]}>
              <Text style={dashboard_styles.chartSummaryTitle}>
                {DashboardConstant.title.spendingLimit}
              </Text>
              <Text style={dashboard_styles.chartSummaryTitle}>
                {DashboardConstant.title.amountSpent}
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
                {DashboardConstant.title.AED}{" "}
                {selectedCategory
                  ? totalSpendLimit
                  : dashboardState.overallAmountLimit}
              </Text>
              <Text style={dashboard_styles.charSummaryValueText}>
                {DashboardConstant.title.AED}{" "}
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
