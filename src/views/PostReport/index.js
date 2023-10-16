import { Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style';


const PostReport = ({navigation}) => {
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

