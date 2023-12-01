import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import color from "../../contains/color";

const ManagerWorkerItem = ({selected = false, onClick , worker}) => {
    return <>
        <TouchableOpacity onPress={() => onClick()}>
            <View style={{flexDirection: 'row', alignItems: 'center',
                backgroundColor: '#FCFCFC', borderWidth: selected ? 2 : 1, borderColor: selected ? color.primaryColor : '#F6F5F5',
                padding: 10, borderRadius: 8, gap: 20
            }}>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} width={40} height={40}/>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, fontSize: 14, color: '#404040', fontWeight: '500'}}>{worker.name}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 12, color: '#959595'}}>Mã số: {worker.student_code}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </>
}

export default ManagerWorkerItem;