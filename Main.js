import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LandingPage from './LandingPage';
import request from 'superagent'

export default class Main extends Component {
  constructor(){
    super()
    this.state ={
      hunts:[]
    }
  }

    componentDidMount(){
    request
    .get('http://localhost:9292/hunts')
    .end((err, res)=>{
      console.log(err,res)
      console.log(res.text)
      const parsedHunts = JSON.parse(res.text)
      this.setState({hunts: [...parsedHunts]})
      console.log(this.state)
    })
  }

  render(){
    return( 
      <LandingPage allHunts={this.state.hunts}/>
      <HuntDetails allHunts={this.state.hunts}/>
      )
  }
}