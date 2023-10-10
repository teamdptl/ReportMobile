import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1,
        backgroundColor:"white",
    },
    buttonDate: {
        width: 230,
        height: 35,
        backgroundColor: '#1C6CA1',
        position: 'absolute', // Đặt vị trí tuyệt đối
        top: -20, // Vị trí từ trên xuống (50 điểm từ phía trên)
        left: 20, // Vị trí từ trái sang (50 điểm từ bên trái)
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    date:{
        color:"white",
        fontWeight:"500"
    },
    status:{
        color:"white",
        fontWeight:"500"
    },
    buttonStatus: {
        width: 100,
        height: 35,
        backgroundColor: '#1C6CA1',
        borderRadius:10,
        position: 'absolute',
        top: -20,
        right: 20,
        justifyContent:"center",
        alignItems:"center",
    },
    filter:{
        marginBottom:40
    },

});
export default styles;
