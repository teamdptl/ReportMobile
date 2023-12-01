import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBarButton from '../../components/CustomTabBarButton';
import TabIcons from '../../components/TabIcons';

import UserReport from '../../screens/User/UserHome';
import DetailUser from '../../screens/User/UserInfo';
import PostReport from '../../screens/User/CreateReport';
import ManagerWorker from "../../screens/Manager/ManagerWorker";
import UserHome from "../../screens/User/UserHome";

const Tab = createBottomTabNavigator();

const ManagerTabScreen = ({navigation}) => {
    return (<Tab.Navigator
        screenOptions={({route}) => ({
            headerShown: false, tabBarStyle: {
                position: 'absolute',
                bottom: 18,
                left: 20,
                right: 20,
                elevation: 3,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 60, ...styles.shadow,
            }, tabBarShowLabel: false, // Hide labels in tabs
        })}
    >

        <Tab.Screen
            name="UserHome"
            component={UserHome}
            options={{
                tabBarIcon: ({focused}) => (<TabIcons
                    focused={focused}
                    icon={require('../../assets/images/book.png')}
                    label="Phản hồi"
                />),
            }}
        />
        <Tab.Screen
            name="ManagerWorker"
            component={ManagerWorker}
            options={{
                tabBarIcon: ({focused}) => (<TabIcons
                    focused={focused}
                    icon={require('../../assets/images/book.png')}
                    label="Nhân viên"
                />),
            }}
        />
        <Tab.Screen
            name="DetailUser"
            component={DetailUser}
            options={{
                tabBarIcon: ({focused}) => (<TabIcons
                    focused={focused}
                    icon={require('../../assets/images/user.png')}
                    label="Tài khoản"
                />),
            }}
        />
    </Tab.Navigator>);
};

const styles = {
    shadow: {
        shadowColor: '#7F5DF0', shadowOffset: {
            width: 0, height: 10,
        }, shadowOpacity: 0.25, shadowRadius: 3.5,
    },
};

export default ManagerTabScreen;
