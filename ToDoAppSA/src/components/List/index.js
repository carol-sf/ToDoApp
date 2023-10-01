import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import ItemList from "../ItemList";

export default function List(props) {
  const { filter } = props;

  const data = [
    {id: 1, done: true, description: "Passear com os cães" },
    {id: 2, done: false, description: "Tomar banho" },
    {id: 3, done: false, description: "Ir para a faculdade" }
  ];

  function renderItem({ item }) {
    return <ItemList task={item} />;
  }

  return (
    <View>
      { filter === 'todo' && <Text style={styles.listTitle}>Tarefas a fazer</Text> }
      { filter === 'done' && <Text style={styles.listTitle}>Tarefas Concluidas</Text> }
      
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
