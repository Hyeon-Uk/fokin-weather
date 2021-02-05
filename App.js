import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from 'axios';

const APP_KEY="241051bf13976dd3ddf8b8d9f247255e";

export default class extends React.Component {
  state={
    isLoading:true
  }

  getWeather=async (latitude, longitude) => {
    const {data}= await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APP_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      temp:data.main.temp
    });
  }
  getLocation=async function(){
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const{isLoading,temp}=this.state;
    return isLoading?<Loading></Loading>:<Weather temp={Math.round(temp)}></Weather>;
  };
}
