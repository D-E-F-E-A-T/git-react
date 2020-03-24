import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  Slider,
  Switch,
  Alert,
} from 'react-native';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      nome:'',
      idade:'',
      sx: 0,
      sexo:[
        {key:1, genero: 'Masculino'},
        {key:2, genero: 'Feminino'}
      ],
      limite:1500,
      estudante:false,
    }
  }

  mudarNome(nome) {
    let state = this.state;

    state.nome = nome;

    this.setState(state);
  }

  mudarIdade(idade){
    let state = this.state;

    state.idade = idade;

    this.setState(state);
  }

  mostrarDados(){

    return Alert.alert('Dados da Conta: ', this.state.nome+'\n'
                        +this.state.idade+'\n'
                        +this.state.sexo+'\n'
                        +this.state.limite+'\n'
                        +this.estudante);
  }

  render(){

    let sexoOpcao = this.state.sexo.map( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.genero} />
    });

    return (
      <View style={styles.container}>

      <View  style={styles.cabecalho}>
        <Text style={styles.textoFormulario}> Formulário Básico React </Text>
      </View>

      <View style={styles.body}>

        <Text style={styles.textoFormulario}> Nome: </Text>
        <TextInput
          style={styles.input}
          value={this.state.nome}
          onChangeText={ (nome) => this.mudarNome(nome) }
        />

        <Text style={styles.textoFormulario}> Idade: </Text>
        <TextInput
          style={styles.input}
          value={this.state.idade}
          onChangeText={ (idade) => this.mudarIdade(idade)}
          keyboardType='numeric'
        />
      </View>

      <Picker
        style={styles.picker}
        selectedValue={this.state.sx}
        onValueChange={ (itemValue, indexValue) => this.setState({sx: itemValue})}
      >
        {sexoOpcao}
      </Picker>

      <Slider
        minimumValue={250}
        maximumValue={3000}
        onValueChange={ (limite) => this.setState({limite: limite})}
        value={this.state.limite}
      />

      <Text style={styles.limiteTexto}> {this.state.limite.toFixed(0)} </Text>

      <View style={styles.containerSwitch}>
        <Switch
          value={this.state.estudante}
          onValueChange={ (valorSwicth) => this.setState({estudante: valorSwicth})}
        />

        <Text style={styles.textoFormulario}> Você é estudante ? </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoEstilo}
        onPress={() => this.mostrarDados()}
      >
        <Text style={styles.textoFormulario}> Abrir Conta </Text>
      </TouchableOpacity>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E67E22'
  },
  cabecalho: {
    alignItems:'center',
    justifyContent:'center',
  },
  input: {
    borderWidth: 0.6,
    borderColor: '#333',
    borderRadius: 10,
    backgroundColor:'#FFF',
  },
  body: {
    margin: 9,
  },
  textoFormulario: {
    fontSize: 15,
    fontWeight:'bold',
    marginBottom: 5,
    color:'#FFF',
    fontSize: 18,
  },
  picker: {
    color:'#FFF',
  },
  limiteTexto: {
    alignItems:'center',
    color: '#FFF',
    fontSize: 50,
  },
  containerSwitch: {
    flexDirection: 'row',
    margin: 10
  },
  botaoEstilo: {
    backgroundColor: '#Ab1234',
    alignItems: 'center',
    margin: 20,
    padding: 5,
    borderRadius: 10,
  }
});

export default App;
