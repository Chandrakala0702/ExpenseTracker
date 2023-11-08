import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  progressCircle: {
    height: 47,
    width: 47,
    borderRadius: 30,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#1D1D2C",
  },
});
