import {Appbar} from "react-native-paper";
import React from "react";
import {ScrollView, View, Text} from "react-native";
import ReportListItem from "../../components/Report/ReportListItem";
import {Button, ButtonText, Input, InputField, InputIcon, InputSlot, SearchIcon} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import ManagerWorkerList from "../../components/ManagerWorker/ManagerWorkerList";

// const report = {"created_at": "2023-11-27T05:38:21.000000Z", "description": "Bsba", "done_by": {"message": "Đang gửi", "text": "Phản hồi của bạn đang được xử lý"}, "id": 192, "images": [{"src": "https://sgu.dy.id.vn/photos/2023/11/img1_192_d336f1786df016d04784d6fc9c6f7ff5ad1f4a4f.jpg"}], "location": "Hsbs", "status": "sent", "title": "Hài c", "user": {"mssv": "312", "name": "Trang Thanh Phúc"}};
const ManagerSelectWorker = ({navigation, route}) => {
    const { report } = route.params;
    // Nếu như report đã được phân việc thì không cho ghi ở api
    return <>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.goBack()}} />
            <Appbar.Content title="Chọn nhân viên xử lý" titleStyle={{fontSize: 16}} />
        </Appbar.Header>
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{paddingHorizontal: 20}}>
                <Text style={{margin: 10, fontWeight: '500'}}>Thông tin báo cáo</Text>
                <ReportListItem item={{...report, user: report.user.name}}></ReportListItem>
                <Text style={{margin: 10, fontWeight: '500'}}>Chọn nhân viên</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, gap: 5}}>
                    <Input
                        style={{flex: 1}}
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}>
                        <InputSlot>
                            <InputSlot pl="$3">
                                <InputIcon as={SearchIcon} />
                            </InputSlot>
                        </InputSlot>
                        <InputField placeholder="Tìm nhân viên" />
                    </Input>
                    <Button borderRadius="$lg" size={"md"} action="primary">
                        <ButtonText>Tìm kiếm</ButtonText>
                    </Button>
                </View>
                <ScrollView style={{marginTop: 15, paddingHorizontal: 15, maxHeight: 300}}>
                    <ManagerWorkerList/>
                </ScrollView>
                <View style={{flex: 1, marginTop: 30, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
                    <Button borderRadius="$md" size={"md"} action="primary">
                        <ButtonText>Xác nhận</ButtonText>
                    </Button>
                    <Button borderRadius="$md" size={"md"} action="secondary" variant="outline">
                        <ButtonText>Hủy</ButtonText>
                    </Button>
                </View>
            </View>
        </ScrollView>
    </>
}

export default ManagerSelectWorker;