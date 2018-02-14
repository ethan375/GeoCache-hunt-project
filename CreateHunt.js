import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import MapView, { Polyline, Callout, Marker } from 'react-native-maps';
import request from 'superagent'

export default class CreateHunt extends Component{
  constructor(){
    super()
    this.state ={
      latitude: 41.888716,
      longitude: -87.625296,
      zoom: 10,
      moveToForm: false,
      title: '',
      description: '',
      hints: []
    }
  }

  


  onRegionChange = (region) =>{
    this.setState({region: region})
  }


  handleButton = (e) =>{
    this.setState()
  }

  render(){
    return(
      <View>
        <Text style={styles.text}>
        Choose the parameters for the hunts location with the map
        </Text>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          zoomLevel={this.state.zoom}
        >
        </MapView>

        <Button 
        title="Set coordinates"
        onPress={this.handleButton}
        />


        <Text>
        What is the Title of your hunt?
        </Text>
        <TextInput
        style={styles.form} 
        onChangeText={(title)=>{
          this.setState({title})
        }}
        />

        <Text>
        Please enter a breif description of your hunt.
        </Text>
        <TextInput 
        style={styles.form}
        onChangeText={(description)=>{this.setState({description})}}
        />

        <Button 
        onPress={this.setState({moveToForm: true})}
        />

      </View>
      )
  }
}


const styles = StyleSheet.create ({
  map:{
    height: 300,
    width: 300,
    marginLeft: 40
  },
  form: {
    margin: 15,
    borderWidth:1,
    borderColor: 'blue'
  },
  text: {
    margin: 25
  }
})