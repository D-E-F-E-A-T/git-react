import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';


class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.areaListas}>
            <Text style={styles.listas}> {this.props.data.nome}  </Text>

            <Text style={styles.listas}> R$ = {this.props.data.valor} </Text>
          </View>

          
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F2EDED',

  },
  areaListas : {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listas: {
      fontSize: 20,
  }
});

export default App;
