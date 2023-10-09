import React, { useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image, Animated, FlatList } from 'react-native';
import styles from './style';

const UserReport = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const AnimatedText = Animated.createAnimatedComponent(Text);
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
      
      </View>

      <View style={styles.header}>
        <View>
        <AnimatedText
  style={[
    styles.text,
    {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 150], // Điều chỉnh khoảng cách mà bạn muốn văn bản dịch chuyển
            outputRange: [0, -30], // Khoảng cách dịch chuyển của văn bản (lên trên)
            extrapolate: 'clamp', // Giữ giá trị trong phạm vi inputRange
          }),
          
        },
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 150], // Điều chỉnh khoảng cách mà bạn muốn văn bản dịch chuyển
            outputRange: [0, 130], // Khoảng cách dịch chuyển của văn bản (sang phải)
            extrapolate: 'clamp', // Giữ giá trị trong phạm vi inputRange
          }),
        }
      ],
    },
  ]}
>
  Xin chào, SGUer
</AnimatedText>
          <Text style={styles.text}>
            Hãy báo cáo các vấn đề{'\n'}
            kỹ thuật cho chúng tôi
          </Text>
        </View>

        <Image
          source={require('../../assets/images/feedback.png')}
          style={{ width: '55%', height: 120, marginLeft: 20, resizeMode: 'cover' }}
        />
      </View>

      <ScrollView
        onScroll={(e) => {
          const offSetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offSetY);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
          </View>
          <Text style={{ marginTop: 30 }}>cc</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserReport;
