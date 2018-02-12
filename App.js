import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import CreateHunt from './CreateHunt'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateHunt />
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
