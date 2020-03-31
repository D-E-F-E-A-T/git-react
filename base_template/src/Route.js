import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default function Route ({ navigation }){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.estiloBotao}
                onPress={ () => navigation.navigate('Tela1')}
            >
                <Text style={styles.estiloTextoBotao}> Tela 1 </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.estiloBotao}
                onPress={ () => navigation.navigate('Tela2')}
            >
                <Text style={styles.estiloTextoBotao}> Tela 2 </Text>
            </TouchableOpacity>

            
     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    estiloBotao: {
        backgroundColor: '#BF2345',
        padding: 5,
        margin: 5,
        borderRadius: 10,
    },
    estiloTextoBotao: {
        color: '#FFF',
        fontSize: 20,
    }
});