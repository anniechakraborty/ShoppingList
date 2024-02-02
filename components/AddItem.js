import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AddItem = (props) => {
    const [text, setText] = useState('');
    const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Add item" style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={
                ()=> {
                    // if(text === ''){
                    //     Alert.alert('Error', 'Please enter a valid item', {text : 'Ok'});
                    // }
                    // else{
                    //     props.addItem(text);
                    //     setText('');
                    // }
                    props.addItem(text);
                    setText('');
                }
            }>
                <Text style={styles.btnText}>
                    <FontAwesome6 name="plus" size={20} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});


export default AddItem;