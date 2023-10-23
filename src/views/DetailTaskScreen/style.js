import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:50,
    },
    containerInfoUser:{
        marginTop:20,
        color:"black",
    },
    header:{
        fontWeight:"bold",
        fontSize:15
    },
    infoUser:{
        color:"black",
        flexDirection:"column",
    },
    row:{
        flexDirection:"row",
        marginVertical:10,
        marginHorizontal:25,
        justifyContent:"space-between",
    },
    label:{
        color:"#A9A9A9"
    },
    text:{
        fontWeight:"bold",
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,

    },
    title:{
        marginVertical:10,
        fontWeight:"400"
    },
    detail:{
        marginVertical:10,
        marginHorizontal:20,
    },
    button:{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
})
export default styles;