import { Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import Buttons from '../../components/Buttons'; 
import { getUserData } from '../../apis/UserAPI';
import color from '../../contains/color';


const DetailUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    student_code: "",
    email: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserData(); // Gọi hàm getUserData từ UserApi.js

      if (result) {
        setUserData({
          name: result.name,
          username: result.username,
          student_code: result.student_code,
          email: result.email,
        });
      }
    };

    fetchData();
  }, []);

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
          <Buttons btnText={"Đăng xuất"} backgroundColor= {color.red} />
        </View>
      </View>
    </View>
  );
}

export default DetailUser;
