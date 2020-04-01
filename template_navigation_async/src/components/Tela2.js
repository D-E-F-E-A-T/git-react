import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';

import Produtos from './Produtos';

export default class Tela2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: [
                {key: 1, nome: 'React Native', },
                {key: 2, nome: 'React Native' },
                {key: 3, nome: 'React Native', },
                {key: 4, nome: 'React Native', },
                {key: 5, nome: 'React Native', },
            ]
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <TouchableOpacity
                        style={styles.btnInicio}
                        onPress={() => this.props.navigation.navigate('Route')}
                    >
                        <Text style={styles.textoCabecalho}> Início </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnTemplate}
                        onPress={() => this.props.navigation.navigate('Route')}
                    >
                        <Text style={styles.textoCabecalho}> Template </Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList
                    data={this.state.feed}
                    keyExtractor={ (item) => item.key}
                    renderItem={ ({item}) => <Produtos data={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    estiloTextoBotao: {
        color: '#FFF',
        fontSize: 20,
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
    },
    btnInicio: {
        backgroundColor: '#FAB555', 
        padding: 5, 
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        width: 150,
    },
    btnTemplate:{
        backgroundColor: '#ABF222', 
        padding: 5, 
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        width: 150,
    }
});