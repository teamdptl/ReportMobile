import { Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './style';


const PostReport = () => {
  return (
    <View>
              <Text>Phản hồi thông tin</Text>
              <Text>Tiêu đề</Text>
              <TextInput />
              <Text>Mô tả báo cáo</Text>
              <TextInput />
              <Text>Địa điểm</Text>
              <TextInput />
              <Text>Thêm ảnh</Text>
              

    </View>
      
  )
}

export default PostReport

