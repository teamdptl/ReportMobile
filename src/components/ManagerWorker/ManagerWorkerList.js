import {Image, Text, View} from "react-native";
import React from "react";
import ManagerWorkerItem from "./ManagerWorkerItem";

const ManagerWorkerList = () => {
    return <>
        <View style={{gap: 15}}>
            <ManagerWorkerItem/>
            <ManagerWorkerItem/>
            <ManagerWorkerItem/>
            <ManagerWorkerItem/>
            <ManagerWorkerItem/>
        </View>
    </>
}

export default ManagerWorkerList;