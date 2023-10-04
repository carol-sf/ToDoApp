import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import {changeState, deleteTask} from "../../RequisicoesFB/RequisicoesFB";
import styles from "./styles";

export default function ItemList(props) {
  const { task } = props;

  async function removeTask(){
    await deleteTask(task.id);
    
  }
  async function check() {
    await changeState(task);
  }
  return (
    <View>
      <View style={styles.listItem}>
        <TouchableOpacity style={styles.itemContent} onPress={()=> check()}>
          { !task.done && <MaterialIcons name="radio-button-unchecked" size={24} color="#666"  /> }
          { task.done && <Ionicons name="checkmark-circle-sharp" size={24} color="#6519FF" /> }
          <Text style={styles.itemText}>{task.description}</Text>
        </TouchableOpacity>
        { task.done &&
          <TouchableOpacity style={styles.deleteButton}onPress={()=> removeTask()}>
            <Ionicons name="trash" size={24} color="#FF435C" />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}
