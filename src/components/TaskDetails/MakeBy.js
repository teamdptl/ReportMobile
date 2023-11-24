import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import Slide from "../../ReadOnlyComponent/Slide";
import {StyleSheet} from "react-native"

const MakeByComponent = ({ role }) => {
    const [status , setStatus] = useState(true);
    if (role === 'User') {
        if(status){
            return (
                <View style={styles.containerMakeBy}>
                    <View style={styles.headerMakeBy}>
                        <Text style={styles.textHeader}>Thực hiện bởi nhân viên 1</Text>
                        <Text style={styles.textTime}>Lúc 14:00 02/10/2023</Text>
                    </View>
                    <Slide/>
                    <View style={styles.detail}>
                        <Text style={styles.title}>Ghi chú</Text>
                        <TextInput style={styles.input}>123</TextInput>
                    </View>
                </View>
            );
        }
        else {
            return (<Text>Chua Hoan Thanh</Text>)
        }
    } else {
        // Return something else for a different role if needed
        return null;
    }
};
const styles = StyleSheet.create({
    containerMakeBy:{
        marginHorizontal:10,
        marginVertical:10,
    },
    textTime:{
        color:"#9F9D9D",
        alignSelf:"center",
    },
    textHeader:{
        fontSize:20,
        fontWeight  :"bold",
        alignSelf:"center"
    },
    headerMakeBy:{
        justifyContent:"center",
        flexDirection:"column",
        alignContent:"center",
        marginVertical:10,
    },
    text:{
        fontWeight:"bold",
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,
        backgroundColor:"#EBEBEB"
    },
    title:{
        marginVertical:10,
        fontWeight:"400"
    },
    detail:{
        marginVertical:10,
        marginHorizontal:20,
    },
})
export default MakeByComponent;