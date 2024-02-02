import React, {useState} from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import ListItem from "./components/List_Item";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk'
    },
    {
      id: 2,
      text: 'Eggs'
    },
    {
      id: 3,
      text: 'Bread'
    },
    {
      id: 4,
      text: 'Juice'
    },
  ]);
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <FlatList 
        data={items}
        renderItem={
          // passing {item} in the call back function call will access every element in the array accessed by the data prop above
          ({item})=>(
            <ListItem item={item}/>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
});

export default App;