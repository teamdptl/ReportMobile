import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../views/Splash';
import Login from '../views/Login';
import UserReport from '../views/UserReport';
import TabScreenUser from './TabScreenUser';
import PostReport from '../views/PostReport';

const Stack = createNativeStackNavigator();

const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="UserReport" component={UserReport} /> */}
        <Stack.Screen name="TabScreenUser" component={TabScreenUser} />
        <Stack.Screen name="PostReport" component={PostReport} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainerWrapper;
