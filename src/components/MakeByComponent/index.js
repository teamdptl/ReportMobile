import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Slide from "../../ReadOnlyComponent/Slide";
import styles from "./style"


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
export default MakeByComponent;