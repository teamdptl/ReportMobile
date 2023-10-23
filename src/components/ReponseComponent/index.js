import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Slide from "../../ReadOnlyComponent/Slide";
import styles from "./style"
import {Button} from "@rneui/themed";
import Divider from "../../ReadOnlyComponent/Divider";


const ReponseComponent = ({ role }) => {
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
export default ReponseComponent;