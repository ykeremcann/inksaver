import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated,FlatList } from 'react-native';
import Button from '../components/Button';
import Card from './DeviceCard';

const data = [
    { id: '1', deviceName: 'Device 1', deviceId: 'ABC123', imageSource: require('../assets/Group.png') },
    { id: '2', deviceName: 'Device 2', deviceId: 'XYZ456', imageSource: require('../assets/Group.png') },
    { id: '3', deviceName: 'Device 3', deviceId: 'DEF789', imageSource: require('../assets/Group.png') },
    // Daha fazla veri ekleyebilirsiniz
];

const DeviceList = () => {
    const renderItem = ({ item }) => (
        <Card
            deviceName={item.deviceName}
            deviceId={item.deviceId}
            imageSource={item.imageSource}
        />
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.boldtext}>Device List</Text>
                </View>
                <View>
                    <Text style={styles.mini}>Select your device for connection</Text>
                </View>
            </View>
            <View >
                <FlatList style={styles.bosluk}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
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
        color:"black"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    black: {
        color: "black"
    },
    buttonArea: {
        marginTop: 50
    },
    buttonText: {
        color: 'white',
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

export default DeviceList;