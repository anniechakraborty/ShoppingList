import React from "react";
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddItem = (props) => {
  return (
    <View>
        <TextInput placeholder="Add item" style={styles.input}/>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
                <FontAwesome6 name="plus" size={20} />
                Add Item
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input : {
    height : 60,
    padding : 8,
    fontSize : 16,
  },
  btn : {
    backgroundColor: '#c2bad8',
    padding : 9,
    margin : 5,
  },
  btnText : {
    color : 'darkslateblue',
    fontSize : 20,
    textAlign : 'center',
  }
});


export default AddItem;