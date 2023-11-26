import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBarButton from '../../components/CustomTabBarButton';
import TabIcons from '../../components/TabIcons';

import UserReport from '../../screens/User/UserHome';
import DetailUser from '../../screens/User/UserInfo';
import PostReport from '../../screens/User/CreateReport';

const Tab = createBottomTabNavigator();

const WorkerTabScreen = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
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
                tabBarShowLabel: false, // Hide labels in tabs
            })}
        >

            <Tab.Screen
                name="UserReport"
                component={UserReport}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcons
                            focused={focused}
                            icon={require('../../assets/images/book.png')}
                            label="Phản hồi"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="PostReport"
                component={PostReport}
                options={{
                    // tabBarButton: (props) => <CustomTabBarButton {...props} />,
                    tabBarButton: () => (
                        <CustomTabBarButton
                            onPress={() => navigation.navigate('PostReport')} // Điều hướng đến PostReport
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="DetailUser"
                component={DetailUser}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcons
                            focused={focused}
                            icon={require('../../assets/images/user.png')}
                            label="Tài khoản"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
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

export default WorkerTabScreen;
