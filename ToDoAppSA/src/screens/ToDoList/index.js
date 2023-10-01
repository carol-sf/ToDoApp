import { Keyboard, Pressable, Text, View } from "react-native";
import styles from "./styles";
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { useState } from "react";

export default function ToDoList() {
  const [filter, setFilter] = useState("todo");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Text style={styles.appTitle}>ToDoList</Text>
      <Form/>
      <Filter onFilterChange={handleFilterChange}/>
      <List filter={filter}/>
    </Pressable>
  );
}
