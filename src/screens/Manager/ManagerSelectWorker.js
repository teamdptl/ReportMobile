import {Appbar} from "react-native-paper";
import React from "react";
import {ScrollView, View, Text} from "react-native";
import ReportListItem from "../../components/Report/ReportListItem";
import {ButtonText, Input, InputField, InputIcon, InputSlot} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import {Button} from "@rneui/base";

const report = {"created_at": "2023-11-27T05:38:21.000000Z", "description": "Bsba", "done_by": {"message": "Đang gửi", "text": "Phản hồi của bạn đang được xử lý"}, "id": 192, "images": [{"src": "https://sgu.dy.id.vn/photos/2023/11/img1_192_d336f1786df016d04784d6fc9c6f7ff5ad1f4a4f.jpg"}], "location": "Hsbs", "status": "sent", "title": "Hài c", "user": {"mssv": "312", "name": "Trang Thanh Phúc"}};
const ManagerSelectWorker = () => {
    return <>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.goBack()}} />
            <Appbar.Content title="Chọn nhân viên xử lý" titleStyle={{fontSize: 16}} />
        </Appbar.Header>
        <ScrollView>
            <View>
                <Text>Thông tin báo cáo</Text>
                <ReportListItem item={{...report, user: report.user.name}}></ReportListItem>
            </View>
            <View>
                <Text>Chọn nhân viên</Text>
                <View>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                        <InputSlot>
                            <InputIcon>
                                <Icon name="map-marker" size={15} color="black"/>
                            </InputIcon>
                        </InputSlot>
                        <InputField placeholder="Enter Text here" />
                    </Input>
                    <Button borderRadius="$md" size={"sm"} action="primary">
                        <ButtonText>Tìm kiếm</ButtonText>
                    </Button>
                </View>

            </View>
        </ScrollView>
    </>
}

export default ManagerSelectWorker;