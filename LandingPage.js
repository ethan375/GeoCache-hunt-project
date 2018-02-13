import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class LandingPage extends Component{
  render(){
    return(
      <View>
        <Button
        style={style.button} 
        title="Register"
        onPress={this.register}
        />
        <Button 
        style={style.button}
        title="Login"
        onPress={this.login}
        />
      </View>
      )
  }
}

const style = StyleSheet.create({
  button: {
    
  }
})