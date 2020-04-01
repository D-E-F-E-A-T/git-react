import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Route ({navigation}) {
    
    return(
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity
                    style={styles.btnInicio}
                >
                    <Text style={styles.textoCabecalho}> Template </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnInicioTemplate}
                >
                    <Text style={styles.textoCabecalho}> Template </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.btnCorpo}
                onPress={() => navigation.navigate('Tela1')}
            >
                <Animatable.Text
                    style={styles.btn1}
                    animation="zoomInUp"
                    useNativeDriver
                    duration={3000}
                > Tela 1 </Animatable.Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCorpo}
                onPress={() => navigation.navigate('Tela2')}
            >
                <Animatable.Text
                    style={styles.btn1}
                    animation="zoomInUp"
                    useNativeDriver
                    duration={3000}
                > Tela 2 </Animatable.Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnCorpo:{
        backgroundColor: '#FAb555',
        margin: 5,
        padding: 10,
        borderRadius: 10,
    },
    btn1: {
        color: '#FFF',
        fontSize: 20,
        fontWeight:'bold',
    },
    cabecalho: {
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#9b59b6',
    },
    textoCabecalho: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        textAlign:'center',
    },
    btnInicio: {
        backgroundColor: '#FAB555', 
        padding: 5, 
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        width: 170,
    },
    btnInicioTemplate:{
        backgroundColor: '#ABF222', 
        padding: 5, 
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        width: 170,
    }
});