import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Thunderstorm: {
        iconName: "",
        gradient: []
      },
      Drizzle: {
        iconName: "",
        gradient: []
      },
      Rain: {
        iconName: "",
        gradient: []
      },
      Snow: {
        iconName: "",
        gradient: []
      },
      Atmosphere: {
        iconName: "",
        gradient: []
      },
      Clear: {
        iconName: "",
        gradient: []
      },
      Clouds: {
        iconName: "",
        gradient: []
      },
      Haze: {
        iconName: "",
        gradient: []
      },
      Mist: {
        iconName: "",
        gradient: []
      },
      Dust: {
        iconName: "",
        gradient: []
      }
};

export default function Weather({ temp, condition }) {
    return (
            <LinearGradient
                style={styles.container}
                colors={['rgba(0,0,0,0.8)', 'transparent']}
            >
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>

                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 42,
        color:"white"
    }
});