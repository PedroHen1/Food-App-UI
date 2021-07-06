import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './components/Screen/Home';
import Informations from './components/Screen/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Informations' component={Informations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}