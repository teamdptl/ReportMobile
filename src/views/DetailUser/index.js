import {Text, View, Image, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import Buttons from '../../components/Buttons';
import { getUserData } from '../../apis/UserAPI';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DividerLine from "../../ReadOnlyComponent/Divider";
import {Divider} from "@rneui/themed";




const DetailUser = () => {
  const [userData, setUserData] = useState({

    name: "Tran Gia Lam",
    username: "Tran Gia Lam",
    student_code: "3120560051",
    email: "trangialma91b@gmail.com",
    status:"Online",
  });


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getUserData(); // Gọi hàm getUserData từ UserApi.js
  //
  //     if (result) {
  //       setUserData({
  //         name: result.name,
  //         username: result.username,
  //         student_code: result.student_code,
  //         email: result.email,
  //       });
  //     }
  //   };
  //
  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.status}>{userData.status}</Text>
        <View style={styles.userImageContainer}>
          <Image
            source={require('../../assets/images/SguLogo.png')}
            style={styles.userImage}

          />
        </View>
        <Text style={styles.userName}>{userData.name}</Text>
      </View>
      <View style={styles.bottomSection}>
        <ScrollView>
        <View style={styles.containerInfo}>
        <View style={styles.header}>
          <Text style={styles.text}>Thông tin tài khoản</Text>
          <Text style={styles.update}>Chỉnh sửa</Text>
        </View>
        <View style={styles.row}>

          <Feather style={styles.icon} name="user" size={24} color="black" />
          <Text style={styles.label}>Tên tài khoản :</Text>
          <Text style={styles.text}>3120560051 </Text>
        </View>
        <View style={styles.row}>
          <Ionicons style={styles.icon} name="key-outline" size={24} color="black" />
          <Text style={styles.label}>Mật khẩu :</Text>
          <Text style={styles.text}>3120560051</Text>
        </View>
      </View>

        <View style={styles.containerInfo}>
          <View style={styles.header}>
            <Text style={styles.text}>Thông tin liên hệ</Text>
            <Text style={styles.update}>Chỉnh sửa</Text>
          </View>
          <View style={styles.row}>
            <Feather style={styles.icon} name="phone" size={24} color="black" />
            <Text style={styles.label}>Số điện thoại :</Text>
            <Text style={styles.text}>09344987656 </Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons style={styles.icon} name="email-outline" size={24} color="black" />
            <Text style={styles.label}>Email :</Text>
            <Text style={styles.text}>trangialam91b@gmail.com</Text>
          </View>
        </View>
          <View style={styles.containerInfo}>
            <View style={styles.header}>
              <View style={styles.headerText}>
                <Foundation style={styles.icon} name="list-bullet" size={24} color="black" />
                <Text style={styles.text}>Các nhiệm vụ đã thực hiện</Text>
              </View>
              <Text style={styles.text}></Text>
              <Text style={styles.update}>Xem chi tiết</Text>
            </View>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.header}>
              <View style={styles.headerText}>
                <MaterialCommunityIcons style={styles.icon} name="mailbox-open-outline" size={24} color="black" />
                <Text style={styles.text}>Hộp thư</Text>
              </View>
            </View>
            <Divider inset={true} insetType="middle" />
            <View style={styles.headerText}>
              <Feather style={styles.icon} name="headphones" size={24} color="black" />
              <Text style={styles.text}>Liên hệ hỗ trợ  </Text>
            </View>
          </View>

          <View style={styles.containerInfo}>
            <View style={styles.header}>
              <View style={[styles.headerText]}>
                <MaterialIcons style={styles.icon} name="logout" size={24} color="red" />
                <Text style={[styles.text,styles.logout]}>Đăng xuất</Text>
              </View>
            </View>
          </View>

        </ScrollView>



      </View>
    </View>
  );
}

export default DetailUser;
