import React, {useContext, useEffect} from "react";
import {Text} from "react-native";
import {AuthContext} from "../context/AuthContext";
import {deleteValue, getValue} from "../contains/SecureStore";
import {USER_ROLE_KEY} from "../contains/config";
const Main = ({navigation}) => {
    const {role, setRole} = useContext(AuthContext);

    const switchScreen = (userRole) => {
        switch (userRole){
            case 'user':
                console.log('user navigation');
                navigation.replace('UserNavigation');
                break;
            case 'manager':
                console.log('manager navigation');
                navigation.replace('ManagerNavigation');
                break;
            case 'worker':
                console.log('worker navigation');
                navigation.replace('WorkerNavigation')
                break;
            default:
                console.log('login navigation');
                navigation.replace('Login');
                break;
        }
    }

    useEffect(() => {
        // deleteValue(USER_ROLE_KEY);
        // return;
        if (role){
            switchScreen(role);
        }
        else {
            getValue(USER_ROLE_KEY).then((data)=>{
                switchScreen(data);
                setRole(data);
            }).catch(err => {
                navigation.replace('Login');
            })
        }

    }, []);

    return <></>
}

export default Main;