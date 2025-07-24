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

//** In this example,  we will create a responsive Button which displays Alert Component, using the react-native Button component.
/*
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
}*/

//*** Flat List

/*
import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";

class App extends Component {
  state = {
    data: [
      "Data Structures",
      "STL",
      "C++",
      "Java",
      "Python",
      "ReactJS",
      "Angular",
      "NodeJs",
      "PHP",
      "MongoDb",
      "MySql",
      "Android",
      "iOS",
      "Hadoop",
      "Ajax",
      "Ruby",
      "Rails",
      ".Net",
      "Perl",
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item}</Text>
      <Icon name="eye" type="ionicon" color="#C2185B" />
    </View>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.screen}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
  },
  row: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  rowText: {
    fontSize: 18,
  },
});

*/
//export default App;

import React from 'react';
import { FlatList, View, Text } from 'react-native';

const MyFlatList = () => {
  const data = [{ key: 'item1' }, { key: 'item2' }, { key: 'item3' }];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.key}</Text>
        </View>
      )}
    />
  );
};

export default MyFlatList;