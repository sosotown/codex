import React from 'react';
import { StackNavigator } from 'react-navigation';
import SideMenu from 'react-native-side-menu';
import { StyleSheet, Text, View } from 'react-native';

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CODEX
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CODEX',
  };
  render() {
    return (
      <SideMenu>
        <ContentView/>
      </SideMenu>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default App

const styles = StyleSheet.create({
  fontWhite: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
