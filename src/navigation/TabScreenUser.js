import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CustomTabBarButton from '../components/CustomTabBarButton';
import TabIcons from '../components/TabIcons';

import UserReport from '../views/UserReport';
import DetailUser from '../views/DetailUser';
import PostReport from '../views/PostReport';

const Tab = createBottomTabNavigator();

const TabScreenUser = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 18,
            left: 20,
            right: 20,
            elevation: 3,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 60,
            ...styles.shadow,
          },
        }}
        tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="UserReport"
          component={UserReport}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                focused={focused}
                icon={require('../assets/images/book.png')}
                label="Phản hồi"
              />
            ),
          }}
        />
        <Tab.Screen
          name="PostReport"
          component={PostReport}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="DetailUser"
          component={DetailUser}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                focused={focused}
                icon={require('../assets/images/user.png')}
                label="Tài khoản"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
};

export default TabScreenUser;
