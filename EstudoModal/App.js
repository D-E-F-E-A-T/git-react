import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import Entrar from './src/Entrar';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
      input: '',
      nome: '',
    }

    this.entrar = this.entrar.bind(this);
    this.fechar = this.fechar.bind(this);
    this.gravaNome = this.gravaNome.bind(this);
  }

  // ComponenDidmount - Quando o componente é criado em tela ele é chamado
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState( { nome: value });
    });
  }

  // componentDidUpdate - Pode monitorar toda vez ue um state atualizado fazer algo
  async componentDidUpdate(_, prevState){
    
    const nome = this.state.nome;

    if(prevState !== nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }

  entrar() {
    this.setState({ modalVisible: true });
  }

  fechar(visible) {
    this.setState({ modalVisible: visible });
  }

  gravaNome(){
    this.setState({
      nome: this.state.input,
    })
    alert('Salvo Com Sucesso');
    Keyboard.dismiss();
  }

  render(){
    return (
      <View style={styles.container}>
        
        <Button title='Chama modal' onPress={ () => this.entrar() } />

        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={ (text) => this.setState({ input: text }) }
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={ this.gravaNome }>
            <Text style={styles.btnMais}> + </Text>
          </TouchableOpacity>

          
        </View>

        <Text style={styles.nome}> {this.state.nome} </Text>
        


        {/* Modal */}
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={true}
        >
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Entrar fechar={ () => this.fechar(false)} />
          </View>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  btnMais: {
    backgroundColor: '#222',
    color: '#CCC',
    height: 40,
    padding: 10,
    marginLeft: 4,
    marginRight: 5,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  }
});

export default App;
