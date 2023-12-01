import {Image, Text, View} from "react-native";
import React from "react";

const ManagerWorkerItem = () => {
    return <>
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center',
                backgroundColor: '#FCFCFC', borderWidth: 1, borderColor: '#F6F5F5', padding: 10, borderRadius: 8, gap: 20
            }}>
                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} width={40} height={40}/>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, fontSize: 14, color: '#404040', fontWeight: '500'}}>Huỳnh Khánh Duy</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 12, color: '#959595'}}>Mã số: 3120410088</Text>
                </View>
            </View>
        </View>
    </>
}

export default ManagerWorkerItem;