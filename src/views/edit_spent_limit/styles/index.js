import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0F5",
  },
  headerLabel: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#1D1D2C",
  },
  headerValue: {
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
    color: "#1D1D2C",
  },
  headerContainer: {
    height: "20%",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    marginBottom: "5%",
    backgroundColor: "white",
    paddingHorizontal: "5%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
  },
  sliderContainer: {
    height: "65%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    paddingHorizontal: "5%",
  },
});
