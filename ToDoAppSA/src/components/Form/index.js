import { TextInput, TouchableOpacity,View, Alert} from "react-native";
import styles from "./styles";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import{saveTask} from "../../RequisicoesFB/RequisicoesFB";


export default function Form() {
  const [task, setTask] = useState("");

  const sendButton = isTaskFilled() ? styles.activatedButton : styles.disabledButton;

  function isTaskFilled() {
    return task !== "";
  }

  async function save() {
      const resultado = await saveTask(task);
      if(resultado === 'erro'){
          Alert.alert("Erro", "Erro ao salvar tarefa");
          return;
      }
      setTask("");

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa"
        onChangeText={(task) => setTask(task)}
        value={task}
      />
      <TouchableOpacity
        style={[styles.button, sendButton]}
        disabled={!isTaskFilled}
        onPress={() => save()}
      >
        <MaterialIcons name="send" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
