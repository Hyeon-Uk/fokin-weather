import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ temp, condition }) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Ionicons name="rainy-outline" size={96}/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
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
    temp:{
        fontSize:42
    }
});