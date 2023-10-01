import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
    marginLeft: 10,
    borderRadius: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  activatedButton: {
    backgroundColor: "#FF435C",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  }
});

export default styles;