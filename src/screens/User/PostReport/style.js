import { StyleSheet, Platform } from 'react-native';
import color from '../../../contains/color';
// import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,

      },
      textHeader:{
        alignItems: 'center',      // Center horizontally
        justifyContent: 'center',  // Center vertically
      },
      centeredText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: color.primaryColor 
      },
      bodyReport: {
        marginTop: 50,

      },
      textBody: {
        color: color.primaryColor ,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 7
      },    

      roundedInput: {
        borderWidth: 1,
        // borderColor: color.primaryColor,
        borderRadius: 10,
        padding: 5,
        marginVertical: 5,
      },
      paraInput: {
        height: 80
      },
      preview: {
        alignSelf: 'stretch',
        flex: 1
      }
 
})    

export default styles;