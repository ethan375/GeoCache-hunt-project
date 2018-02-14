import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Fetch } from 'react-native';
import request from 'superagent'


export default class Register extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
      email: ''
    }
  }

  handlePress = () =>{

    request
      .post('http://localhost:9292/users/register')
      .send ({
        username:this.state.username, 
        password: this.state.password,
        email: this.state.email
      })
      .end((err,res)=>{
        console.log(err, res)
      })
    };



  render(){
    return(
      <View style={styles.container}>
        <Text style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 30
        }}>
          Use the form below to Register
        </Text>

        <Text>
          Email:
        </Text>

        <TextInput
        onChangeText={(email)=> this.setState({email})}
        value={this.state.email}
        placeholder="Email"
        style={styles.form}
        />

        <Text>
          Username:
        </Text>

        <TextInput
        onChangeText={(username)=> this.setState({username})}
        value={this.state.username}
        placeholder="Username"
        style={styles.form}
        />

        <Text>
          Password:
        </Text>

        <TextInput
        secureTextEntry
        onChangeText={(password)=> this.setState({password})}
        value={this.state.password}
        style={styles.form}
        placeholder="password"
          />

        <Button 
        title="Register"
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
    alignItems: 'center',
    margin: 10
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue'
  }
});