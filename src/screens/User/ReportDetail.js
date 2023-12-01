import React, {useEffect} from "react"
import {StyleSheet, Image, Text, View, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import useReportFetch from "../../hooks/useReportFetch";
import ManagerAction from "../../components/ReportDetail/ManagerAction";
import SendDetail from "../../components/ReportDetail/SendDetail";
import ReportStatusSection from "../../components/ReportDetail/ReportStatusSection";
import WorkerAction from "../../components/ReportDetail/WorkerAction";
import {useAuthContext} from "../../context/AuthContext";
import {MANAGER_ROLE, STATUS} from "../../contains/config";
import AdminFeedback from "../../components/ReportDetail/FeedbackIgnore";
import FeedbackIgnore from "../../components/ReportDetail/FeedbackIgnore";

const ReportDetail = ({navigation, route})=>{
    const data = route.params;
    const {report, errorMsg, loading, callback} = useReportFetch({data});
    const { isManager, isWorker, isUser, role } = useAuthContext();

    useEffect(() => {
        callback(data.id);
    }, [])

    useEffect(() => {
        console.log(report)
    }, [report]);

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
                    { isManager() && report.status === STATUS.SENT &&
                        <ManagerAction openSelectWorker={() => navigation.navigate('SelectWorker', {report: report})}/>
                    }

                    { (isManager() || isWorker()) && report.status === STATUS.PROCESS && report.done_by?.manager_note.length > 0 &&
                        (<Text style={{marginHorizontal: 20, color:"#979797", marginBottom: 20, textAlign: 'center'}}>
                            Ghi chú từ quản lý ({report.done_by?.manager_name}): { report.done_by?.manager_note }
                        </Text>)
                    }

                    { isWorker() && report.status === STATUS.PROCESS &&
                        <WorkerAction/>
                    }

                    { report.status === STATUS.IGNORE && (<FeedbackIgnore reason={report.done_by}/>) }

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
