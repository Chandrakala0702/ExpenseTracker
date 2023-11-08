import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sliderItemContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  sliderItem: {
    height: "13%",
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  sliderTitleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
  },
  sliderTitleIconContainer: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sliderIconTitleText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "SpaceGrotesk-Light",
    color: "#1D1D2C",
    paddingLeft: "3%",
  },
  sliderRightIconText: {
    paddingRight: "5%",
    paddingLeft: 0,
  },
  sliderStyle: { width: 300, marginTop: -40 },
  sliderValueContainer: {
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -15,
  },
  sliderValueText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#1D1D2C",
  },
});
