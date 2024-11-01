import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import Button from '../components/Button';
import DeviceList from '../components/DeviceList'

const HomePage = () => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.boldtext}>Device Connection</Text>
                <View style={styles.buttonArea}>
                    <Button ></Button>
                </View>
            </View>
            <View style={[styles.center]}>
                <Text style={styles.bold}>Device Status</Text>
                <View style={styles.status}>
                    <View style={styles.elem}>
                        <Image source={require('../assets/wifi.png')} style={styles.img}></Image>
                        <Text style={styles.mini}>Wifi Connection</Text></View>
                    <View style={styles.elem}>
                        <Image source={require('../assets/bluetooth.png')} style={styles.img}></Image>
                        <Text style={styles.mini}>wifi</Text></View>
                </View>
            </View>
            


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    boldtext: {
        fontSize: 16,
        color:"red"
    },
    bold: {
        fontWeight: "bold"
    },
    buttonArea: {
        marginTop: 50
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    status: {
        flexDirection: "row",
        marginTop: 10,
        gap: 20
    },
    mini: {
        fontSize: 10,

    },
    img: {
        width: 15,
        height: 15,
        marginRight: 8
    },
    elem: {
        display: "flex",
        flexDirection: "row"
    }
});

export default HomePage;