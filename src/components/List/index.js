import { FlatList, Text, View, RefreshControl } from "react-native";
import styles from "./styles";
import ItemList from "../ItemList";
import React,{ useEffect,useState } from "react";
import {loadData} from '../../RequisicoesFB/RequisicoesFB'

export default function List(props) {
  useEffect(() => {
    load();
  }),[];

  async function load(){
    const data = await loadData(filter=='todo'?false:true);
    setData(data);
  }
  const { filter } = props;
  const [data, setData] = useState([]);
 

  function renderItem({ item }) {
    return <ItemList task={item} />;
  }

  return (
    <View>
      { filter === 'todo' && <Text style={styles.listTitle}>Tarefas a fazer</Text>}
      { filter === 'done' && <Text style={styles.listTitle}>Tarefas Concluidas</Text> }
      
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
