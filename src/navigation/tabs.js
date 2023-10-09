import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import UserReport from '../views/UserReport';
import DetailUser from '../views/DetailUser';
import PostReport from '../views/PostReport';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress} 
    >
      <Image
        source={require('../assets/images/plus.png')}
        resizeMode='contain'
        style={{
          width: 60, 
          height: 60, 
        }}
      />
    </TouchableOpacity>
  );


const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{ 
                    headerShown: false, 
                    tabBarStyle : { 
                            position: 'absolute',
                            bottom: 18,
                            left: 20,
                            right: 20,
                            elevation: 3,
                            backgroundColor: '#ffffff',
                            borderRadius: 15,
                            height: 60,
                            ...styles.shadow,

                            }}}  
                tabBarOptions={{ showLabel: false, }} >

                <Tab.Screen name="UserReport" component={UserReport} options={{
                    tabBarIcon: ({focused}) => {
                        return( 
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image 
                                source={require('../assets/images/book.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? '#0693F1' : '#748c94'
                                }}
                            />
                            <Text style={{color: focused ? '#0693F1' : '#748c94', fontSize: 11}}>Phản hồi</Text>
                        </View>)
                       
                    }
                }}  />
                <Tab.Screen name="PostReport" component={PostReport} 
                    options={{
                        tabBarButton: (props) => (
                            <CustomTabBarButton {...props} />
                        )
                    }}
                />


                <Tab.Screen name="DetailUser" component={DetailUser}  options={{
                    tabBarIcon: ({focused}) => {
                        return( <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require('../assets/images/user.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#0693F1' : '#748c94',
                            }}
                        />
                        <Text style={{color: focused ? '#0693F1' : '#748c94', fontSize: 11}}>Tài khoản</Text>

                    </View>)
                       
                    }
                }}  />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    }


});

export default Tabs;