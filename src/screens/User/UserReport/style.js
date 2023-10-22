import { StyleSheet, Platform, Dimensions } from 'react-native';
import color from '../../../contains/color';
// import fonts from '../../assets/fonts';
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
        
     
    upperHeader: {
        height: 28,
    },
   
    paddingForHeader:{
        height: 122,
        paddingBottom: 50,

    },
    scrollViewContent: {
        // height: WINDOW_HEIGHT * 1.2,
        backgroundColor: 'white',
        paddingBottom: 100,
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
      containerHTZLMid: {
        flexDirection: 'row', // Xếp các phần tử theo hàng ngang
        alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
        justifyContent: 'space-between', // Các phần tử bên trái và bên phải cách xa nhau
        marginHorizontal: 10, // Khoảng cách ngang bên ngoài container
        marginTop: 45, // Khoảng cách từ top
      },
      leftContent: {
        flex: 1.5, // Phần trái chiếm 1 phần
      },
      rightContent: {
        flex: 1.6, // Phần phải chiếm 2 phần
        flexDirection: 'row', // Xếp các phần tử trong phần phải theo hàng ngang
        justifyContent: 'space-between', // Các phần tử trong phần phải nằm ở phía bên phải
      },
    
})    

export default styles;