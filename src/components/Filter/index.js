import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState("todo");

  function handleFilterChange (newFilter) {
    setFilter(newFilter);
    onFilterChange(newFilter); 
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.filterButon, styles.todoFilter]}
        onPress={() => handleFilterChange("todo")}
      >
        <Text style={styles.filterText}>Fazer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButon, styles.doneFilter]}
        onPress={() => handleFilterChange("done")}
      >
        <Text style={styles.filterText}>Concluidas</Text>
      </TouchableOpacity>
      
    </View>
  );
}
