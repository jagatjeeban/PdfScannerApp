import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraModule from '../CameraModule';
import Home from '../App';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CameraModule' component={CameraModule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;