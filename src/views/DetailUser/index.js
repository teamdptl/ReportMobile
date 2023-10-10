import { Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import Buttons from '../../components/Buttons'; 
import { getValueFor } from '../../contains/SecureStore'; 
import {  USER_TOKEN_KEY } from '../../contains/config';


const DetailUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    student_code: "",
    email: "",
  });

  // Hàm để lấy dữ liệu từ API sử dụng token
  const fetchData = async () => {
    try {
      const token = await getValueFor(USER_TOKEN_KEY); // Lấy token từ SecureStore

      if (token) {
        const response = await fetch("https://sgu.dy.id.vn/api/v1/user-info", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData({
            name: result.name,
            username: result.username,
            student_code: result.student_code,
            email: result.email,
          });
        } else {
          console.error('Lỗi khi gọi API:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Gọi fetchData khi component được tạo

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.userImageContainer}>
          <Image
            source={require('../../assets/images/SguLogo.png')}
            style={styles.userImage}
          />
        </View>
        <Text style={styles.userName}>{userData.name}</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.textDetails}>Mã số sinh viên:</Text>
        <TextInput
          style={styles.input}
          value={userData.username}
          placeholder="Username"
          editable={false}
        />
        <Text style={styles.textDetails}>Email</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          placeholder="Email"
          editable={false}
        />

        <View style={styles.buttonCustom}>
          <Buttons btnText={"Đăng xuất"} backgroundColor="#F33939" />
        </View>
      </View>
    </View>
  );
}

export default DetailUser;
