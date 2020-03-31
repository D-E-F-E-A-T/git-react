import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class Tela1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            nome: '',
        }

        this.mudaNome= this.mudaNome.bind(this);
    }

    async componentDidMount(){
        await AsyncStorage.getItem('nome').then((value) => {
            this.setState({nome: value});
        });
    }

    async componentDidUpdate(_, prevState){
        const nome = this.state.nome;

        if(prevState !== nome){
            await AsyncStorage.setItem('nome', nome);
        }
    }

    mudaNome(item) {
        const state = this.state;

        state.nome = item

        this.setState(state);
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

                <TextInput
                    style={styles.textinput}
                    value={this.state.nome}
                    placeholder='Digite Seu Nome...'
                    onChangeText={ (item) => this.mudaNome(item) }
                />

                <Text> {this.state.nome} </Text>

                <TouchableOpacity
                    style={styles.estiloBotao}
                    onPress={ () => alert('Sucesso')}
                >
                    <Text style={styles.textoBotao}> Click </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinput: {
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    estiloBotao: {
        backgroundColor: '#888',
        padding: 5,
        borderRadius: 10,
    },
    textoBotao: {
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
        textAlign: 'center',
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