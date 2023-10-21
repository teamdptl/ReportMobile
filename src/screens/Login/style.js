import { StyleSheet, Platform } from 'react-native';
import color from '../../contains/color';
import Roboto from '../../assets/fonts/Roboto-Bold.ttf';

const styles = StyleSheet.create({
      text: {
        marginTop: 12,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        // fontFamily: Roboto,
        color: color.primaryColor,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.primaryColor,
        borderRadius: 20, 
        paddingHorizontal: 11,
        paddingVertical: 3,
        marginTop: 12,
        marginHorizontal: 20,
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: 16,
      },
      container_QuenMatKhau: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 50
      },
      text_QuenMatKhau: {
        fontSize: 16,
        fontWeight: '400',
        color: color.primaryColor,
      
      }
    
 
})    

export default styles;