import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, FlatList } from 'react-native';
import request from 'superagent'

export default class LandingPage extends Component{
  constructor(){
    super()
    this.state ={
      createHunt: false,
      viewProfile: false,
      logout: false,
      allHunts:[]
    }
  }

  componentDidMount(){
    request
    .get('http://localhost:9292/hunts')
    .end((err,res)=>{
      if (err) console.log(err)
      console.log('_____')
      console.log(res)
      console.log('_____')
      const parsedHunts = JSON.parse(res.text)
      console.log("successfully got all hunts")
      this.setState({allHunts: [...parsedHunts]})
    })
  }


  handleHunt = (e) => {
    this.setState({createHunt: true})
  }
  handleProfile = (e) =>{
    this.setState({viewProfile: true})
  }
  handleLogout = (e) => {
    request
    .get('http://localhost:9292/users/logout')
    .end((err,res)=>{
      console.log(err, res);
    })
  }
  handleHunts = (e) =>{

  }
  logThis = (e) => {
    console.log(hunts)
  }
  render(){
    const hunts = this.state.allHunts.map((hunt, i)=>{
      console.log("_______________________")
      console.log(hunt)
      console.log("_______________________")
      const titleHunt = hunt.title
      return {key: {titleHunt}}
    })
    return(
      <View style={styles.landingContainer}>
        <Button style={styles.landingContainer} title="button" onPress={this.logThis} />
        <FlatList
        data={{hunts}}
        renderItem = {({item})=> <Text style={styles.text}>{item.key}</Text>}
        />

      </View>
      )
  }
}

const styles = StyleSheet.create({
  button: {

  },
  landingContainer: {
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})