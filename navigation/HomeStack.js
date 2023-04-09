import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraModule from '../CameraModule';
import Home from '../Home';

const Stack = createStackNavigator();

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