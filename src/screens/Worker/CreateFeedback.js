import React, {useEffect, useState} from "react"
import {StyleSheet, Image, Text, View, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';

const CreateFeedback = () => {
    return <>
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Xác nhận hoàn thành" titleStyle={{fontSize: 16}} />
                <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>

        </View>
    </>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        position: 'relative'
    },
})
export default CreateFeedback;