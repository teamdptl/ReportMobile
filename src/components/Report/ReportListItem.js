import React, { useState } from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import {STATUS} from "../../contains/config";

export const timeToText = (time) => {
    const dateObject = new Date(time);
    const formattedTime = dateObject.toLocaleTimeString('vi-VN', {
        hour: 'numeric',
        minute: 'numeric'
    });
    const formattedDate = dateObject.toLocaleDateString('vi-VN', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    return `${formattedTime} ${formattedDate}`;
}

export const convertStatus = (status) => {
    let output = {text: '', color: 'black'};
    switch (status){
        case STATUS.SENT:
            output.text = 'Đã gửi';
            output.color = '#F5E024'
            break;
        case STATUS.PROCESS:
            output.text = 'Thực hiện';
            output.color = '#0693F1';
            break;
        case STATUS.COMPLETE:
            output.text = 'Hoàn thành';
            output.color = '#61ab73';
            break;
        case STATUS.IGNORE:
            output.text = 'Bị hủy'
            output.color = 'black'
            break;
        default:
            output.text = 'Không xác định';
            output.color = 'black'
    }
    return output;
}

const ReportListItem = ({item, handleNavigate, deleteIds, setDeleteIds}) => {
    return <>
        <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image}
                           source={{ uri: item.images[0].src }} width={100} height={100}/>
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.headerTitle}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
                        <Text style={[styles.status, {color: convertStatus(item.status).color}]}>{convertStatus(item.status).text}</Text>
                    </View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.date}>Tạo lúc {timeToText(item.created_at)} bởi {item.user}</Text>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
                        { item.description }
                    </Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.location}>
                        <Icon name={"location-sharp"}/> {item.location}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    </>
}

export default ReportListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        padding: 10,
        borderRadius: 10,
        gap: 15,
        marginBottom: 15,
    },
    imageWrapper: {

    },
    image: {
        borderRadius: 10,
    },
    textWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
    },
    title: {
        fontWeight: "500",
        fontSize: 14,
        color: "#404040",
        flex: 0.7
    },
    status: {
        flex: 0.3,
        textAlign: 'right',
        fontSize: 12,
    },
    date: {
        marginTop: 5,
        fontSize: 12,
        color: '#959595',
    },
    description: {
        marginTop: 5,
        fontSize: 12,
        color: '#5B5757',
        borderLeftWidth: 1.5,
        borderLeftColor: '#5B5757',
        paddingLeft: 10
    },
    location: {
        marginTop: 10,
        fontSize: 12,
        color: '#454545',
    }
})