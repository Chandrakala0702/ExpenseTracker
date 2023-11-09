import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  arrow: {
    fontSize: 18,
    color: "#1D1D2C",
  },
  monthYear: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
    textDecorationLine: "underline",
  },
  arrowBackground: {
    backgroundColor: "#F1F0F5",
    borderRadius: 8,
    padding: 10,
  },
  disabledArrow: {
    color: "grey",
  },
});
