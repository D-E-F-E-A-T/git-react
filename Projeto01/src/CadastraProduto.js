import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';

export default class CadastraProduto extends Component {
    constructor(props){
        super(props);

        this.state = {
            produto: '',
            valor: 0,
            produtoProps: this.props.produto,
            chave: 0,
        }

        this.mudaTexto = this.mudaTexto.bind(this);
        this.mudaValor = this.mudaValor.bind(this);
        this.adicionar = this.adicionar.bind(this);

    }

    mudaTexto(produto){
        const state = this.state;

        state.produto = produto;

        this.setState(state);
    }

    mudaValor(valor) {
        const state = this.state;

        state.valor = valor;

        this.setState(state);
    }

    adicionar(){

        if(this.state.produto == '' || this.state.valor == 0){
            Alert.alert('Comprazz Avisa','Preencha os campos para cadastrar')
        } else {
            const state = this.state;

            let prod = state.produto;
            let val = state.valor;

            this.setState({ chave: state.chave + 1})
            
        
            state.produtoProps.push({key: this.state.chave, nome: prod, valor: val});
        
            this.setState(state);
        }
        
      }

      

    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.corpo}>
                    <Text style={styles.cabecalho}> Cadastre os Produtos </Text>

                </View>

                
                <TextInput
                    style={styles.inputEstilo}
                    placeholder="Nome do Produto"
                    value={this.state.produto}
                    onChangeText={ (item) => this.mudaTexto(item)}
                />
                
                <TextInput
                    style={styles.inputEstilo}
                    placeholder="Valor R$ = 0.00"
                    value={this.state.valor}
                    onChangeText={ (item) => this.mudaValor(item)}
                    keyboardType="numeric"
                />


                <View style={styles.areaBotoes}>
                    <TouchableOpacity
                        style={styles.btnVoltar}
                        onPress={ this.props.fechar }
                    >
                    <View>
                        <Text style={styles.mais}> Voltar </Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnVoltar}
                        onPress={ () => this.adicionar() }
                    >
                    <View>
                        <Text style={styles.mais}> Cadastrar </Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#81ECEC',
        width: '100%', 
        height: 350, 
        borderRadius: 15,
        marginTop: 5, 
    },
    btnVoltar: {
        backgroundColor: '#333',
    },
    mais: {
        color: '#FFF',
        fontSize: 15
    },
    areaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    corpo: {
        alignItems:'center',
        justifyContent:'center',
    },
    cabecalho: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#222',
    },
    inputEstilo: {
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#FFF',

        
    }
});