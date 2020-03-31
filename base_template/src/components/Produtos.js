import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

export default class Tela2 extends Component{
    constructor(props){
        super(props);

        this.state = { }
    }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.containerFLat}>
                    <Text> {this.props.data.nome} </Text>
                    <Text> {this.props.data.key} </Text>
                
                    {/* <Image style={styles.img} source={{uri:'https://s2.glbimg.com/JtQp25d5bwdg3wV8B9f-W2PC3t8=/850x446/s2.glbimg.com/JbWJO1Q39tuOnJxu-4W7l7u-nMI=/0x0:694x389/695x390/s.glbimg.com/po/tt2/f/original/2015/06/25/windows-10-default-wallpaper-hero.png'}} /> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        backgroundColor: 'gold',
        height: 100,
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
    },
    img: {
        width: 200,
        height: 150,
    },
    containerFLat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});