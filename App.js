import React from 'react';
import Loading from './Loading';
import * as Location from'expo-locaiton';

export default class extends React.Component {
  getLocation=async function(){
    const location=await Location.getCurrentPositionAsync();
    console.log(location);
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    return(
    <Loading>

    </Loading>);
  };
}
