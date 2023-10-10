import React from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
// import styles from '../views/UserReport/style'; // Import your styles from style.js
import color from '../contains/color';

const HeaderComponent = ({ animatedValue }) => {
  return (
    <View style={styles.header}>
      <View>
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, -30],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 130],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          Xin chào, SGUer
        </Animated.Text>
        <Text style={styles.text}>
          Hãy báo cáo các vấn đề{'\n'}
          kỹ thuật cho chúng tôi
        </Text>
      </View>

      <Image
        source={require('../assets/images/feedback.png')}
        style={{ width: '55%', height: 120, marginLeft: 20, resizeMode: 'cover' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    paddingTop: 30,
    paddingRight: 10, // Khoảng cách giữa văn bản và hình ảnh
    fontWeight: 'bold',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 150,
    backgroundColor: color.primaryColor,
    flexDirection: 'row', 
    paddingHorizontal: 20,
},

})   


export default HeaderComponent;
