import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import CadastraProduto from './src/CadastraProduto';
import Produtos from './src/Produtos';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      produtos: [],
      modalVisible: false,
      total: 0,
    }

    this.remover = this.remover.bind(this);
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.total = this.total.bind(this);
  }

  async componentDidMount(){
    await AsyncStorage.getItem('produtos').then((value) => {
      this.setState({ produtos: JSON.parse(value) });
    });

  }

  async componentDidUpdate(_, prevState){

    const produtos = this.state.produtos;

    if(prevState !== produtos) {
      await AsyncStorage.setItem('produtos', JSON.stringify(produtos) );
    }
  }


  // Funções
  abrirModal(){
    this.setState({ modalVisible: true });
  }

  fecharModal(){
    this.setState({ modalVisible: false });
  }

  remover(){
    const state = this.state;

    state.produtos.pop();

    this.setState(state);
  }

  total(){
    const state = this.state;

    if(state.produtos !== null) {
      
      for (let index = 0; index < state.produtos.valor.length; index++) {
        const element = state.produtos.valor[index];

        state.total = element;
        
        state.total = 50;
        this.setState(state);
      }
    }
    
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image style={styles.imagem} source={require('./src/img/emoji.png')} />
          <Image style={[styles.imagemLogo, styles.imagem]} source={require('./src/img/logo.png')} />
          <Image style={styles.imagem} source={require('./src/img/emoji.png')} />
        </View>

        {/* BTN ADD */}
        <View style={styles.containerAdd}>

          <TouchableOpacity
            onPress={ () => this.abrirModal()}
          >
            <View>
              <Text style={styles.mais}> + </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ () => this.remover()}
          >
            <View>
              <Text style={styles.mais}> - </Text>
            </View>
          </TouchableOpacity>
        </View>


        {/* FlatList */}
        <View style={styles.containerLista}>
          <FlatList
            style={styles.flatlist}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (item) => item.key }
            data={this.state.produtos}
            renderItem={ ({item}) => <Produtos data={item} total={this.total} />}
          />
          <View style={styles.areaTotal}>
            <Text style={styles.listas}> Total  </Text>
            <Text style={styles.listas}> R$ = {this.state.total} </Text>
          </View>
        </View>


        
          <Modal
            animationType="fade"
            visible={this.state.modalVisible}
            transparent={true}
          >
            <View style={styles.areaModal}>
              
              <CadastraProduto 
                fechar={ () => this.fecharModal(false)}
                produto={this.state.produtos}
              />

            </View>
          </Modal>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDED',
  },
  cabecalho: {
    backgroundColor: '#81ecec',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagem: {
    width: 30,
    height: 30,
    margin: 3,
    opacity: 0.5
  },
  imagemLogo: {
    borderRadius: 50,
  },
  containerAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adicionar: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  mais: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFF',
    backgroundColor: '#333',
    borderRadius: 50,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
  },
  listas: {
    fontSize: 20,
    fontWeight: 'bold',
    // borderBottomColor: '#333',
    // borderBottomWidth: 1,
  },
  flatlist: {
    backgroundColor: '#81ecec',
  },
  areaTotal: {
    flexDirection: 'row',
    justifyContent:'space-between',
    
    borderBottomColor: '#333',
    borderBottomWidth: 1,

    shadowColor: '#193756',
    elevation: 1,
  },
  areaModal: {
    flex: 1,
    // opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
});

export default App;
