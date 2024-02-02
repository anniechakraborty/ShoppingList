import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Image 
        source={{
          // uri: 'https://randomuser.me/api/portaits/men/1.jpg'
          uri : 'https://picsum.photos/100?random=1'
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text : {
    fontSize: 40
  },
  image : {
    width: 100,
    height: 100,
    borderRadius: 100/2
  }
});

export default App;