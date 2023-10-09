import React from 'react';
import { View, Image, Text } from 'react-native';

const TabIcons = ({ focused, icon, label }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: 20,
        height: 20,
        tintColor: focused ? '#0693F1' : '#748c94',
      }}
    />
    <Text style={{ color: focused ? '#0693F1' : '#748c94', fontSize: 11 }}>
      {label}
    </Text>
  </View>
);

export default TabIcons;
