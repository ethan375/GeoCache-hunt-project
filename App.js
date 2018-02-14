import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Register';
import Login from './Login';
import Main from './Main'
import request from 'superagent'
import CreateHunt from './CreateHunt'
import LandingPage from './LandingPage'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      username: '',
      register: false
    }
  }

  //   componentDidMount(){
  //   request
  //   .get('http://localhost:9292/hunts')
  //   .end((err, res)=>{
  //     console.log(err,res)
  //     const parsedHunts = JSON.parse(res.text)
  //     console.log(res.text)
  //   })
  // }

  getUsername = (username) =>{
    console.log(username)
    this.setState({username: username})
  }

  getRegister = (bool) => {
    console.log(bool) 
    this.setState({register: bool})
  }

  render() {
    return (
      <View style={styles.container}>
 {/*       {this.state.username === '' ? this.state.register === true ? <Register /> :<Login getUsername={this.getUsername} getRegister={this.getRegister} /> : <Main />}*/}

        <LandingPage />

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
  },
});
