import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TodoScreen, HomeScreen, LoginScreen} from '../screens';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
