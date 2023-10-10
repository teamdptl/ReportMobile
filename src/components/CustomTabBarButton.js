import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <Image
      source={require('../assets/images/plus.png')}
      resizeMode="contain"
      style={{
        width: 60,
        height: 60,
      }}
    />
  </TouchableOpacity>
);

const styles = {
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
};

export default CustomTabBarButton;
