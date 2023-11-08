import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  summaryTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
  },
  chartSummaryTitle: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#1D1D2C",
    textAlign: "center",
  },
  charSummaryValueText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#1D1D2C",
    textAlign: "center",
    width: "30%",
  },
  titleView: {
    height: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "5%",
    width: "100%",
  },
  categoryContainer: {
    height: "37.5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircle: { height: 300, width: "100%" },
  progressPercentageText: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "500",
    alignSelf: "center",
    top: "40%",
    fontFamily: "SpaceGrotesk-Light",
  },
  progressText: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "center",
    top: "60%",
    fontFamily: "SpaceGrotesk-Light",
  },
});
