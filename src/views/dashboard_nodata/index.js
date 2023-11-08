import React from "react";
import { View, Text } from "react-native";
import { styles as dashboard_styles } from "./styles";
import { ProgressCircle } from "react-native-svg-charts";
import EmptyDataView from "../emptyDataView";

const DashboardWithNoDataScreen = () => {
  return (
    <>
      <View style={{ flex: 0.85 }}>
        <ProgressCircle
          style={dashboard_styles.progressCircle}
          progress={0}
          progressColor="rgb(134, 65, 244)"
          startAngle={Math.PI * 0.5}
          endAngle={-Math.PI * 0.5}
          strokeWidth={10}
          cornerRadius={10}
        />
        <Text style={dashboard_styles.progressPercentageText}>{"0%"}</Text>
        <Text style={dashboard_styles.progressText}>{"Total Spendings"}</Text>
      </View>
      <View style={[dashboard_styles.titleView, { marginBottom: 0 }]}>
        <Text style={dashboard_styles.chartSummaryTitle}>Spending Limit</Text>
        <Text style={dashboard_styles.chartSummaryTitle}>Amount Spent</Text>
      </View>
      <View style={[dashboard_styles.titleView, { marginBottom: 0 }]}>
        <Text style={dashboard_styles.charSummaryValueText}>AED 0</Text>
        <Text style={dashboard_styles.charSummaryValueText}>AED 0</Text>
      </View>
      <View style={dashboard_styles.categoryContainer}>
        <EmptyDataView />
      </View>
    </>
  );
};

export default DashboardWithNoDataScreen;
