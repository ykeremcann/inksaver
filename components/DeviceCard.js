import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ deviceName, deviceId, imageSource }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.deviceName}>{deviceName}</Text>
                <TouchableOpacity style={styles.connectButton}>
                    <Text style={styles.connectButtonText}>Connect</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cont}>
                <View style={styles.imageBorder}>
                    <Image source={imageSource} style={styles.image} />
                </View>

                <View style={styles.deviceIdContainer}>
                    <Text style={styles.deviceIdLabel}>Device ID</Text>
                    <Text style={styles.deviceId}>{deviceId}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 120,
        borderWidth: 1,
        borderColor: '#00000020',
        borderRadius: 25,
        padding: 10,
        marginVertical: 30,
        marginRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    deviceName: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    connectButton: {
        backgroundColor: '#007aff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 35,
    },
    connectButtonText: {
        color: 'white',
        fontSize: 8,

    },
    cont: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    imageBorder: {
        width: 60,
        height: 60,
        marginBottom: 10,
        backgroundColor:"#00000010",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:30,
        height:30
    },  
    deviceIdContainer: {
        marginLeft:20,
        
    },
    deviceIdLabel: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    deviceId: {
        fontSize: 12,
    },
});

export default Card;