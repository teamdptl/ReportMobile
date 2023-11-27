// Manager dùng để phân công người làm hoặc báo cáo spam
import React from "react";
import {View, StyleSheet} from "react-native";
import {Button, ButtonText} from "@gluestack-ui/themed";

const ManagerAction = () => {
    return <>
        <View style={{flex: 1, marginTop: 10, marginBottom: 30, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <Button borderRadius="$md" size={"sm"} action="primary">
                <ButtonText>Phân công</ButtonText>
            </Button>
            <Button borderRadius="$md" size={"sm"} action="negative" variant="outline">
                <ButtonText color="$red500">Bỏ qua</ButtonText>
            </Button>
        </View>
    </>
}

const styles = StyleSheet.create({

})

export default ManagerAction;