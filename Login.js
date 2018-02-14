import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Fetch } from 'react-native';
import request from 'superagent'


export default class Login extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
      email: '',
      register: false
    }
  }

  handlePress = () =>{

    request
      .post('http://localhost:9292/users/login')
      .send ({
        username:this.state.username, 
        password: this.state.password,
        email: this.state.email
      })
      .end((err,res)=>{
        //console.log(err, res)
      })
      this.props.getUsername(this.state.username)
    };



  render(){
    return(
      <View style={styles.container}>
        <Text style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 30
        }}>
          Use the form below to Login
        </Text>

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
        title="Login"
        style={styles.button}
        onPress={this.handlePress} 
        />
        <Button 
        title="Not a user?  Register here"
        onPress={ (register)=>{
            this.setState({register: true}); 
            this.props.getRegister(true);
          } 
        }
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
    // backgroundColor: '#C0C0C0'
  },
  form: {
    borderWidth: 1,
    borderColor:'blue',
    width: 250,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue'
  }
});