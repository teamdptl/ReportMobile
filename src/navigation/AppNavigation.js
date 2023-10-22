import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import UserTabScreen from "./tab/UserTabScreen";
import PostReport from "../screens/User/PostReport";
import ManagerHome from "../screens/Manager/ManagerHome";
import WorkerHome from "../screens/Worker/WorkerHome";
import UserHome from "../screens/User/UserHome";
import Main from "../screens/Main";


const AppStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const ManagerStack = createNativeStackNavigator();
const WorkerStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="UserNavigation" component={UserNavigation}/>
                <AppStack.Screen name="ManagerNavigation" component={ManagerNavigation}/>
                <AppStack.Screen name="WorkerNavigation" component={WorkerNavigation}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

const UserNavigation = () => {
    return (
        <UserStack.Navigator screenOptions={{headerShown: false}}>
            <UserStack.Screen name="Tab" component={UserTabScreen}/>
            <UserStack.Screen name="Home" component={UserHome}/>
            <UserStack.Screen name="PostReport" component={PostReport}/>
        </UserStack.Navigator>
    );
};

const ManagerNavigation = () => {
    return (
        <ManagerStack.Navigator screenOptions={{headerShown: false}}>
            <ManagerStack.Screen name="Home" component={ManagerHome}/>
        </ManagerStack.Navigator>
    );
};

const WorkerNavigation = () => {
    return (
        <WorkerStack.Navigator screenOptions={{headerShown: false}}>
            <WorkerStack.Screen name="Home" component={WorkerHome}/>
        </WorkerStack.Navigator>
    );
};

export default AppNavigation;