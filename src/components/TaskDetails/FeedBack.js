import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import {Button} from "@rneui/themed";



const FeedBack = ({ role }) => {
    if (role==="Handle")
        return(    <View style={styles.container}>
            <View style={styles.containerDes}>
                <Text style={styles.header}>Ghi chú từ quản lý</Text>
                <Text style={styles.time}>Gia Lâm - lúc 3:00 20/09/2023</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            {/*<Divider/>*/}
            <View style={styles.containerReponse}>
                <Text style={styles.header}>Phản hồi</Text>
                <Text style={styles.title}>Thêm hình ảnh</Text>
                <TextInput style={styles.input} numberOfLines={4}></TextInput>
                <Text style={styles.title}>Mô tả phản hồi</Text>
                <TextInput style={styles.input} numberOfLines={4}></TextInput>
                <Button
                    title="Hoàn thành"
                    loadingProps={{ size: 'small', color: 'white' }}
                    buttonStyle={{
                        backgroundColor: '#3DB2FF',
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                    containerStyle={{
                        justifyContent:"center",
                        alignSelf:"center",
                        height: 40,
                        width: 200,
                        marginVertical: 20,
                    }}
                    onPress={() => console.log('aye')}
                />
            </View>
        </View>)
};
import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:10,
    },
    containerDes:{
        marginVertical:10,
    },
    containerReponse:{
        marginVertical:10,
    },
    time:{
        color:"#9F9D9D",
        alignSelf:"center",
        marginVertical:10,
    },
    header:{
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
export default ReponseComponent;