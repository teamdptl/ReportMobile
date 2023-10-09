import React, {useState} from 'react';
import { View, Keyboard,Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image } from 'react-native'
import styles from './style';
import Buttons from '../../components/Buttons'; 
// import * as SecureStore from 'expo-secure-store';
import * as Device from 'expo-device';

import { save, getValueFor } from '../../contains/SecureStore';


const Login = ({navigation}) => {

    const [mssv, setMssv] = useState('');
    const [password, setPassword] = useState('');


    // async function save(key, value) {
    //   await SecureStore.setItemAsync(key, value);
    // }

    

    const handleLogin = () => {
        const userData = {
          mssv: mssv,
          password: password,
          device_name: Device.deviceName,
        };
    
        fetch('http://sgu.dy.id.vn/api/v1/login', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {

            console.log(data);

            if (data.token && data.error === 0) {
              save('userToken', data.token);
              

              navigation.navigate('UserReport');
            } else {
              alert('Đăng nhập không thành công. Vui lòng thử lại.');
            }
          })
          .catch((error) => {
            console.error('Lỗi kết nối API: ', error);
          });
    
        setMssv('');
        setPassword('');
  };

    return (
       <View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'column'}}>
            {/* <Text>This is login </Text>  */}
            <StatusBar  barStyle='dark-content' backgroundColor='#fff' />
            <View style={{flex: 2, backgroundColor: '#fff', flexDirection: 'column', paddingTop: 10, paddingHorizontal: '3%', alignItems: 'center', justifyContent:'center'}}>
                <Image source={require('../../assets/images/BackgroundLogo.png')} style={{width: 240, height: 240, position: 'absolute'}} />
                <Image source={require('../../assets/images/SguLogo.png')} style={{width: 150, height: 150, position: 'absolute'}} />
            </View>

            <View style={{flex: 4, backgroundColor: '#fff', flexDirection: 'column', paddingTop: 10, paddingHorizontal: '3%'}}>
                <Text style={styles.text} >MSSV:</Text>    
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập MSSV"
                        value={mssv}
                        onChangeText={(text) => setMssv(text)}
                    />
                </View>
                <Text style={styles.text} >Mật khẩu:</Text>    
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập thông tin"
                        secureTextEntry={true} 
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
            

                <Buttons onPress={handleLogin}  btnText={"Đăng nhập ngay"}/>
                <View style={styles.container_QuenMatKhau}>
                    <Text style={styles.text_QuenMatKhau}>Quên mật khẩu ?</Text>
                </View>
  

            </View>


       </View>  
    )
}

export default Login;