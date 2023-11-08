import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  imageContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 100, height: 90 },
  textContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  noDataTextLabel: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
    color: "#1D1D2C",
    textAlign: "center",
  },
  noDataMessageLabel: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat-Normal",
    color: "#53545D",
    textAlign: "center",
    marginTop: "1%",
  },
});
