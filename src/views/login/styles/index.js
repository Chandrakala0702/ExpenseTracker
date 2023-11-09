import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#E4F4F3",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  button: {
    height: "70%",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: "#41D9D4",
    backgroundColor: "#41D9D4",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  logoContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    height: "30%",
    justifyContent: "center",
    width: "100%",
  },
  loginButton: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
