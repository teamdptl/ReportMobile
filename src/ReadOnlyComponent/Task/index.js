import React, {useState} from "react";
import styles from "./style";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { CheckBox,ListItem } from '@rneui/themed';


const Task =(props) =>{

    const [isSelected, setSelection] = useState(false);
    const handlePress =()=>{
        props.handlePress()
    }

    return (
        <View style={styles.container}>
            {
                props.isPress ?(<CheckBox
                    checked={isSelected}
                    onPress={()=> {
                        props.handleCheckBoxChange()
                        setSelection(isSelected =>!isSelected);
                    }}
                />):null
            }
        <TouchableOpacity onPress={handlePress} style={styles.containerTask}>

            <View style={styles.header}>
                <Text style={styles.text}>Máy lạnh hỏng</Text>
                <Text style={styles.status}>HOÀN THÀNH</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.locate}>CA310</Text>
                </View>
                <Text style={styles.date}>30/09/2023</Text>
                <Text style={styles.detail}>{props.index}</Text>
            </View>
        </TouchableOpacity>
         </View>

    )
}
export default Task;