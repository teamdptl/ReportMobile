import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ListImageHorizontal from "../ListImageHorizontal";

const WorkerFeedback = ({data, setImageIndex}) => {
    return <>
        <View style={{paddingHorizontal: 20, paddingBottom: 30}}>
            <Text style={styles.title}>Thông tin sửa chữa</Text>
            <Text style={styles.text}>{data.note}</Text>
            <ListImageHorizontal
                listImageData={data.images.map(item => item.src)}
                openImageModal={(index) => setImageIndex(index)}
            />
        </View>
    </>
}

const styles = {
    title:{
        fontWeight: "500",
        fontSize: 15,
    },
    text:{
        color:"#5d5d5d",
        fontSize:14,
        marginVertical: 10
    },
}

export default WorkerFeedback;