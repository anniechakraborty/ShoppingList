import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const delIcon = <FontAwesome6 name='remove' size={20} color="firebrick" />;

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}> {item.text} </Text>
            <FontAwesome6 name='trash' size={20} color="firebrick" onPress={()=> deleteItem(item.id)}/>
        </View>      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem : {
        padding: 20,
        backgroundColor: '#C7C9CD',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText : {
        fontSize: 18,
        color: '#000'
    }
});

export default ListItem;