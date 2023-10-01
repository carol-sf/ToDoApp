import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listItem: {
      backgroundColor: "#fff",
      padding: 20,
      flexDirection: "row",
      borderRadius: 10,
      marginBottom:10
    },
    itemContent: {
      flexDirection: "row",
      width: "93%",
      alignItems: "center",
    },
    itemText: {
      fontSize: 20,
      color: "#666",
      marginLeft: 5,
    },
    deleteButton: {
      alignSelf: "flex-end",
    }
});

export default styles;