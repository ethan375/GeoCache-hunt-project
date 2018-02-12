import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Fetch } from 'react-native';


export default class Login extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }

  handlePress = () =>{
    fetch('url path', {
      method: "post",
      
    })
  }


  render(){
    return(
      <View style={styles.container}>
        <Text style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Use the form below to login
        </Text>
        <TextInput
        placeholder="Email"
        style={styles.form}
        />

        <TextInput
        placeholder="Username"
        style={styles.form}
        />

        <TextInput 
        style={styles.form}
        placeholder="password"
          />

        <Button 
        title="Login"
        style={styles.button}
        onPress={this.handlePress} 
        />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    borderWidth: 1,
    borderColor:'blue',
    width: 250,
    height:30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue'
  }
});