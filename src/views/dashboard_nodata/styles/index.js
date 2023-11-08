import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#F1F0F5",
    padding: 10,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
  },
  chartSummaryTitle: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
  },
  charSummaryValueText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#1D1D2C",
  },
  editTitle: {
    textDecorationLine: "underline",
  },
  monthView: {
    height: "8%",
    flexDirection: "row",
    marginBottom: "2%",
  },
  titleView: {
    height: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "5%",
  },
  innerContainer: {
    height: "75%",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  headerLabel: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
  },
  headerContainer: {
    height: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    marginBottom: "5%",
  },
  chartContainer: {
    height: 150,
    marginBottom: "2%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
