import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
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
                <Text> Tela 2 </Text>

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
        // alignItems: 'center',
        // justifyContent: 'center',
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