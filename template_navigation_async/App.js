import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Route from './src/Route';
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Route" component={Route} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator> */}

      <Drawer.Navigator>
        <Drawer.Screen name="Route" component={Route} />
        <Drawer.Screen name="Tela1" component={Tela1} />
        <Drawer.Screen name="Tela2" component={Tela2} />
      </Drawer.Navigator>

    </NavigationContainer>
    

    
  );
}

export default App;