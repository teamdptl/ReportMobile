import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
      flexDirection:"row"
    },
    containerTask:{
       backgroundColor:"#F5FCFF",
        padding:15,
        marginVertical:10,
        borderRadius:20,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 2 },
        shadowRadius: 20,
        elevation:5,
        margin:10,
        marginTop:2,
        flex:1
    },
    checkBox:{

    },
    container2:{
        borderWidth:1,
        borderStyle:"solid",
        backgroundColor:"#F5FCFF",
        padding:15,
        marginVertical:10,
        borderRadius:20,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 2 },
        shadowRadius: 20,
        elevation:5,
        margin:10,
        marginTop:2,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
    },
    text:{
        fontWeight:"bold",
        fontSize:16
    },
    status:{
        fontSize:14,
        color:"green",
        fontWeight:"bold",
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    locate:{
        marginLeft:5,
        fontSize:15,
        fontWeight:"bold"
    },
    date:{

    },
    detail:{
        fontSize:12,
        color:"blue",
    }
});
export default styles
