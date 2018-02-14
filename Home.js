import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class Home extends Component{
  constructor(){
    super()
    this.state = {
      x:33,
      latitude: 30.888916,
      longitude: -87.623102,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421    }
  }

  handleLat = (e) => {
    this.setState({latitude:parseInt(e.currentTarget.vaule)})
  }

  handleLong = (e) =>{
    this.setState({longitude:parseInt(e.currentTarget.value)})
  }

  handleSubmit = (e) =>{
    console.log("make a post request to the server and shit man")
    console.log("thats fucking lit")
  }


  render(){
    return(
        <View>
          <MapView
          style={styles.map}
          region={this.state}
          />

          <Text>
            Latitude:
          </Text>
          <TextInput 
          style={styles.input}
          onChange={this.handleLat}
          value={this.state.latitude.toString()}
          />

          <Text>
            Longitude:
          </Text>
          <TextInput 
          onChange={this.handleLong}
          style={styles.input}
          value={this.state.longitude.toString()}
          />
          <Button 
          title="Submit"
          onPress={this.handleSubmit}
          />
        </View>

      )
  }
}

const styles = StyleSheet.create({
  map:{
    width: 300,
    height: 300
  },
  input: {
    borderWidth:1,
    borderColor: 'blue',
    margin: 10
  }
})