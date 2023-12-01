import {Appbar} from "react-native-paper";
import React, {useEffect, useState} from "react";
import {ScrollView, View, Text, ActivityIndicator} from "react-native";
import ReportListItem from "../../components/Report/ReportListItem";
import {Button, ButtonText, Input, InputField, InputIcon, InputSlot, SearchIcon} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import ManagerWorkerItem from "../../components/ManagerWorker/ManagerWorkerItem";
import useWorkerFetch from "../../hooks/useWorkerFetch";
import CustomLoader from "../../components/Report/CustomLoader";
import {createJsonFetch, method} from "../../apis/CustomFetch";
import {URL_REPORT_ASSIGNMENT} from "../../contains/config";
import {Overlay} from "@rneui/themed";

const ManagerSelectWorker = ({navigation, route}) => {
    const { report } = route.params;

    const {workers, errorMsg, loading, callback} = useWorkerFetch();
    const [searchText, setSearchText] = useState('');
    const [note, setNote] = useState('');
    const [selectId, setSelectId] = useState(null);
    const [sendLoading, setSendLoading] = useState(false);

    useEffect(() => {
        callback('');
    }, []);

    const submitAssignment = () => {
        if (!selectId){
            return;
        }
        setSendLoading(true);
        createJsonFetch(URL_REPORT_ASSIGNMENT, method.POST, JSON.stringify({
            worker_id: selectId,
            reports_id: report.id,
            note: note,
        })).then(res => res.json())
            .then(json => {
                console.log(json);
                navigation.navigate('UserHome');
            })
            .catch(err => console.error(err))
            .finally(() => {
                setSendLoading(false);
            })
    }

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
                        <InputField placeholder="Tìm nhân viên" value={searchText} onChangeText={text => setSearchText(text)}/>
                    </Input>
                    <Button borderRadius="$lg" size={"md"} action="primary" onPress={() => {
                        callback(searchText);
                        setSelectId(null);
                    }}>
                        <ButtonText>Tìm kiếm</ButtonText>
                    </Button>
                </View>
                {
                    loading && (
                        <View style={{marginTop: 15, marginHorizontal: 15}}>
                            <CustomLoader/>
                        </View>
                    )
                }
                { !loading && (
                    <>
                        <ScrollView style={{marginTop: 15, paddingHorizontal: 15, maxHeight: 300}}>
                            <View style={{gap: 15}}>
                                { workers && workers.map((worker) => (
                                    <ManagerWorkerItem key={worker.id} worker={worker} selected={selectId === worker.id} onClick={() => setSelectId(worker.id)}/>
                                ))}
                            </View>
                        </ScrollView>
                        <View style={{marginHorizontal: 10, marginTop: 20}}>
                            <Text style={{marginBottom: 10, fontWeight: '500'}}>Ghi chú cho nhân viên</Text>
                            <Input
                                style={{flex: 1}}
                                variant="outline"
                                size="md"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}>
                                <InputField placeholder="Ghi chú" value={note} onChangeText={text => setNote(text)} />
                            </Input>
                        </View>
                        <View style={{flex: 1, marginTop: 20, flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
                            <Button isDisabled={selectId === null} borderRadius="$md" size={"md"} action="primary" onPress={() => submitAssignment()}>
                                <ButtonText>Xác nhận</ButtonText>
                            </Button>
                            <Button borderRadius="$md" size={"md"} action="secondary" variant="outline" onPress={() => navigation.goBack()}>
                                <ButtonText>Hủy</ButtonText>
                            </Button>
                        </View>
                    </>
                )}
            </View>
        </ScrollView>
        <Overlay isVisible={sendLoading} onBackdropPress={() => {}}>
            <ActivityIndicator size="large"/>
            <Text>Đang xử lý</Text>
        </Overlay>
    </>
}

export default ManagerSelectWorker;