import React, { useState } from 'react';
import { Text, TouchableOpacity, Animated, StyleSheet, View, Image } from 'react-native';


const Button = () => {



    return (
        <View style={styles.cont}>
            <View style={styles.outline} >
                <TouchableOpacity style={styles.button} >
                    <View style={styles.inline}>
                        <View>
                            <Image source={require('../assets/flowbite_plus-outline.png')} style={styles.img}></Image>
                        </View>
                        <Text style={styles.buttonText}>Search for devices</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outline: {
        backgroundColor: "#00000010",
        width: 240,
        height: 240,
        borderRadius: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: "white",
        borderWidth: 5, 
        borderColor: '#2B2E5F', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    inline: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#2B2E5F80",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 10,
        color:"#000000"
    },
    img: {
        width: 40,
        height: 40,
    },

});

export default Button;