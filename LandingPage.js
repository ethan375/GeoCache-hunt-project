import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import reuest from 'superagent'

export default class LandingPage extends Component{
  constructor(){
    super()
    this.state ={
      createHunt: false,
      viewProfile: false,
      logout: false,
    }
  }


  handleHunt = (e) => {

  }
  handleProfile = (e) =>{

  }
  handleLogout = (e) => {

  }
  handleHunts = (e) =>{

  }
  render(){
    const allHunts = 
    return(
      <View>
        <Text>
          <Button 
          title="Create hunt"
          onPress={this.function}
          />
          <Button 
          title="View Profile"
          onPress={this.function}
          />
          <Button 
          title="Logout"
          onPress={this.function}
          />
          <Button 
          title="Hunts"
          onPress={this.function}
          />

        </Text>
      </View>
      )
  }
}

const style = StyleSheet.create({
  button: {

  }
})