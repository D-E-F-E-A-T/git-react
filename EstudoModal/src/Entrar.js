import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.entrar = this.entrar.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true });
  }

  fechar(visible) {
    this.setState({ modalVisible: visible });
  }

  render(){
    return (
      <View style={{ 
          backgroundColor: '#ABC', width: '100%', height: 350, borderRadius: 15 }}>
        <Text style={{ color: '#FFF', fontSize: 28, paddingTop: 15, textAlign: 'center' }}> Seja Bem-vindo</Text>

        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', margin: 15, borderRadius: 10, backgroundColor: '#FFF' }}
        />

        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', margin: 15, borderRadius: 10, backgroundColor: '#FFF' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity 
          onPress={ this.props.fechar } 
          style={{ borderRadius: 10, backgroundColor: '#ABCD12', shadowColor: '#222', elevation: 5 }}
        >
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}> Fechar </Text>
        </TouchableOpacity>

        <Button title='Fechar' onPress={ this.props.fechar } style={{ borderRadius: 10 }} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});

export default App;
