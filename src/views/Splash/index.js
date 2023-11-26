import React from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import styles from './style';




const Splash = ({navigation}) => {

    setTimeout(()=>{
        // navigation.navigate('Login')
        navigation.replace('TabScreenUser')
    },1000)


    return (
        <View style={styles.customView}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#fff" />
            <Image source={require('../../assets/images/SguLogo.png')} style={{width: 180, height: 180}} />
            {/* <Text style={styles.text}>Đại học Sài Gòn</Text> */}

        </View>

  
    );
}

export default Splash;

