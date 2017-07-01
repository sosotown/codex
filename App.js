import React from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import { StyleSheet, Text, View } from 'react-native';

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'CODEX',
};

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SideMenu menu="menu">
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
          />
          <ContentView/>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
});
