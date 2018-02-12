import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet} from 'react-native';

export default class CreateHunt extends Component{
  render(){
    return(
      <View>
        <Text>
          Fill out the forms below to make the hints for the hunt
        </Text>
        <TextInput
        style={styles.form}
        placeholder="hint"
        />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderColor: 'blue'
  }
})