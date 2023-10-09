import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../views/Splash';
import Login from '../views/Login';
import UserReport from '../views/UserReport';
import Tabs from './TabScreenUser';

const Stack = createNativeStackNavigator();

const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserReport" component={UserReport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerWrapper;
