// Worker tạo báo cáo

import {View} from "react-native";
import {Button, ButtonText} from "@gluestack-ui/themed";
import ManagerIgnoreModal from "./ManagerIgnoreModal";
import React from "react";

const WorkerAction = ({openCreateFeedback}) => {
    return <>
        <View style={{flex: 1, marginTop: 10, marginBottom: 30, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <Button borderRadius="$md" size={"sm"} action="primary" onClick={() => openCreateFeedback()}>
                <ButtonText>Xác nhận hoàn thành</ButtonText>
            </Button>
        </View>
    </>
}

export default WorkerAction;
