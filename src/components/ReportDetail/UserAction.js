// Hiển thị đánh giá từ người dùng cho report đã hoàn thành, hoặc xóa báo cáo
import {View} from "react-native";
import {Button, ButtonText} from "@gluestack-ui/themed";
import React, {useState} from "react";
import UserDeleteModal from "./UserDeleteModal";

const UserAction = ({report, navigation}) => {
    const [showConfirm, setShowConfirm] = useState(false);

    return <>
        <View style={{flex: 1, marginTop: 10, marginBottom: 30, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
            <Button borderRadius="$md" size={"sm"} action="negative" variant="outline" onPress={() => setShowConfirm(true)}>
                <ButtonText color="$red500">Xóa báo cáo</ButtonText>
            </Button>
        </View>
        <UserDeleteModal show={showConfirm} reportId={report.id}
                         closeModal={() => setShowConfirm(false)}
                         onSuccess={() => navigation.goBack()}
        />
    </>
}

export default UserAction;