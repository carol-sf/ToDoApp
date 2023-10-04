import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  filterButon: {
    width: "50%",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  todoFilter: {
    backgroundColor: "#FF435C",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  doneFilter: {
    backgroundColor: "#6519FF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  filterText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
