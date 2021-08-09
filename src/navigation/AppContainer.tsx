import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home/Home';
import AnimatedBoxes from '../pages/Box/AnimatedBoxes';
import AnimatedCircles from '../pages/Circle/AnimatedCircles';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Box" component={AnimatedBoxes} />
        <Stack.Screen name="Circle" component={AnimatedCircles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
