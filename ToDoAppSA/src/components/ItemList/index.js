import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function ItemList(props) {
  const { task } = props;

  return (
    <View>
      <View style={styles.listItem}>
        <TouchableOpacity style={styles.itemContent}>
          { !task.done && <MaterialIcons name="radio-button-unchecked" size={24} color="#666" /> }
          { task.done && <Ionicons name="checkmark-circle-sharp" size={24} color="#6519FF" /> }
          <Text style={styles.itemText}>{task.description}</Text>
        </TouchableOpacity>
        { task.done &&
          <TouchableOpacity style={styles.deleteButton}>
            <Ionicons name="trash" size={24} color="#FF435C" />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
