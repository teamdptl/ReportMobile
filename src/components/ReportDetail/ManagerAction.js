// Manager dùng để phân công người làm hoặc báo cáo spam
import React, {useState} from "react";
import {View, StyleSheet, Modal} from "react-native";
import {Button, ButtonText} from "@gluestack-ui/themed";
import ManagerIgnoreModal from "./ManagerIgnoreModal";

const ManagerAction = ({openSelectWorker}) => {
    // Sẽ bị lỗi nếu click vào cái này quá sớm

    const [showIgnore, setShowIgnore] = useState(false);
    return <>
        <View style={{flex: 1, marginTop: 10, marginBottom: 30, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <Button borderRadius="$md" size={"sm"} action="primary" onPress={openSelectWorker}>
                <ButtonText>Phân công</ButtonText>
            </Button>
            <Button borderRadius="$md" size={"sm"} action="negative" variant="outline" onPress={() => setShowIgnore(true)}>
                <ButtonText color="$red500">Bỏ qua</ButtonText>
            </Button>
        </View>
        <ManagerIgnoreModal show={showIgnore} closeModal={() => setShowIgnore(false)}/>
    </>
}

const styles = StyleSheet.create({

})

export default ManagerAction;