import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Character from '../pages/Character';

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ cardStyle: { backgroundColor: '#f8f8f8' } }}
      />
      <AppStack.Screen name="Character" component={Character} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
