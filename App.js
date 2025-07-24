/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
  //return (
    //<View style={styles.container}>
      //<Text>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
  //);
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
 // },
//});
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GeeksforGeeks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
});
*/
//we are importing two basics built in components Text and View of React Native from the react-native library.
/*import * as React from "react";

// Importing components from react-native library.
import { View, Text } from "react-native";

export default function App() {
  return (

    // Using react-natives built in components.
    <View
      style={{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <Text
        style={{
          color: "black",
        }}>
        Hi Amrutha
      </Text>
    </View>
  );
}*/

//In this example,  we will create a responsive Button which displays Alert Component, using the react-native Button component.
import * as React from "react";

// Importing components from react-native library.
import { Alert, View, StyleSheet, Button } from "react-native";

export default function App() {

  // Alert is used to show alert messages.
  const onPressButton = () => {
    Alert.alert('Welcome To My React Native Application..')
  }

  // StyleSheet is used to create styles for the components.
  const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',

    }
  })

  return (

    // Using react-natives built in components.
    <View style={styles.container}>

      <Button onPress={onPressButton}
              title="Press Me" color="yellow" />

    </View>
  );
}