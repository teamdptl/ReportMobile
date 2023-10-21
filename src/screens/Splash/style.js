import { StyleSheet, Platform } from 'react-native';
import color from '../../contains/color';
// import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
      customView: {
        flex:1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: color.background
      },
      text: {
        fontSize: 10,
        // fontFamily: fonts.Roboto-Bold,
        // color: color.primaryColor
      },
 
})    

export default styles;