import React, {useEffect} from "react"
import {StyleSheet, Image, Text, View, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import useReportFetch from "../../hooks/useReportFetch";
import ManagerAction from "../../components/ReportDetail/ManagerAction";
import SendDetail from "../../components/ReportDetail/SendDetail";
import ReportStatusSection from "../../components/ReportDetail/ReportStatusSection";
import WorkerAction from "../../components/ReportDetail/WorkerAction";

const ReportDetail = ({navigation, route})=>{
    const data = route.params;
    const {report, errorMsg, loading, callback} = useReportFetch({data});

    useEffect(() => {
        callback(data.id);
    }, [])

    useEffect(() => {
        console.log(report)
    }, [report]);

    const images = [
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://sgu.dy.id.vn/photos/2023/11/img1_187_e801e92cfbb7849c1ae2dc64c15bdb0fb5e9c9e8.png'
    ];

    const role ="admin"

    return(
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Chi tiết báo cáo" titleStyle={{fontSize: 16}} />
                <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>
            <GestureHandlerRootView style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    <SendDetail report={report}/>
                    {/*Chia phần này ra 1 component nhỏ */}
                    <ReportStatusSection report={report}/>
                    <ManagerAction openSelectWorker={() => navigation.navigate('SelectWorker', {report: report})}/>
                    <WorkerAction/>
                    {/*{*/}
                    {/*    role=="admin" ?*/}
                    {/*        <Button*/}
                    {/*            size="xs"*/}
                    {/*            variant="solid"*/}
                    {/*            action="primary"*/}
                    {/*            isDisabled={false}*/}
                    {/*            isFocusVisible={false}*/}
                    {/*        >*/}
                    {/*            <ButtonText>Add </ButtonText>*/}

                    {/*        </Button>*/}
                    {/*    :null*/}
                    {/*}*/}
                </ScrollView>
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    contentContainer:{
        backgroundColor: 'white'
    },
})
export default ReportDetail;
