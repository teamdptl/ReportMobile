import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SmallButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, { backgroundColor: props.buttonColor }]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    width: 90,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SmallButton;
