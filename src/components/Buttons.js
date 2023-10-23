import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../contains/color'


const Buttons = (props) => {
  return (
    <TouchableOpacity style={[styles.customView, { backgroundColor: props.backgroundColor }]}  onPress={props.onPress} >
      <Text style={styles.text}>
        {props.btnText}
      </Text>
    </TouchableOpacity>
  ) 
}
export default Buttons

const styles = StyleSheet.create({
  customView: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10, 
    paddingHorizontal: 11,
    paddingVertical: 3,
    marginTop: 30,
    marginHorizontal: 20,
    justifyContent: 'center', 
    // backgroundColor: color.primaryColor, 
    // borderColor: color.primaryColor,
    // alignItems: 'center',

  },
  text: {
    fontSize: 15, 
    fontWeight: '500',
    letterSpacing: 1.5, 
    textAlign: 'center', 
    position: 'relative', 
    color: color.white
  }


})