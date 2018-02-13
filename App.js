import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import CreateHunt from './CreateHunt'
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
});
