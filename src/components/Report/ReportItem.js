import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Checkbox} from 'expo-checkbox'; // Import Checkbox from 'expo-checkbox'

const ReportItem = (props) => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    }

    const convertDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB');
    }

    return (<View style={styles.container}>
            <TouchableOpacity onLongPress={props.handleLongPress} style={styles.containerTask}>
                <View style={styles.header}>
                    <Text style={styles.text}>{props.item.title}</Text>
                    <Text style={styles.status}>{props.item.status}</Text>
                </View>
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.locate}>{props.item.location}</Text>
                    </View>
                    <Text style={styles.date}>{ convertDate(props.item.created_at) }</Text>
                    <Text style={styles.detail}>Xem chi tiết</Text>
                </View>
            </TouchableOpacity>
            {props.longPress ? (<Checkbox
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                    style={{marginRight: 10, borderRadius: 10}}
                />) : null}
        </View>)
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems: 'center',
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
        flex:1,

        // alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
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

export default ReportItem;
