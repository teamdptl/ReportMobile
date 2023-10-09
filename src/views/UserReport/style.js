import { StyleSheet, Platform, Dimensions } from 'react-native';
import color from '../../contains/color';
// import fonts from '../../assets/fonts';
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
        text: {
            color: 'white',
            paddingTop: 30,
            paddingRight: 10, // Khoảng cách giữa văn bản và hình ảnh
            fontWeight: 'bold',
        },
     
    upperHeader: {
        height: 28,
    },
    header: {
        position: 'absolute',
        width: '100%',
        height: 150,
        backgroundColor: color.primaryColor,
        flexDirection: 'row', 
        paddingHorizontal: 20,
    },
    paddingForHeader:{
        height: 122,
        paddingBottom: 50,

    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 1,
        backgroundColor: 'white',
        // paddingTop: 50,
    },
    containerLine: {
        // flex: 1,
        // justifyContent: 'center',
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: color.background,
      },
      line: {
        width: '40%',
        height: 2,
        backgroundColor: 'black',
      },
    
})    

export default styles;