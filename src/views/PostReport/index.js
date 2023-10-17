import { Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState, useEffect, useRef } from 'react';

const PostReport = ({navigation}) => {

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState;
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState;


  useEffect(() => { 
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");

    })();
    },[]);

    if(hasCameraPermission === undefined){
      return <Text>Đang gửi yêu cầu cấp quyền </Text>
    }else if(!hasCameraPermission){
      return <Text>Camera chưa được cấp quyền. Vui lòng bạn hãy thay đổi quyền ở cài đặt</Text>
    }


  return (
    <View style={styles.container}>               
     <Image source={require('../../assets/images/return.png')} style={{width: 50, height: 50}} />

      <View style={styles.textHeader}>
        <Text style={styles.centeredText}>Phản hồi thông tin</Text>
      </View>
      <View style={styles.bodyReport}>
          <Text style={styles.textBody}>Tiêu đề</Text>
          <TextInput style={styles.roundedInput} />
          <Text style={styles.textBody}>Mô tả báo cáo</Text>
          <TextInput style={[styles.roundedInput, styles.paraInput]} multiline={true} />
          <Text style={styles.textBody}>Địa điểm</Text>
          <TextInput style={styles.roundedInput} />
          <Text style={styles.textBody}>Thêm ảnh</Text>
      </View>
    
  </View>
      
  )
}

export default PostReport

