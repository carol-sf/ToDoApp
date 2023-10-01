import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Form() {
  const [task, setTask] = useState("");

  const sendButton = isTaskFilled() ? styles.activatedButton : styles.disabledButton;

  function isTaskFilled() {
    return task !== "";
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
      >
        <MaterialIcons name="send" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
